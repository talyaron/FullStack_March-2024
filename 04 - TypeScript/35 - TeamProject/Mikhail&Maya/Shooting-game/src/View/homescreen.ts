import { Weapon } from "../Model/WeaponModel";

export function renderHomeScreen(weapon:Weapon,root:HTMLElement) {

    root.innerHTML=`<div class="window">
    <div class="curtains"></div>


    <div class="weaponBox" style="width:100px;height:100px;right:0;bottom:0;position:absolute;">
    <img src="${weapon.image}" class="${weapon.name}" style="height:100%;width:100%;">
    </div>
    </div>`

    const windowElement = root.querySelector('.window') as HTMLElement;
    windowElement.addEventListener('click', () => {
        let audioShoot = new Audio(`${weapon.shootingAudio}`); 
        audioShoot.play();
    });
    
}