document.addEventListener('DOMContentLoaded', () => {
  const circle = document.querySelector('.js-progress-circle');
  const input = document.querySelector('.js-progress-input');
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;

  input.addEventListener('input', function() {
    setProgress(this.value);
  });

  function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
  }
});