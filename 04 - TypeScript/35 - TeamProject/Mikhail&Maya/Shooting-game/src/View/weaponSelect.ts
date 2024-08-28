import { handleStartGame } from "../Controllers/handleStartGame";
import { renderStart } from "./startbutton";
export function renderWeaponSelect(root:HTMLElement){
    console.log("hello world");
    root.innerHTML=`<div class="weaponSelect">
    <div class="weaponCard">
    <img src="pistol.jpg" alt="Pistol" style="width:100px;height:100px;">
    </div>
    </div>`;
     
    const startGameImg = document.getElementById('startGame');
    if (startGameImg) {
        startGameImg.addEventListener('click', handleStartGame);
    }

}