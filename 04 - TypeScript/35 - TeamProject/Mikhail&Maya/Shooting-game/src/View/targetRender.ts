import { Target } from "../Model/TargetModel";
import { handleStartGame } from "../Controllers/handleStartGame";

export function renderTarget(targetContainer: HTMLElement) {
    targetContainer.innerHTML = `
    <div class="grid-container">
        <div class="grid-item"><div class="viewtarget" id="target"></div></div>
        <div class="grid-item"><div class="viewtarget"></div></div>
        <div class="grid-item"><div class="viewtarget"></div></div>
        <div class="grid-item"><div class="viewtarget"></div></div>
        <div class="grid-item"><div class="viewtarget"></div></div>
        <div class="grid-item"><div class="viewtarget"></div></div>
        <div class="grid-item"><div class="viewtarget"></div></div>
        <div class="grid-item"><div class="viewtarget"></div></div>
        <div class="grid-item"><div class="viewtarget"></div></div>
    </div>`;
    
    // Select all targets and animate them
    const targets = document.querySelectorAll('.viewtarget');
    targets.forEach(target => animateTarget(target as HTMLElement));

    function animateTarget(target: HTMLElement) {
        // Animation logic: pop-up and pop-down with a random delay
        setInterval(() => {
            target.classList.toggle('up'); 
        }, Math.random() * 2000 + 1000); 
    }
}