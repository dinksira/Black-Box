import './style.css';

// LEVEL INFO
const levelNumber = document.getElementById('level-number');
const levelName = document.getElementById('level-name');
if (levelNumber) levelNumber.textContent = '1';
if (levelName) levelName.textContent = 'AND Gate';

// OUTPUT ELEMENTS
const outputValue = document.querySelector('.bb-output-value') as HTMLElement;
const outputState = document.querySelector('.bb-output-state') as HTMLElement;

// BUTTONS
const submitAttempt = document.getElementById('submit-attempt') as HTMLButtonElement;

// INPUT GRID
const inputButtons = document.querySelectorAll('.bb-input-btn') as NodeListOf<HTMLButtonElement>;

// ATTEMPT HISTORY
const historyBody = document.getElementById('history-body') as HTMLTableSectionElement;

// STATE
let attemptCount = 0;
const maxAttempts = 5;

// MOCK BLACK BOX RULE (AND gate example)
const blackBoxRule = (input: number) => (input & 1); // Simple AND-like logic

// INPUT SELECTION
let selectedInput: number | null = null;
inputButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // toggle selection
    inputButtons.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedInput = parseInt(btn.textContent || '0', 10);
  });
});

// SUBMIT ATTEMPT
submitAttempt?.addEventListener('click', () => {
  if (selectedInput === null) {
    alert('Please select an input first!');
    return;
  }
  if (attemptCount >= maxAttempts) {
    alert('No attempts remaining');
    return;
  }

  // Evaluate output
  const output = blackBoxRule(selectedInput);

  // Update output panel
  if (outputValue) outputValue.textContent = output.toString();
  if (outputState) outputState.textContent = 'Output evaluated';

  // Update history
  if (historyBody) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${attemptCount + 1}</td>
      <td>${selectedInput}</td>
      <td>${output}</td>
    `;
    historyBody.appendChild(row);
  }

  attemptCount++;
  const attemptsSpan = document.getElementById('attempts');
  if (attemptsSpan) attemptsSpan.textContent = `${attemptCount} / ${maxAttempts}`;
});

// LOG WHEN UI IS LOADED
document.addEventListener('DOMContentLoaded', () => {
  console.log('Black Box UI loaded');
});
