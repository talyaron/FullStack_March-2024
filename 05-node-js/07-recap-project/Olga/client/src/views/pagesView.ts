import { Pet } from "../../../server/src/models/petsModel";
import { renderFooter } from "./footerView";
import { renderHeader } from "./headerView";

export function renderPetPage(pet: Pet) {
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
    const app = document.querySelector('#app') as HTMLElement;
    app.innerHTML = renderHeader() + petCart + renderFooter();
  }