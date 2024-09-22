import { activateLinks } from './controllers/linksCont';
import './style.scss'
import { renderFooter } from './views/footerView';
import { renderHeader } from './views/headerView';

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

// const user = new User('guest', '9kK2A@example.com', '123456', false);
const pets: Pet[] = []

document.addEventListener('DOMContentLoaded', async () => {
  await init();
})

async function init() {
  await getDataFromDB();
  renderApp();
  activateLinks();
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
  const html = renderHomePage();
  app.innerHTML = html;
}

function renderHomePage() {
  const html = renderHeader(true) + renderWelcome() + renderEvents() + renderPets() + renderContact() + renderFooter();
  return html
}

function renderContact() {
  const contact = `
      <section id="contact">
          <h2>Contact</h2>
          <p>Please contact us here</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1705.6998519436818!2d34.8015758!3d31.237356600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502663c77885555%3A0x2a026020b3e3527e!2sRegional%20Veterinarian%20Office!5e0!3m2!1sen!2sil!4v1726928511240!5m2!1sen!2sil" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
  `;
  return contact
}

function renderWelcome() {
  const welcome = `
      <div class="welcome">
          <div class="welcome__left">
              <img src="./src/images/logo.png" alt="logo">
          </div>
          <div class="welcome__right">
              <p>Happy Tails Shelter is dedicated to rescuing and caring for homeless, abandoned, and mistreated animals in the local community. Our shelter provides a safe and nurturing environment for a wide variety of animals, including dogs, cats, birds, and reptiles. We strive to give each animal the love, medical attention, and rehabilitation they need to recover from past hardships.</p>
              <p>Our mission goes beyond providing temporary care; we focus on finding each animal a forever home where they can thrive. Through partnerships with local veterinarians and trainers, we ensure that all our animals receive proper vaccinations, medical treatments, and behavior training to prepare them for adoption. We also work to raise awareness about responsible pet ownership, offering educational programs for families and potential adopters.</p>
              <p>In addition, we organize community outreach events, such as adoption drives and pet interaction sessions, to help people connect with animals in need. Every animal that passes through our doors deserves a second chance, and with your help, we can continue to change their lives for the better.</p>
          </div>
      </div>
  `;
  return welcome
}

function renderEvents() {
  const events = `
      <section id="events">
          <h2>Events</h2>
          <p>Upcoming events will be listed here</p>
      </section>
  `;
  return events
}

function renderPet(pet: Pet) {
  const petCart = `
      <div class="pets-list__pet-cart" id="${pet.id}">
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
      <h2 id="our-pets">Our Pets</h2>
      <section class="pets-list">
          ${petsList.join('')}
      </section>
  `;
  return petsCart
}