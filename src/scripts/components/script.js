export default class Progress {
  constructor(container, percent = 0) {
    this.container = container;
    this.states = {
      normal: new Normal(),
      animated: new Animated(),
      hidden: new Hidden()
    };
    this.currentState = this.states.normal;
    this.previousState = null;

    this.circle = container.querySelector('.js-progress-circle');
    this.radius = this.circle.r.baseVal.value;
    this.circumference = 2 * Math.PI * this.radius;
    this.progress = percent;

    this.animFrameId = null;


    this.initUI();
  }

  initUI() {
    this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
    this.circle.style.strokeDashoffset = this.circumference;

    this.UpdateProgress(this.progress);
  }

  UpdateProgress(percent) {
    if (this.currentState !== this.states.hidden) {
      this.currentState = this.states.normal;
      this.circle.style.transition = 'stroke-dashoffset 0.3s ease-in-out';
    }

    let offset = this.circumference * (1 - percent / 100);
    this.circle.style.strokeDashoffset = offset;
  }

  GetProgress() {
    return Math.trunc(this.progress);
  }

  StartAnimation() {
    this.currentState.StartAnimation(this);
  }

  StopAnimation() {
    this.currentState.StopAnimation(this);
  }

  ShowProgress() {
    this.currentState.ShowProgress(this);
  }

  HideProgress() {
    this.currentState.HideProgress(this);
  }
}

class ProgressStates {
  StartAnimation() {
    throw new Error(`В ${this.constructor.name} не описан метод StartAnimation()`);
  }

  StopAnimation() {
    throw new Error(`В ${this.constructor.name} не описан метод StopAnimation()`);
  }

  ShowProgress() {
    throw new Error(`В ${this.constructor.name} не описан метод ShowProgress()`);
  }

  HideProgress() {
    throw new Error(`В ${this.constructor.name} не описан метод HideProgress()`);
  }
}

class Normal extends ProgressStates {
  StartAnimation(progress) {
    progress.currentState = progress.states.animated;
    progress.circle.style.transition = 'none';

    let animStartTime = null;
    let animDuration = 2000;

    progress.animFrameId = requestAnimationFrame((time) => animate(time));

    function animate(timeStamp) {
      if (!animStartTime) animStartTime = timeStamp;
      let animProgress = (timeStamp - animStartTime) / animDuration;

      if (animProgress > 1) {
        animStartTime = timeStamp;
        animProgress = 0; // Зацикливаем анимацию
      }

      let offset = progress.circumference * (1 - animProgress);
      progress.circle.style.strokeDashoffset = offset;

      progress.animFrameId = requestAnimationFrame((time) => animate(time));
    }
  }

  ShowProgress(progress) {
    progress.container.classList.remove('progress__bar_hidden');
    progress.currentState = progress.previousState;
  }

  HideProgress(progress) {
    progress.container.classList.add('progress__bar_hidden');

    progress.previousState = progress.currentState;
    progress.currentState = progress.states.hidden;
  }
}

class Animated extends ProgressStates {
  StopAnimation(progress) {
    progress.currentState = progress.states.normal;
    cancelAnimationFrame(progress.animFrameId);
  }

  HideProgress(progress) {
    progress.container.classList.add('progress__bar_hidden');

    progress.previousState = progress.currentState;
    progress.currentState = progress.states.hidden;
  }
}

class Hidden extends ProgressStates {
  StartAnimation(progress) {

  }

  StopAnimation(progress) {
    progress.currentState = progress.states.normal;
    cancelAnimationFrame(progress.animFrameId);
  }

  ShowProgress(progress) {
    progress.container.classList.remove('progress__bar_hidden');
    progress.currentState = progress.previousState;
  }
}