import './style.css';

const levelName = document.getElementById('level-name');
if (levelName) levelName.textContent = 'Level 1 · AND Gate';

const outputValue = document.querySelector('.bb-output-slot__value') as HTMLElement;
const outputHint = document.querySelector('.bb-output-slot__hint') as HTMLElement;
const submitAttempt = document.getElementById('submit-attempt') as HTMLButtonElement;

submitAttempt?.addEventListener('click', () => {
  outputValue.textContent = '1';
  outputHint.textContent = 'Mock output (wire logic next)';
});
