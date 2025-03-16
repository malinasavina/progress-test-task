import Progress from './components/script.js';
import '../styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const progressContainer = document.querySelector('.js-progress-bar');
  const input = document.querySelector('.js-progress-input');
  const animationToggle = document.querySelector('.js-animation-toggle');
  const hideToggle = document.querySelector('.js-hide-toggle');

  let isAnimating = false;

  const progress = new Progress(progressContainer, 75);

  input.value = progress.GetProgress();
  input.addEventListener('input', function () {
    if (isAnimating) {
      progress.StopAnimation();
      animationToggle.checked = false;
      isAnimating = false;
    }

    const inputValue = isNaN(+this.value) ? 0 : Math.min(Math.max(+this.value, 0), 100);

    progress.UpdateProgress(inputValue);

    this.value = inputValue;
  });

  animationToggle.addEventListener('change', function () {
    if (this.checked) {
      isAnimating = true;
      progress.StartAnimation();
    } else {
      isAnimating = false;
      progress.StopAnimation();
    }
  });

  hideToggle.addEventListener('change', function () {
    this.checked ? progress.HideProgress() : progress.ShowProgress();
  });
});