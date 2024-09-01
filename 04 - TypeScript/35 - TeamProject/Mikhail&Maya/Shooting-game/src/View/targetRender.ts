import { Target } from "../Model/TargetModel";

export function renderTarget(targets: Target[], container: HTMLElement) {
    container.innerHTML = ''
   
    targets.forEach(target => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item'); 

        const targetElement = document.createElement('div');
        targetElement.classList.add('viewtarget');
        targetElement.style.backgroundImage = `url('./src/images/${target.image}')`;

        gridItem.appendChild(targetElement);
        container.appendChild(gridItem);

        animateTarget(targetElement);
    });
}

function animateTarget(targetElement: HTMLElement) {
    setInterval(() => {
        targetElement.classList.toggle('up'); 
    }, Math.random() * 2000 + 1000); 
}

