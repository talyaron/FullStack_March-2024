import { renderPage } from "../views/adminPageView";
import { Pet, pets } from "../../../server/src/models/petsModel";
import { renderPetPage } from "../views/pagesView";

export function activateLinks() {
    try {
        entranceToAdminPage();
        handleClickToPetCart();
    } catch (error) {
        console.error(error);
    }
}

export function entranceToAdminPage() {
    const login = document.querySelector('#loginBtn') as HTMLButtonElement;
    login.addEventListener('click', () => {
        renderPage("admin");
    });
}


function handleClickToPetCart() {
    try {
        const petsCarts = document.querySelectorAll('.pets-list__pet-cart');
        console.log(petsCarts);
        petsCarts.forEach((petCart) => {
          petCart.addEventListener('click', () => {
            const id = petCart.getAttribute('id') as string;
            console.log(id);
            getPetFromDB(id)
            if (!id) throw new Error('Pet not found');
            if (!pets) throw new Error('Pets not found');
            if (pets.length === 0) throw new Error('Pets not found');
            const pet = pets.find((pet) => pet.id === id.toString());
            if (!pet) throw new Error('Pet not found');
            renderPetPage(pet);
          })
        })
    } catch (error) {
        console.error(error);
    }
  }

  async function getPetFromDB(id: string) {
    const response = await fetch(`api/pets/get-pet/${id}`);
    const pet: Pet = await response.json();
    return pet
  }