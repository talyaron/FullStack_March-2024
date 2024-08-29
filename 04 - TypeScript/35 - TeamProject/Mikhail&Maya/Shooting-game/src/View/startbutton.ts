
import { renderWeaponSelect } from "./weaponSelect";


export function renderStart(root:HTMLElement) {
 
    root.innerHTML = `<div class="start_button">
      <button id="start" type="button"">Start game</button>
  </div>
`;


const startButton = document.querySelector('#start');
if (startButton) {
    startButton.addEventListener('click', () => renderWeaponSelect(root));
}
}