export default class Progress {
  constructor(container) {
    this.container = container;
    this.progressBar = container.querySelector('.js-progress-bar');
    this.circle = container.querySelector('.js-progress-circle');
    this.input = container.querySelector('.js-progress-input');
    this.animationToggle = container.querySelector('.js-animation-toggle');
    this.hideToggle = container.querySelector('.js-hide-toggle');

    this.radius = this.circle.r.baseVal.value;
    this.circumference = 2 * Math.PI * this.radius;

    this.startTime = null;
    this.animationFrameId = null;
    this.progress = +this.input.value / 100;
    this.isAnimationRunning = false;
    this.duration = 2000;

    this.init();
  }

  init() {
    this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
    this.circle.style.strokeDashoffset = this.circumference;

    this.setProgress(this.progress, this.isAnimationRunning);

    this.input.addEventListener('input', this.updateFromInput.bind(this));
    this.animationToggle.addEventListener('change', this.toggleAnimation.bind(this));
    this.hideToggle.addEventListener('change', this.toggleVisibility.bind(this));
  }

  setProgress(progress, isAnimated) {
    this.circle.style.transition = isAnimated ? 'none' : 'stroke-dashoffset 0.3s ease-in-out';

    let offset = this.circumference * (1 - progress);
    this.circle.style.strokeDashoffset = offset;
  }

  updateFromInput() {
    if (this.isAnimationRunning) {
      this.stopAnimation();
      this.animationToggle.checked = false;
    }

    let inputValue = isNaN(+this.input.value) ? 0 : Math.min(Math.max(+this.input.value, 0), 100);
    this.progress = inputValue / 100;

    this.setProgress(this.progress, this.isAnimationRunning);
    this.input.value = inputValue;
  }

  animateProgress(timeStamp) {
    if (!this.startTime) {
      this.startTime = timeStamp - this.progress * this.duration;
    }

    let elapsedTime = timeStamp - this.startTime;
    this.progress = elapsedTime / this.duration;

    if (this.progress >= 1) {
      this.startTime = timeStamp;
      this.progress = 0;
    }

    this.setProgress(this.progress, this.isAnimationRunning);
    this.animationFrameId = requestAnimationFrame((time) => this.animateProgress(time));
  }

  startAnimation() {
    if (!this.isAnimationRunning) {
      this.isAnimationRunning = true;
      this.startTime = null;
      this.animationFrameId = requestAnimationFrame((time) => this.animateProgress(time));
    }
  }

  stopAnimation() {
    this.isAnimationRunning = false;
    cancelAnimationFrame(this.animationFrameId);
  }

  toggleAnimation() {
    if (this.animationToggle.checked) {
      this.startAnimation();
    } else {
      this.stopAnimation();
      this.input.value = Math.floor(this.progress * 100);
    }
  }

  toggleVisibility() {
    this.progressBar.classList.toggle('progress__bar_hidden');
  }
}
