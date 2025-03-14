document.addEventListener('DOMContentLoaded', () => {
  const circle = document.querySelector('.js-progress-circle');
  const input = document.querySelector('.js-progress-input');
  const animationToggle = document.querySelector('.js-animation-toggle');

  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;

  let startTime;
  let animationFrameId;
  let progress = +input.value / 100;
  let isAnimationRunning = false;
  const duration = 2000;

  setProgress(progress);

  input.addEventListener('input', function() {
    let inputValue = isNaN(+this.value) ? 0 : Math.min(Math.max(+this.value, 0), 100);
    progress = inputValue / 100;

    setProgress(progress, isAnimationRunning);
    this.value = inputValue;
  });

  animationToggle.addEventListener('change', function() {
    this.checked
      ? startAnimation()
      : stopAnimation();
  });

  function animateProgress(timeStamp) {
    if (!startTime) startTime = timeStamp;
    progress = (timeStamp - startTime) / duration ;

    if (progress > 1) {
      startTime = timeStamp;
      progress = 0;
    }

    setProgress(progress, isAnimationRunning);

    animationFrameId = requestAnimationFrame(animateProgress);
  }

  function startAnimation() {
    if (!isAnimationRunning) {
      isAnimationRunning = true;
      startTime = null;
      animationFrameId = requestAnimationFrame(animateProgress);
    }
  }

  function stopAnimation() {
    isAnimationRunning = false;
    cancelAnimationFrame(animationFrameId);
  }

  function setProgress(progress, isAnimated) {
    circle.style.transition = !isAnimated ? 'stroke-dashoffset 0.2s ease-in-out' : 'none';

    let offset = circumference * (1 - progress);
    circle.style.strokeDashoffset = offset;
  }
});
