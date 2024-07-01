interface Creature {
    name: string;
    x: number;
    y: number;
    src: string;
}

const creatures: Creature[] = [];
const dragon1: Creature = {
    name: "dragon1",
    x: 5,
    y: 25,
    src: "https://thumbs.dreamstime.com/b/generative-ai-illustration-red-cute-young-dragon-isolated-white-background-png-cute-red-dragon-character-isolated-white-286852838.jpg"
}

creatures.push(dragon1);

function renderCreature(creature: Creature): string {
    try {
        const html = `<img src="${creature.src}" style="top: ${creature.y}%; left: ${creature.x}%;" class="creature">`;
        return html;
    } catch (error) {
        console.error(error);
        return "";
    }
}

function renderCreatures(creatures: Creature[], divElement: HTMLDivElement) {
    try {
        if (!divElement) throw new Error("divElement is missing");

        const html = creatures.map(creature => renderCreature(creature)).join("");

        divElement.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}

renderCreatures(creatures, document.querySelector("#map") as HTMLDivElement);