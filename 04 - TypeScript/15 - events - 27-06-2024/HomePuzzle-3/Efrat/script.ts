const card = document.querySelector(".cards") as HTMLDivElement; 
const breeds = document.querySelector("#breeds") as HTMLSelectElement;
interface Pet {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  gender: String;
  type: string;
  breed:string:
}

const lab: Pet = {
  id: `${Math.random()}`,
  name: "Trumpeldog",
  image: "Labrador.jpg",
  description: "The Labrador Retriever or simply Labrador is a British breed of retriever gun dog. It was developed in the United Kingdom from St. John's water dogs imported from the colony of Newfoundland (now a province of Canada), and was named after the Labrador region of that colony. It is among the most commonly kept dogs in several countries, particularly in the European world. ",
  price: 15000,
  gender: "M",
  type: "Dog",
  breed:"Labrador Retriever"
};

const spitz: Pet = {
  id: `${Math.random()}`,
  name: "Lady",
  image: "330px-Goldilocks.gif",
  description: "The German Spitz (German: Deutscher Spitz) is a breed of spitz-type dogs from Germany. It is considered a single breed, with five distinct varieties based on size and colour: the Wolfsspitz/Keeshond, the Giant Spitz or Großspitz, the Medium Spitz or Mittelspitz, the Miniature Spitz or Kleinspitz and the Pomeranian or Zwergspitz ('Dwarf Spitz'). ",
  price: 10000,
  gender: "F",
  type: "Dog",
  breed:"German Spitz"
};

const GermanShepherd: Pet = {
    id: `${Math.random()}`,
    name: "Nana",
    image: "German_Shepherd.jpg",
    description: "The German Shepherd,[a] also known in Britain as an Alsatian, is a German breed of working dog of medium to large size. The breed was developed by Max von Stephanitz using various traditional German herding dogs from 1899. ",
    price: 25000,
    gender: "F",
    type: "Dog",
    breed:"German Shepherd"
  };
  const TamaskanDog: Pet = {
    id: `${Math.random()}`,
    name: "Mike",
    image: "Tamaskan.jpg",
    description: "Tamaskan are large, athletic dogs, and slightly taller than German Shepherds. With regard to build, they are larger than typical sled dogs but smaller than the Alaskan Malamute. ",
    price: 2000,
    gender: "M",
    type: "Dog",
    breed:"Tamaskan Dog"
  };
let pets:Pet[] = [lab, spitz,GermanShepherd,TamaskanDog];
const petsHolder:Pet[] = pets;
const breedDefault:string = "All";

function renderPets(pets:Pet[],card:HTMLDivElement,breeds:HTMLSelectElement,breedDefault:string){
 try {
    if(!card) throw new Error("Missing Card Element");
   const cards:string = pets.map(pet => htmlCards(pet)).join("");
   card.innerHTML = cards;
   
   let breed:string = petsHolder.map(pet=> htmlBreed(pet,breedDefault)).join("");
   if (breedDefault === "All"){
    breed = `<option value="all" selected>All</option>` + breed;;
  } else {
  breed = `<option value="all">All</option>` + breed;;
  }
   breeds.innerHTML = breed;
 } catch (error) {
    console.error(error)
 }
}

function htmlCards(pet:Pet):string{
    try {
        const PedCardHtml:string = `<div class="card"><h4>${pet.name}</h4>
        <div class="card-image"><img src="./images/${pet.image}" alt="breed"></div>
        <div class="info">${pet.description}<p><span class="subtitle">Breed:</span> ${pet.breed}<p><span class="subtitle">Price:</span> ${pet.price}</div>
        </div>`;
        return PedCardHtml;
    } catch (error) {
        
    }
}
function handelBreedFilter(event){

    try {
        let breedSelected:string = ''; 
        const filterPets =  pets.filter(pet=> pet.breed === event.target.value);
        if (filterPets.length > 0){
            pets = filterPets;
            breedSelected = event.target.value;
        }
        else{
            pets = petsHolder;
            breedSelected = breedDefault;
        }
            renderPets(pets,card,breeds,breedSelected);
    } catch (error) {
        return console.error(error);
    }
}

function htmlBreed(pet:Pet,breadDefault:string):string{
    try {
        let breedHtml:string = '';
        if (breadDefault === pet.breed) {
         breedHtml = `<option  value="${pet.breed}" selected>${pet.breed}</option>`;
        }
         else{
            breedHtml = `<option  value="${pet.breed}">${pet.breed}</option>`;
         }
        return breedHtml;
    } catch (error) {
        console.error(error);
    }
}


function handelSort(event){
    try { 
        const petSortPrice = pets.slice().sort((a,b)=>a.price - b.price);
        renderPets(petSortPrice,card,breeds,breedDefault); 
    } catch (error) {
        console.error(error);
    }
}


renderPets(pets,card,breeds,breedDefault); 