import Progress from './components/script.js';
import '../styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const progressContainer = document.querySelector('.js-progress-bar');
  const input = document.querySelector('.js-progress-input');
  const animationToggle = document.querySelector('.js-animation-toggle');
  const hideToggle = document.querySelector('.js-hide-toggle');

  const progress = new Progress(progressContainer, 75);

  input.value = Math.trunc(progress.progress * 100);
  input.addEventListener('input', function () {
    const inputValue = isNaN(+this.value) ? 0 : Math.min(Math.max(+this.value, 0), 100);
    progress.progress = inputValue / 100;

    progress.UpdateProgress();

    this.value = Math.trunc(progress.progress * 100);
  });

  animationToggle.addEventListener('change', () => {

  });

  hideToggle.addEventListener('change', function () {
    this.checked ? progress.HideProgress() : progress.ShowProgress();
  });
});