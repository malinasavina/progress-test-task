import Progress from './components/Progress.js';
import '../styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const progressContainer = document.querySelector('.js-progress-bar');
  const input = document.querySelector('.js-progress-input');
  const animationToggle = document.querySelector('.js-animation-toggle');
  const hideToggle = document.querySelector('.js-hide-toggle');

  const progress = new Progress(progressContainer);
  let isAnimated = false;
  let isHidden = false;

  input.value = progress.getProgressValue();
  input.addEventListener('input', function () {
    if (isAnimated) {
      progress.setProgressState('normal');
      animationToggle.checked = false;
      isAnimated = false;
    }

    if (isHidden) {
      progress.setProgressState('normal');
      hideToggle.checked = false;
      isHidden = false;
    }

    progress.setProgressValue(this.value);

    this.value = progress.getProgressValue();
  });

  animationToggle.addEventListener('change', function () {
    if (this.checked) {
      if (isHidden) {
        hideToggle.checked = false;
      }
      progress.setProgressState('animated');
      isAnimated = true;
    } else {
      progress.setProgressState('normal');
      isAnimated = false;
    }
  });

  hideToggle.addEventListener('change', function () {
    if (this.checked) {
      progress.setProgressState('hidden');
      animationToggle.checked = false;
      isHidden = true;
    } else {
      progress.setProgressState('normal');
      isHidden = false;
    }
  });
});