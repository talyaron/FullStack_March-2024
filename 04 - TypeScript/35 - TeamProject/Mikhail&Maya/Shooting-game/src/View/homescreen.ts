import { Weapon } from "../Model/WeaponModel";
import { Target } from "../Model/TargetModel";
import { renderTarget } from "./targetRender";

export function renderHomeScreen(weapon:Weapon,root:HTMLElement, targets: Target[]) {

    root.innerHTML=`<div class="window">
    <div class="curtains"></div>


    <div class="weaponBox" style="width:150px;height:150px;right:0;bottom:0;position:absolute;">
    <img src="${weapon.image}" class="${weapon.name}" style="height:100%;width:100%;">
    </div>
    </div>`

    const windowElement = root.querySelector('.window') as HTMLElement;
    windowElement.addEventListener('click', (event: MouseEvent) => {
        const x = event.clientX - windowElement.offsetLeft;
        const y = event.clientY - windowElement.offsetTop;

      
        const bulletHole = document.createElement('img');
        bulletHole.src = '/src/images/weapons/bulletHole.png'; 
        bulletHole.style.position = 'absolute';
        bulletHole.style.width = '30px'; 
        bulletHole.style.height = '30px'; 
        bulletHole.style.left = `${x - 15}px`; 
        bulletHole.style.top = `${y - 15}px`;  
        bulletHole.style.pointerEvents = 'none'; 

        
        windowElement.appendChild(bulletHole);

        setTimeout(() => {
            windowElement.removeChild(bulletHole);
        }, 500);

        const audioShoot = new Audio(`${weapon.shootingAudio}`);
        audioShoot.play();
    });

    const targetContainer = document.createElement('div');
    targetContainer.classList.add('grid-container'); 
    root.appendChild(targetContainer);

    renderTarget(targets, targetContainer);

    
}