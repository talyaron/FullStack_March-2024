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
        x: 300,
        y: 530,
    },
    {
        title: 'Chimera',
        yearCreated: 3000,
        description: 'Body of a lion, the head of a goat, tail that ends in a snakes head',
        origin: 'Greek Mythology',
        image: 'chimera.jpg',
        x: 650,
        y: 420,
    },
    {
        title: 'Phoenix',
        yearCreated: 1000,
        description: 'Magnificent bird engulfed in flames',
        origin: 'Greek Mythology',
        image: 'phoenix.jpg',
        x: 1550,
        y: 300,
    },
    {
        title: 'Kirin',
        yearCreated: 5000,
        description: 'Creature with the body of a deer, the tail of an ox, hooves, and sometimes scales or a mane of fire',
        origin: 'Chinese Mythology',
        image: 'kirin.jpg',
        x: 1200,
        y: 550,
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
        creatureElement.title = `${creature.title} (${creature.origin}) (${creature.description})`; 

        creatureElement.style.backgroundImage = `url(${creature.image})`;
        creatureElement.style.left = `${creature.x}px`;
        creatureElement.style.top = `${creature.y}px`;

        creaturesContainer.appendChild(creatureElement);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    writeCreaturesToDOM(creatures);
});