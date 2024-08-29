const inputField = document.getElementById('inputField') as HTMLInputElement;
const displayText = document.getElementById('displayText') as HTMLParagraphElement;

inputField.addEventListener('input', () => {
  displayText.textContent = inputField.value;
});