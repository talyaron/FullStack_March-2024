import { activateLinks } from "../controllers/linksCont";
import { getRandomAnimals } from "../controllers/randomPetsOnHomePage";
import { Pet, pets } from "../models/petModel";
import { renderFooter } from "./footerView";
import { renderHeader } from "./headerView";

export function entranceToAdminPage() {
    const login = document.querySelector('#loginBtn') as HTMLButtonElement;
    login.addEventListener('click', () => {
        renderPage("admin");
    });
}

export function renderPage(page: string, pet?: Pet, filteredPets?: Pet [], selectvalue?: string) {
    const app = document.querySelector('#app') as HTMLElement;
    if (page === "home") {
        app.innerHTML = renderHomePage();
    } else {
        app.innerHTML = renderHeader();
        switch (page) {
            case "admin":
                app.innerHTML += renderAdminPage();
                break;

            case "allPets":
                (filteredPets ? app.innerHTML += renderPets(false, filteredPets, selectvalue) : app.innerHTML += renderPets());
                break;

            case "addPet":
                app.innerHTML += renderAddOrEditPetPage();
                break;

            case "edit":
                app.innerHTML += renderAddOrEditPetPage(pet!);
                break;

            case "pet":
                app.innerHTML += renderPetPage(pet!);
                break;

            default:
                break;
        }
        app.innerHTML += renderFooter();
    }
    activateLinks();
}

function renderHomePage() {
    const html = renderHeader(true) + renderWelcome() + renderEvents() + renderPets(true) + renderContact() + renderFooter();
    return html
  }

function renderAdminPage() {
    let html = `
        <div class="admin-page">
            <h1>Admin Page</h1>
            <button id="addPetBtn">New Friend Arrived</button>
            ${renderTablePets()}`
    html += "</div>";
    return html;
}

function renderTablePets() {
    try { let html = `
        <table>
                <tr>
                    <th class="imageInAdminTable">Picture</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Breed</th>
                    <th>Story</th>
                    <th>Short Story</th>
                    <th>Care</th>
                    <th>Edit</th>
                    <th></th>
                </tr>
    `;
    pets.forEach((pet) => {
        html += `<tr id="${pet.id}">
                    <td><img src="${pet.image}" alt="${pet.name}"></td>
                    <td>${pet.name}</td>
                    <td>${pet.type}</td>
                    <td>${pet.breed}</td>
                    <td>${pet.story}</td>
                    <td>${pet.shortStory}</td>
                    <td>${pet.care}</td>
                    <td><button class="table-edit-btn">Edit card</button></td>
                    <td><button class="table-delete-btn">Happily Homed 🎉</button></td>
                </tr>
                `;
    })
    return html + "</table>";
} catch (error) {
        console.error(error);
    }
}

function renderAddOrEditPetPage(pet?: Pet) {
    let html = `
    <div id="add-page">
        ${pet ? "<h1>Edit Pet</h1>" : "<h1>Add New Friend</h1>"}
        <form id="add-pet-form">
            <input type="text" name="image" id="image" placeholder="Enter URL of Pet Image" required ${pet ? `value="${pet.image}"` : ""}>
            <input type="text" name="name" id="name" placeholder="Enter Pet Name" required ${pet ? `value="${pet.name}"` : ""}>
            <input type="text" name="type" id="type" placeholder="Enter Pet Type" required ${pet ? `value="${pet.type}"` : ""}>
            <input type="text" name="breed" id="breed" placeholder="Enter Pet Breed" required ${pet ? `value="${pet.breed}"` : ""}>
            <textarea name="story" id="story" rows="6" cols="50" placeholder="Enter Pet Story" required >${pet ? `${pet.story}` : ""}</textarea>
            <textarea name="shortStory" id="shortStory" rows="4" cols="50" placeholder="Enter Pet Short Story" required >${pet ? `${pet.shortStory}` :  ""}</textarea>
            <textarea name="care" id="care" rows="6" cols="50" placeholder="Enter Pet Care" required >${pet ? `${pet.care}` : ""}</textarea>
            ${pet ? `<button class="edit-btn" id="${pet.id}">Edit Pet</button>` : `<button id="add-pet">Add Pet</button>`}
        </form>
    </div>
    `;
    return html;
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
            <div class="pets-list__pet-image"><img src="${pet.image}" alt="${pet.name}"></div>
            <h3>${pet.name}</h3>
            <p>${pet.type}/${pet.breed}</p>
            <p>${pet.shortStory}</p>
        </div>
    `;
    return petCart
  }

  function renderPets(home?: boolean, filteredPets?: Pet[], selectvalue?: string) {
    let petsList = [];
    const randomPetsList = getRandomAnimals(pets, 6);
    (home ? petsList = randomPetsList.map((pet) => renderPet(pet)) : (filteredPets ? petsList = filteredPets.map((pet) => renderPet(pet)) :petsList = pets.map((pet) => renderPet(pet))));
    const petsCart = `
        <section id="pets">
            <h2 id="our-pets">Our Pets</h2>
            ${(home ? '' : (filteredPets ? selectValue(selectvalue!) : '<div class="pets-list__filter"><select id="type-pet" name="type-pet""><option value="All">All</option><option value="Dog">Dog</option><option value="Cat">Cat</option><option value="Parrot">Bird</option><option value="Snake">Reptiles</option></select><input type="text" id="search-pet" placeholder="Search for a pet"><button id="search-btn">Search</button></div>') )}
            <section class="pets-list">
                ${petsList.join('')}
                ${home ? '<button id="all-pets">All our Pets</button>' : ''}
            </section>
        </section>
    `;
    return petsCart
  }

  function selectValue(selectvalue: string) {
    const html = `
    <div class="pets-list__filter">
        <select id="type-pet" name="type-pet"">
            <option value="All" ${(selectvalue === 'All' ? 'selected' : '')}>All</option>
            <option value="Dog" ${(selectvalue === 'Dog' ? 'selected' : '')}>Dog</option>
            <option value="Cat" ${(selectvalue === 'Cat' ? 'selected' : '')}>Cat</option>
            <option value="Parrot" ${(selectvalue === 'Parrot' ? 'selected' : '')}>Bird</option>
            <option value="Snake" ${(selectvalue === 'Snake' ? 'selected' : '')}>Reptiles</option>
        </select>
        <input type="text" id="search-pet" placeholder="Search for a pet">
        <button id="search-btn">Search</button>
    </div>`;
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

  function renderPetPage(pet: Pet) {
    const petCart = `
        <div class="pet-page">
            <div class="pet-page__left">
                <img src="${pet.image}" alt="${pet.name}">
            </div>
            <div class="pet-page__right">
                <h2>Hello! My name is ${pet.name}</h2>
                <p>I am a <b>${pet.type}/${pet.breed}</b></p>
                <h4>This is my story: </h4>
                <p>${pet.story}</p>
                <h4>This is very important for me: </h4>
                <p>${pet.care}</p>
            </div>
        </div>
    `;
    activateLinks();
    return petCart
  }