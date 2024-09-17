class User {
    name: string;
    mail: string;
    password: string;
    isAdmin: boolean;

    constructor(name: string, mail: string, password: string, isAdmin?: boolean) {
        this.name = name
        this.mail = mail
        this.password = password
        this.isAdmin = isAdmin || false
    }
}

class Pet {
    id: string;
    name: string;
    type: string;
    story: string;
    image: string;
    care: string;
    constructor(id: string, name: string, type: string, story: string, image: string, care: string) {
        this.id = id
        this.name = name
        this.type = type
        this.story = story
        this.image = image
        this.care = care
    }
}

const user = new User('goust', '9kK2A@example.com', '123456', false);
const pets: Pet[] = []

async function init() {
    const app = document.querySelector('main');
    await getDataFromDB();
    renderApp();
}

async function getDataFromDB() {
    const response = await fetch('/data');
    const petsDB: Pet[] = await response.json();
    petsDB.forEach((pet) => {
        pets.push(new Pet(pet.id, pet.name, pet.type, pet.story, pet.image, pet.care))
    });
}

function renderApp() {
    const app = document.querySelector('main') as HTMLElement;
    app.innerHTML = '';
    renderUser();
    renderPets();
}

function renderHeader() {
    const header = document.querySelector('header') as HTMLElement;
}