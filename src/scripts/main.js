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

  const resetToNormal = () => {
    if (isAnimated || isHidden) {
      progress.setProgressState('normal');
      animationToggle.checked = false;
      hideToggle.checked = false;
      isAnimated = false;
      isHidden = false;
    }
  };

  const updateInputValue = () => {
    input.value = progress.getProgressValue();
  };
  updateInputValue();

  input.addEventListener('input', function () {
    resetToNormal();
    progress.setProgressValue(this.value);
    updateInputValue();
  });

  animationToggle.addEventListener('change', function () {
    if (this.checked) {
      if (isHidden) {
        hideToggle.checked = false;
      }
      progress.setProgressState('animated');
      isAnimated = true;
    } else {
      resetToNormal();
      updateInputValue();
    }
  });

  hideToggle.addEventListener('change', function () {
    if (this.checked) {
      progress.setProgressState('hidden');
      animationToggle.checked = false;
      isHidden = true;
      updateInputValue();
    } else {
      resetToNormal();
    }
  });
});
