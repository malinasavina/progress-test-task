import Progress from './components/Progress.js';
import '../styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const progressContainers = document.querySelectorAll('.progress');

  progressContainers.forEach(container => {
    new Progress(container);
  });
});