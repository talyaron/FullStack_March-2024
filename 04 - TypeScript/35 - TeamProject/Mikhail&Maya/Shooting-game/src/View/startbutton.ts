import { Target } from "../Model/TargetModel";
import { Weapon } from "../Model/WeaponModel";
import { renderWeaponSelect } from "./weaponSelect";


export function renderStart(root:HTMLElement) {
    root.innerHTML = `<div class="start_button">
      <button id="start" type="button" onclick="renderWeaponSelect(root)">Start game</button>
  </div>
`;}