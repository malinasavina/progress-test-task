class Progress {
  constructor(container) {
    this.container = container;
    this.circle = container.querySelector('.js-progress-circle');
    this.input = container.querySelector('.js-progress-input');
    this.animationToggle = container.querySelector('.js-animation-toggle');

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
    this.animationToggle.addEventListener('change', this.toggleAnimation.bind(this))
  }

  setProgress(progress, isAnimated) {
    this.circle.style.transition = !isAnimated ? 'stroke-dashoffset 0.3s ease-in-out' : 'none';

    let offset = this.circumference * (1 - progress);
    this.circle.style.strokeDashoffset = offset;
  }

  updateFromInput() {
    let inputValue = isNaN(+this.input.value) ? 0 : Math.min(Math.max(+this.input.value, 0), 100);
    this.progress = inputValue / 100;

    this.setProgress(this.progress, this.isAnimationRunning);
    this.input.value = inputValue;
  }

  animateProgress(timeStamp) {
    if (!this.startTime) this.startTime = timeStamp;
    this.progress = (timeStamp - this.startTime) / this.duration ;

    if (this.progress > 1) {
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
    this.animationToggle.checked
      ? this.startAnimation()
      : this.stopAnimation();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const progressContainers = document.querySelectorAll('.progress');

  progressContainers.forEach(container => {
    new Progress(container);
  });
});
