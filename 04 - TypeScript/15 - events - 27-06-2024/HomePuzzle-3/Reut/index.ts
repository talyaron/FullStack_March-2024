interface Animal {
    name: string;
    image: string;
    type: string;
    description: string;
}

const becky: Animal = {
    name: "Becky",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqOPNmWE-UNRByjKifTCYMcJuXj7yxzQ1Gw&s",
    type: "Dog",
    description: "Becky is an energetic 3 years old who loves the cold."
};

const ducky: Animal = {
    name: "Ducky",
    image: "https://www.treehugger.com/thmb/8JsMhv9XP5xzgWEy1Xfdh9xWbaM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/duckling-close-up-500315849-572917c93df78ced1f0b99ec.jpg",
    type: "Duck",
    description: "Ducky was brought a couple months ago. He loves the water and eating.",
};

const catnip: Animal = {
    name: "Catnip",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNkeu7EjB9ULHXFR3lOHYXNV-OEydiUd5JvQ&s",
    type: "Cat",
    description: "Her name comes from her favorite flower. Catnip loves to be outside, play and lay in the sun. We suggest that a family who has a garden will adopt her.",
};

const russell: Animal = {
    name: "Russell",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3pZ0n02QCYcWLdZ8diwv-tzI4oykw9H2p5g&s",
    type: "Pig",
    description: "Russell is a handsome little 'mini pig'. At only 6 months old he loves to play, eat and take everyone`s attention.",
};

const jerry: Animal = {
    name: "Jerry",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmzTQoBx_sRKpD7aLuKhq2093vhjp3I1AClQ&s",
    type: "Dog",
    description: "Jerry was found in the trash when he was a puppy. Now at 5 years old, he found his happiness again and he is waiting to finally have his own loving family",
};

const rosemary: Animal = {
    name: "Rosemary",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQh9eTM9gCvEPvKAEEau87A1ExCHc33a7POg&s",
    type: "Cat",
    description: "Rosemary is a happy, loving mom who took care of her babies alone until they found families. Now it`s her turn.",
};

const animals: Animal[] = [
    becky,
    ducky,
    catnip,
    russell,
    jerry,
    rosemary,
];

const animalsDiv = document.querySelector("#animals") as HTMLDivElement;

function createAnimalCard(animal: Animal): string {
    const html: string = `<div class="card">
        <img src="${animal.image}" alt="${animal.name}">
        <h3>${animal.name}</h3>
        <p>${animal.description}</p>
      </div>`;
    return html;
}

function displayAnimals(animals: Animal[]): void {
    let html = ``;
    animals.forEach(animal => html += createAnimalCard(animal));
    animalsDiv.innerHTML = html;
}

function showAllPets(): void {
    displayAnimals(animals);
}

function filterAnimals(type: string): void {
    const filteredAnimals = animals.filter(animal => animal.type === type);
    displayAnimals(filteredAnimals);
}

displayAnimals(animals);
