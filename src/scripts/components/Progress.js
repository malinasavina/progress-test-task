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

    this.circle = container.querySelector('.js-progress-circle');
    this.radius = this.circle.r.baseVal.value;
    this.circumference = 2 * Math.PI * this.radius;

    this.animFrameId = null;
    this.animStartTime = null;
    this.animDuration = 2000;

    this.initUI();
  }

  initUI() {
    this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
    this.circle.style.strokeDashoffset = this.circumference;

    this.currentState.update(this);
  }

  setProgressState(state) {
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
    this.circle.style.transition = 'none';
    this.animFrameId = requestAnimationFrame((time) => this.animate(time));
  }

  animate(timeStamp) {
    if (!this.animStartTime) this.animStartTime = timeStamp;
    let animProgress = (timeStamp - this.animStartTime) / this.animDuration;

    if (animProgress > 1) {
      this.animStartTime = timeStamp;
      animProgress = 0; // Зацикливаем анимацию
    }

    let offset = this.circumference * (1 - animProgress);
    this.circle.style.strokeDashoffset = offset;

    this.animFrameId = requestAnimationFrame((time) => this.animate(time));

    this.value = animProgress * 100;
  }

  stopAnimation() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    this.animStartTime = null;
  }

  showProgress() {
    this.container.classList.remove('progress__bar_hidden');
  }

  hideProgress() {
    this.container.classList.add('progress__bar_hidden');
  }

}

class ProgressStates {
  update() {

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
  }
}