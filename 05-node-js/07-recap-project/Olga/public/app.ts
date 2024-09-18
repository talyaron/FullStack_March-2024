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
    breed: string;
    story: string;
    shortStory: string;
    image: string;
    care: string;
    constructor(id: string, name: string, type: string, breed: string, story: string, shortStory: string, image: string, care: string) {
      this.id = id
      this.name = name
      this.type = type
      this.breed = breed
      this.story = story
      this.shortStory = shortStory
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
    console.log(pets);
}

async function getDataFromDB() {
    const response = await fetch('api/pets/get-all-pets');
    const petsDB: Pet[] = await response.json();
    petsDB.forEach((pet) => {
        pets.push(new Pet(pet.id, pet.name, pet.type, pet.breed, pet.story, pet.shortStory, pet.image, pet.care));
    });
}

function renderApp() {
    const app = document.querySelector('#app') as HTMLElement;
    const html = renderHeader() + renderWelcome() + renderPets();
    app.innerHTML = html;
}

function renderHeader() {
    const header = `
        <header>
            <h1>Happy Tails Shelter</h1>
            <nav>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </nav>
        </header>
    `;
    return header
}

function renderWelcome() {
    const welcome = `
        <div class="welcome">
            <img src="./images/logo.png" alt="logo">
            <p>Happy Tails Shelter is dedicated to rescuing and caring for homeless, abandoned, and mistreated animals in the local community. Our shelter provides a safe and nurturing environment for a wide variety of animals, including dogs, cats, birds, and reptiles. We strive to give each animal the love, medical attention, and rehabilitation they need to recover from past hardships.</p>
            <p>Our mission goes beyond providing temporary care; we focus on finding each animal a forever home where they can thrive. Through partnerships with local veterinarians and trainers, we ensure that all our animals receive proper vaccinations, medical treatments, and behavior training to prepare them for adoption. We also work to raise awareness about responsible pet ownership, offering educational programs for families and potential adopters.</p>
            <p>In addition, we organize community outreach events, such as adoption drives and pet interaction sessions, to help people connect with animals in need. Every animal that passes through our doors deserves a second chance, and with your help, we can continue to change their lives for the better.</p>
        </div>
    `;
    return welcome
}

function renderPet(pet: Pet) {
    const petCart = `
        <div class="pets-list__pet-cart">
            <img src="${pet.image}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>${pet.type}/${pet.breed}</p>
            <p>${pet.shortStory}</p>
        </div>
    `;
    return petCart
}

function renderPets() {
    const petsList = pets.map((pet) => renderPet(pet));
    const petsCart = `
        <section class="pets-list">
            ${petsList.join('')}
        </section>
    `;
    return petsCart
}