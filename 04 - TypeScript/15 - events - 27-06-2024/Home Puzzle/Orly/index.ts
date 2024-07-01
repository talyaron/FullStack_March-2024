interface Creature {
    title: string;
    yearCreated: number;
    description: string;
    origin: string;
    image: string;
    x: number;
    y: number;
}

const creatures: Creature[] = [
    {
        title: 'Griffin',
        yearCreated: 3000,
        description: 'Half Lion Half eagle',
        origin: 'Greek Mythology',
        image: 'griffin.jpg',
        x: 30,
        y: 25,
    },
    {
        title: 'Chimera',
        yearCreated: 3000,
        description: 'Body of a lion, the head of a goat, tail that ends in a snakes head',
        origin: 'Greek Mythology',
        image: 'chimera.jpg',
        x: 65,
        y: 42,
    },
    {
        title: 'Phoenix',
        yearCreated: 1000,
        description: 'Magnificent bird engulfed in flames',
        origin: 'Greek Mythology',
        image: 'phoenix.jpg',
        x: 15,
        y: 30,
    },
    {
        title: 'Kirin',
        yearCreated: 5000,
        description: 'Creature with the body of a deer, the tail of an ox, hooves, and sometimes scales or a mane of fire',
        origin: 'Chinese Mythology',
        image: 'kirin.jpg',
        x: 50,
        y: 55,
    }
];



function writeCreaturesToDOM(creatures: Creature[]): void {
    const creaturesContainer = document.querySelector(".creatures-container");

    if (!creaturesContainer) {
        console.error("Creatures container not found");
        return;
    }

    creatures.forEach(creature => {
        const creatureElement = document.createElement("div");
        creatureElement.className = "creature";
        creatureElement.title = `${creature.title})`; 
        creatureElement.style.backgroundImage = `url(${creature.image})`;
        creatureElement.style.left = `${creature.x}%`;
        creatureElement.style.top = `${creature.y}%`;

        creatureElement.addEventListener('click', () => {
            creatureElement.style.backgroundImage = `url('boom.gif')`;
            setTimeout(() => creatureElement.remove(), 500); 
        });

        creaturesContainer.appendChild(creatureElement);
    });
}


function moveCreatureRandomly(creature: HTMLElement): void {
    const direction = Math.random() * 2 * Math.PI;
    const speed = 100; 

    const xMove = Math.cos(direction) * speed;
    const yMove = Math.sin(direction) * speed;

    const newX = parseFloat(creature.style.left) + xMove;
    const newY = parseFloat(creature.style.right) + yMove;

    creature.style.left = `${Math.max(0, Math.min(newX, window.innerWidth - creature.clientWidth))}px`;
    creature.style.top = `${Math.max(0, Math.min(newY, window.innerHeight - creature.clientHeight))}px`;
}

function randomizeMovement(): void {
    const creatureElements = document.querySelectorAll(".creature");

    creatureElements.forEach(creature => {
        moveCreatureRandomly(creature as HTMLElement);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    writeCreaturesToDOM(creatures);
    setInterval(randomizeMovement, 1000); 
});