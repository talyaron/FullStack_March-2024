//model - schema
interface Creature {
    title: string;
    yearCreated: number;
    description: string;
    origin: string;
    image: string;
    x: number;
    y: number;
}

//model - data
const creatures: Creature[] = [
    {
        title: 'Griffin',
        yearCreated: 3000,
        description: 'Half Lion Half eagle',
        origin: 'Greek Mythology',
        image: 'griffin.jpg',
        x: 30,
        y: 53,
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
        x: 80,
        y: 55,
    }
];

//controller
function writeCreaturesToDOM(creatures: Creature[]): void {

    //view
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
        creatureElement.style.left = `${creature.x}%`;
        creatureElement.style.top = `${creature.y}%`;

        //add creature to the container
        creaturesContainer.appendChild(creatureElement);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    writeCreaturesToDOM(creatures);
});