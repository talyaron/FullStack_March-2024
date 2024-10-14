//view
function renderPet(pet: any) {
    const html = `
    <div class="pet" >
    <img src="${pet.imageURL}" alt="${pet.name}">
    <h2>${pet.name}</h2>
    <p>${pet.species}</p>
    <p>${pet.age}</p>
    <p>${pet.price}</p>
    <button onclick="handleDeletePet('${pet.id}')">Delete</button>
    </div>
    `;
    return html;
}

function renderPets(pets:any, domElement: HTMLElement|null) {
    try {
        const html = pets.map(pet => renderPet(pet)).join('');
        if (!domElement) throw new Error('No element found');
        domElement.innerHTML = html

    } catch (error) {
        console.error(error);

    }

}

async function main(){
    try {
        const response = await fetch('http://localhost:3000/pets/get-all-pets');
        if(!response.ok) throw new Error('Cannot fetch pets');
        const {pets} = await response.json();
        if(!pets) throw new Error('Cannot fetch pets deconstructed');
        renderPets(pets, document.querySelector('#pets'));


    } catch (error) {
        console.error(error);
        
    }
}

async function handelAddPetToDB(e:any){
    e.preventDefault();
    try {
       const form = e.target;
         const pet = {
              name: form.name.value,
              species: form.species.value,
              age: form.age.valueAsNumber,
              price: form.price.valueAsNumber,
              imageURL: form.imageURL.value
         }
        
            const response = await fetch('http://localhost:3000/pets/add-pet',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pet)
            });

            if(!response.ok) throw new Error('Cannot add pet');
            const {pets, error} = await response.json();
            console.log(error);
            if(!pets) throw new Error('Cannot add pet deconstructed');
            console.log(pets)
            renderPets(pets, document.querySelector('#pets'));

    } catch (error) {
        console.error(error);
    }
}

async function handleDeletePet(id:string){
    try {
        if(!id) throw new Error('No id');
        const response = await fetch(`http://localhost:3000/pets/delete-pet-id`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        });
        if(!response.ok) throw new Error('Cannot delete pet');

        main();
    } catch (error) {
        console.error(error);
    }
}