import { handleStartGame } from "../Controllers/handleStartGame";
import { renderStart } from "./startbutton";
export function renderWeaponSelect(root:HTMLElement){
    console.log("hello world");
    root.innerHTML=`<div class="weaponSelect">
    <div class="weaponCard">
    <img src="./images/pistol.jpg">
    </div>
    </div>`;
     
    const startGameImg = document.getElementById('startGame');
    if (startGameImg) {
        startGameImg.addEventListener('click', handleStartGame);
    }

}