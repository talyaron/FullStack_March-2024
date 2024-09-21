
class Pet{
    Id: String;
    species: String
    yearOfBirth: number;
    price: number;
    constructor( species:String, age:number,price:number,imageUrl:string){
    this.Id = Math.random().toString();
      this.species = species;
      this.yearOfBirth = new Date().getFullYear() - age;
      this.price = price;
    }
    }

    const pets:Pet[] = []

    const apiUrl = 'http://localhost:3000/pets';

    async function renderPets(pets: Pet[]) {
      const petContainer = document.querySelector('pet-container');
      petContainer.innerHTML = ''; 

      pets.forEach(pet => {
          const petElement = document.createElement('div');
          petElement.innerHTML = `
              <h3>${pet.species}</h3>
              <p>Year of Birth: ${pet.yearOfBirth}</p>
              <p>Price: ${pet.price}</p>
              <button onclick="deletePet('${pet.Id}')">Delete</button>
              <button onclick="editPet('${pet.Id}')">Edit</button>
          `;
          petContainer.appendChild(petElement);
      });
  }

  async function updatePet(id: string, species: string, age: number, price: number) {
    const updatedPet = { species, yearOfBirth: new Date().getFullYear() - age, price };

    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPet),
    });

    if (response.ok) {
        getAllPets(); 
    } else {
        console.error('Error updating pet');
    }
}

async function deletePet(id: string) {
  const response = await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
  });

  if (response.ok) {
      getAllPets(); // Refresh the list after deletion
  } else {
      console.error('Error deleting pet');
  }
}