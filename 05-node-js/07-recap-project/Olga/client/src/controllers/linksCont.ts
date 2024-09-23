import { renderPage } from "../views/pagesView";
import { Pet, pets } from "../models/petModel";
// import { renderPetPage } from "../views/pagesView";
import { getDataFromDB } from "./asyncFunctions";

export function activateLinks() {
    try {
        entranceToAdminPage();
        handleClickToPetCart();
        handleClickToMenu();
        handleClickToAddBtn();
        handleAddFormSubmit();
        handleClickDeleteBtn();
        handleClickEditBtn();
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

function handleClickDeleteBtn() {
    try {
        const deleteBtns = document.querySelectorAll('.delete-btn');
        if (deleteBtns.length > 0) {
            deleteBtns.forEach((deleteBtn) => {
                deleteBtn.addEventListener('click', () => {
                    try {
                        const id = deleteBtn!.parentElement!.parentElement!.id as string;
                        const petIndex = pets.findIndex((pet) => pet.id === id);
                        if (petIndex === -1) {
                            throw new Error('Pet not found');
                        }
    
                        pets.splice(petIndex, 1);
                        console.log(id);
                        deletePetFromDB(id);
                        renderPage('admin');
                        handleClickDeleteBtn();
                        if (!id) throw new Error('Pet not found');
                    } catch (error) {
                        console.error(error);
                    }
                });
            })
        }
        
    } catch (error) {
        console.error(error);
    }
}

async function deletePetFromDB(id: string) {
    const response = await fetch(`api/pets/delete-pet/${id}`, {
        method: 'DELETE',
    });
    const pet: Pet = await response.json();
    return pet
}

function handleClickEditBtn() {
    try {
        const editBtns = document.querySelectorAll('.edit-btn');
        if (editBtns.length > 0) {
            editBtns.forEach((editBtn) => {
                editBtn.addEventListener('click', () => {
                    try {
                        const id = editBtn!.parentElement!.parentElement!.id as string;
                        const pet = pets.find((pet) => pet.id === id);
                        renderPage('edit', pet);
                        updatePetOnDB(id);
                        if (!id) throw new Error('Pet not found');
                    } catch(error) {
                        console.error(error)
                    }
                });
            })
        }
    } catch (error) {
        console.error(error);
    }
}

async function updatePetOnDB(id: string) {

    const response = await fetch(`api/pets/update-pet/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.querySelector('#name') as HTMLInputElement,
            type: document.querySelector('#type') as HTMLInputElement,
            breed: document.querySelector('#breed') as HTMLInputElement,
            story: document.querySelector('#story') as HTMLInputElement,
            shortStory: document.querySelector('#short-story') as HTMLInputElement,
            image: document.querySelector('#image') as HTMLInputElement,
            care: document.querySelector('#care') as HTMLInputElement
        }),
    });
    const pet: Pet = await response.json();
    return pet
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
            renderPage("pet", pet);
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

function handleClickToMenu() {
    try {
        const homeBtn = document.querySelector('#nav-home');
        homeBtn?.addEventListener('click', () => {
            renderPage('home');
        });
        const eventsBtn = document.querySelector('#nav-events');
        eventsBtn?.addEventListener('click', () => {
            renderPage('home');
            document.querySelector("#events")!.scrollIntoView();
        });
        const petsBtn = document.querySelector('#nav-pets');
        petsBtn?.addEventListener('click', () => {
            renderPage('home');
            document.querySelector("#our-pets")!.scrollIntoView();
        });
        const contactBtn = document.querySelector('#nav-contact');
        contactBtn?.addEventListener('click', () => {
            renderPage('home');
            document.querySelector("#contact")!.scrollIntoView();
        });
    } catch (error) {
        console.error(error);
    }
}

function handleClickToAddBtn() {
    try {
        const addBtn = document.querySelector('#addPetBtn');
        addBtn?.addEventListener('click', () => {
            renderPage('addPet');
        });
    } catch (error) {
        console.error(error);
    }
}

function handleAddFormSubmit() {
    try {
        const submitBtn = document.querySelector('#add-pet');
        submitBtn?.addEventListener('click', () => {
            const form = document.querySelector('#add-pet-form') as HTMLFormElement;
            if (!form) throw new Error('Form not found');
            form.addEventListener('submit', async (event) => {
                event.preventDefault();
                const name = form.name.value as string;
                const type = form.type.value as string;
                const breed = form.breed.value as string;
                const story = form.story.value as string;
                const shortStory = form.shortStory.value as string;
                const image = form.image.value as string;
                const care = form.care.value as string;
                // const {name, type, breed, story, shortStory, image, care} = form.values;

                
                await addPetToDB(name, type, breed, story, shortStory, image, care);
                await getDataFromDB();
                renderPage('admin');
                form.reset();
            });
        });
    } catch (error) {
        console.error(error);
    }
}

async function addPetToDB(name: string, type: string, breed: string, story: string, shortStory: string, image: string, care: string) {
    const response = await fetch('api/pets/add-pet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            type,
            breed,
            story,
            shortStory,
            image,
            care
        }),
    });
    const pet: Pet = await response.json();
    return pet
}