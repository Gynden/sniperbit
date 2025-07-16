
const loginForm = document.getElementById('login-form');
const panel = document.querySelector('.panel');
const modeSelect = document.getElementById('mode');
const stakeInput = document.getElementById('stake');
const stopWinInput = document.getElementById('stopWin');
const stopLossInput = document.getElementById('stopLoss');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  panel.style.display = 'block';
  applyModeSettings();
});

modeSelect.addEventListener('change', applyModeSettings);

function applyModeSettings() {
  const mode = modeSelect.value;
  if (mode === 'conservador') {
    stakeInput.value = 1;
    stopWinInput.value = 2;
    stopLossInput.value = 2;
  } else if (mode === 'moderado') {
    stakeInput.value = 2;
    stopWinInput.value = 4;
    stopLossInput.value = 4;
  } else if (mode === 'agressivo') {
    stakeInput.value = 3;
    stopWinInput.value = 6;
    stopLossInput.value = 6;
  }
}
