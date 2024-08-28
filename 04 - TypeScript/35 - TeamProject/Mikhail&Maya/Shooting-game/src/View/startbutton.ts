import { Target } from "../Model/TargetModel";
import { Weapon } from "../Model/WeaponModel";


export function renderStart() {
    document.querySelector<HTMLDivElement>('#page')!.innerHTML = `
  <div class="start_button">
      <button id="start" type="button" onclick="renderWeaponSelect()">Start game</button>
  </div>
`}