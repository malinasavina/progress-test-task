export default class Progress {
  constructor(container, percent) {
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
    this.progress = percent / 100;

    this.animStartTime = null;
    this.animFrameId = null;
    this.animDuration = 2000;


    this.initUI();
  }

  initUI() {
    this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
    this.circle.style.strokeDashoffset = this.circumference;

    this.UpdateProgress();
  }

  UpdateProgress() {
    this.currentState.UpdateProgress(this);
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

  AnimateProgress() {

  }
}

class ProgressStates {
  UpdateProgress() {
    throw new Error(`В ${this.constructor.name} не описан метод UpdateProgress()`);
  }

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
  UpdateProgress(progress) {
    let offset = progress.circumference * (1 - progress.progress);

    progress.circle.style.transition = 'stroke-dashoffset 0.3s ease-in-out';
    progress.circle.style.strokeDashoffset = offset;
  }

  StartAnimation(progress) {
    progress.currentState = progress.states.animated;
  }

  HideProgress(progress) {
    progress.container.classList.add('progress__bar_hidden');

    progress.previousState = progress.currentState;
    progress.currentState = progress.states.hidden;
  }
}

class Animated extends ProgressStates {
  UpdateProgress(progress) {
    let offset = progress.circumference * (1 - progress.progress);

    progress.circle.style.transition = 'none';
    progress.circle.style.strokeDashoffset = offset;
    progress.currentState = progress.states.normal;
  }

  StopAnimation(progress) {
    progress.currentState = progress.states.normal;
  }

  HideProgress(progress) {
    progress.container.classList.add('progress__bar_hidden');

    progress.previousState = progress.currentState;
    progress.currentState = progress.states.hidden;
  }
}

class Hidden extends ProgressStates {
  UpdateProgress(progress) {
    let offset = progress.circumference * (1 - progress.progress);
    progress.circle.style.strokeDashoffset = offset;
  }

  StartAnimation(progress) {

  }

  StopAnimation(progress) {

  }

  ShowProgress(progress) {
    progress.container.classList.remove('progress__bar_hidden');
    progress.currentState = progress.previousState;
  }
}