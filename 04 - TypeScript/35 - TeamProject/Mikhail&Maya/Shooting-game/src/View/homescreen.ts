import { Weapon } from "../Model/WeaponModel";
import { Target } from "../Model/TargetModel";
import { renderTarget } from "./targetRender";
import { handleTargetHit } from "../Controllers/handelTargerHit";

export function renderHomeScreen(weapon: Weapon,root: HTMLElement,targets: Target[]) {
  root.innerHTML = `
        <div class="window">
            <div class="curtains"></div>
            <div class="weaponBox" style="width:150px;height:150px;right:0;bottom:0;position:absolute;">
                <img src="${weapon.image}" class="${weapon.name}" style="height:100%;width:100%;">
            </div>
        </div>
        <div id="score" style="position:absolute; top:20px; right:20px; font-size:24px; color:white;">Score: 0</div>`;

    // background music
        const gameAudio = new Audio(`/src/audio/gameAudio.mp4`);
        gameAudio.play();
        gameAudio.addEventListener('ended', () => {
            gameAudio.currentTime = 0; 
            gameAudio.play(); 
        });
        //``````````````````````````````````````````````````````

   //shooting audio and shooting holes 
  const windowElement = root.querySelector(".window") as HTMLElement;

  windowElement.addEventListener("click", (event: MouseEvent) => {
    const x = event.clientX - windowElement.offsetLeft;
    const y = event.clientY - windowElement.offsetTop;

    const bulletHole = document.createElement("img");
    bulletHole.src = "/src/images/weapons/bulletHole.png";
    bulletHole.style.position = "absolute";
    bulletHole.style.width = "30px";
    bulletHole.style.height = "30px";
    bulletHole.style.left = `${x - 15}px`;
    bulletHole.style.top = `${y - 15}px`;
    bulletHole.style.pointerEvents = "none";

    windowElement.appendChild(bulletHole);

    setTimeout(() => {
      windowElement.removeChild(bulletHole);
    }, 500);

    const audioShoot = new Audio(`${weapon.shootingAudio}`);
    audioShoot.play();
    //```````````````````````````````````````````````````````````````````````   
    let intervalId: number | null = null;
    //function randomizeTargets(i:number) {
        intervalId = setInterval(() => {
            let i=Math.floor(Math.random() * 6);
        root.innerHTML = ''; 
            targets[i].setRandomPosition();
            root.innerHTML = `
         <div class="window">
            <div class="curtains"></div>
            <img class="targetImg" src="${targets[i].image}" style="height:300px;width:150px;position:absolute;top:${targets[i].position.y}px;right:${targets[i].position.x}px;">
            <div class="weaponBox" style="width:150px;height:150px;right:0;bottom:0;position:absolute;">
                <img src="${weapon.image}" class="${weapon.name}" style="height:100%;width:100%;">
            </div>
          </div>
        <div id="score" style="position:absolute; top:20px; right:20px; font-size:24px; color:white;">Score: 0</div>`;
            //renderTarget(weapon, root,target);
            
        }, 10000);
    //}
    
    //setInterval(randomizeTargets(i), 5000);
    //hitting and render targets
   
   /* let hitTarget = false;

    targets.forEach((target) => {
        const targetBounds = target.gameContainer.getBoundingClientRect(); 
        const windowBounds = windowElement.getBoundingClientRect(); 
    
        const clickX = event.clientX - windowBounds.left; 
        const clickY = event.clientY - windowBounds.top;
    
        
        if (
          clickX > targetBounds.left &&
          clickX < targetBounds.right &&
          clickY > targetBounds.top &&
          clickY < targetBounds.bottom
        ) {
          handleTargetHit(target);  
          hitTarget = true;
        }
    });
    if (hitTarget) {
        const audioShoot = new Audio(`${weapon.shootingAudio}`);
        audioShoot.play();
      }*/
  });

  //const targetContainer = document.createElement("div");
 // targetContainer.classList.add("grid-container");
 // root.appendChild(targetContainer);

  //renderTarget(targets, targetContainer);
  
}
