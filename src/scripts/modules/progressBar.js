document.addEventListener('DOMContentLoaded', () => {
  const circle = document.querySelector('.js-progress-circle');
  const input = document.querySelector('.js-progress-input');
  const animationToggle = document.querySelector('.js-animation-toggle');
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;

  setProgress(input.value);

  input.addEventListener('input', function() {
    let inputValue = isNaN(+this.value) ? 0 : Math.min(Math.max(+this.value, 0), 100);

    setProgress(inputValue);
    this.value = inputValue;
  });

  animationToggle.addEventListener('change', function() {
    this.checked
      ? circle.classList.add('progress__circle_animated')
      : circle.classList.remove('progress__circle_animated');
  });

  function setProgress(percent) {
    let offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
  }
});