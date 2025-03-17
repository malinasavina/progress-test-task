export default class Progress {
  constructor(container) {
    this.container = container;
    this.states = {
      normal: new Normal(),
      animated: new Animated(),
      hidden: new Hidden()
    };
    this.currentState = this.states.normal;
    this.value = 0;

    this.circle = null;
    this.circumference = null;

    this.animFrameId = null;
    this.animStartTime = null;
    this.animDuration = 2000;

    this.initUI();
  }

  initUI() {
    const createSvg = (isDynamic) => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '170');
      svg.setAttribute('height', '170');
      svg.classList.add('class', 'progress__svg');

      if (isDynamic) {
        svg.classList.add('progress__svg_dynamic');
      }

      return svg;
    };

    const createCircle = (isDynamic) => {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', '85');
      circle.setAttribute('cy', '85');
      circle.setAttribute('r', '61');
      circle.classList.add('progress__circle');

      if (isDynamic) {
        circle.classList.add('js-progress-circle');
      }

      return circle;
    };

    const createProgressbar = () => {
      const progressSvg = createSvg();
      const progressSvgDynamic = createSvg(true);

      const progressCircle = createCircle();
      const progressCircleDynamic = createCircle(true);

      progressSvg.appendChild(progressCircle);
      progressSvgDynamic.appendChild(progressCircleDynamic);

      let progressWrapper = document.createElement('div');
      progressWrapper.classList.add('progress');
      progressWrapper.appendChild(progressSvg);
      progressWrapper.appendChild(progressSvgDynamic);

      this.container.appendChild(progressWrapper);

      this.circle = progressCircleDynamic;

      const radius = this.circle.r.baseVal.value;
      this.circumference = 2 * Math.PI * radius;
    };

    createProgressbar();

    this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
    this.circle.style.strokeDashoffset = this.circumference;

    this.currentState.update(this);
  }

  setProgressState(state) {
    if (!this.states[state] || this.currentState === this.states[state]) return;

    this.currentState = this.states[state];
    this.currentState.update(this);
  }

  setProgressValue(value) {
    this.value = isNaN(+value) ? 0 : Math.min(Math.max(+value, 0), 100);
    this.currentState.update(this);
  }

  getProgressValue() {
    return Math.trunc(this.value);
  }

  startAnimation() {
    if (this.animFrameId) return;

    this.circle.style.transition = 'none';
    this.animFrameId = requestAnimationFrame((time) => this.animate(time));
  }

  animate(timeStamp) {
    let animProgress = this.value / 100;

    if (!this.animStartTime) {
      this.animStartTime = timeStamp - animProgress * this.animDuration;
    }

    let elapsedTime = timeStamp - this.animStartTime;
    animProgress = elapsedTime / this.animDuration;

    if (animProgress >= 1) {
      this.animStartTime = timeStamp;
      animProgress = 0;
    }

    let offset = this.circumference * (1 - animProgress);
    this.circle.style.strokeDashoffset = offset;

    this.value = animProgress * 100;

    this.animFrameId = requestAnimationFrame((time) => this.animate(time));
  }

  stopAnimation() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    this.animStartTime = null;
  }

  showProgress() {
    const wrapper = this.container.querySelector('.progress');
    wrapper.classList.remove('progress_hidden');
  }

  hideProgress() {
    const wrapper = this.container.querySelector('.progress');
    wrapper.classList.add('progress_hidden');
  }

}

class ProgressStates {
  update() {
    throw new Error(`Method update() does not exist in ${this.constructor.name}`);
  }
}

class Normal extends ProgressStates {
  update(progress) {
    progress.showProgress();
    progress.stopAnimation();

    progress.circle.style.transition = 'stroke-dashoffset 0.3s ease-in-out';
    let offset = progress.circumference * (1 - progress.value / 100);
    progress.circle.style.strokeDashoffset = offset;
  }
}

class Animated extends ProgressStates {
  update(progress) {
    progress.showProgress();

    if (!progress.animFrameId) {
      progress.startAnimation();
    }
  }
}

class Hidden extends ProgressStates {
  update(progress) {
    progress.stopAnimation();
    progress.hideProgress();

    progress.circle.style.strokeDashoffset = progress.circumference;
  }
}