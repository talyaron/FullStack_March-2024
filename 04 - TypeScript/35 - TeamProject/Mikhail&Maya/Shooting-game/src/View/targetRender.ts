import { Target } from "../Model/TargetModel";
import { handleStartGame } from "../Controllers/handleStartGame";

// export function renderTarget(targetContainer: HTMLElement) {
//     targetContainer.innerHTML = `
//     <div class="grid-container">
//         <div class="grid-item"><div class="viewtarget" id="target"></div></div>
//         <div class="grid-item"><div class="viewtarget"></div></div>
//         <div class="grid-item"><div class="viewtarget"></div></div>
//         <div class="grid-item"><div class="viewtarget"></div></div>
//         <div class="grid-item"><div class="viewtarget"></div></div>
//         <div class="grid-item"><div class="viewtarget"></div></div>
//         <div class="grid-item"><div class="viewtarget"></div></div>
//         <div class="grid-item"><div class="viewtarget"></div></div>
//         <div class="grid-item"><div class="viewtarget"></div></div>
//     </div>`;
    
//     // Select all targets and animate them
//     const targets = document.querySelectorAll('.viewtarget');
//     targets.forEach(target => animateTarget(target as HTMLElement));

//     function animateTarget(target: HTMLElement) {
//         // Animation logic: pop-up and pop-down with a random delay
//         setInterval(() => {
//             target.classList.toggle('up'); 
//         }, Math.random() * 2000 + 1000); 
//     }
// }

export function renderTarget(targets: Target[], container: HTMLElement) {
    container.innerHTML = ''; // Clear previous content

    targets.forEach(target => {
        // Create an HTML element for each target
        const targetElement = document.createElement('div');
        targetElement.classList.add('viewtarget');
        targetElement.style.left = `${target.position.x}px`;
        targetElement.style.top = `${target.position.y}px`;

        // Store the element as part of the target object if needed
        targetElement.id = target.id; // Attach the ID

        // Append the target element to the container
        container.appendChild(targetElement);

        // Now animate the target
        animateTarget(targetElement);
    });
}

function animateTarget(targetElement: HTMLElement) {
    setInterval(() => {
        targetElement.classList.toggle('up'); // Toggle the "up" class for pop-up animation
    }, Math.random() * 2000 + 1000); // Randomize delay for pop-up
}