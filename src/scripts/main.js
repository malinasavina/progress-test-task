import Progress from './components/Progress.js';
import '../styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const progressContainer = document.querySelector('.progress');

  new Progress(progressContainer, 75, 'normal');
});