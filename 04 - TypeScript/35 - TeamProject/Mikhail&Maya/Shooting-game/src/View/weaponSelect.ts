import { renderStart } from "./startbutton";
export function renderWeaponSelect(root:HTMLElement){
    
    root.innerHTML=`<div class="weaponSelect">
    <div class="weaponCard">
    <img src="./images/pistol.jpg" onclick="handleStartGame()>
    </div>
    </div>`;
     
}