interface Pets {
  id: string;
  type: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

const pets: Pets[] = [
  {
    id: `${Math.random()}`,
    type: "dog",
    name: "Labrador",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/330px-Labrador_on_Quantock_%282175262184%29.jpg ",
    price: 200,
    description: "The Labrador is friendly, energetic, and playful",
  },
  {
    id: `${Math.random()}`,
    type: "dog",
    name: "German Shepherd",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg/330px-German_Shepherd_-_DSC_0346_%2810096362833%29.jpg ",
    price: 300,
    description:
      "German Shepherds were bred specifically for their intelligence",
  },
  {
    id: `${Math.random()}`,
    type: "dog",
    name: "Corgi",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/14_year_old_Corgi.jpg/255px-14_year_old_Corgi.jpg ",
    price: 500,
    description:
      "Corgi is a strong, athletic, and lively little herder who is affectionate and companionable",
  },
  {
    id: `${Math.random()}`,
    type: "cat",
    name: "Chartreux",
    imageUrl:
      "https://www.purina.com/_gatsby/image/95d40c1d26970f3fd4eece5caa86469b/3f561170167ef1bfda649098ed0314c7/Chartruese_body_6.avif?u=https%3A%2F%2Fwww.purina.com%2Fsites%2Fdefault%2Ffiles%2Fmedia%2Fimage%2FChartruese_body_6.jpg&a=w%3D500%26h%3D500%26fm%3Davif%26q%3D75&cd=868712ea9cee27ac2ce2350839fdf527",
    price: 300,
    description: "The Chartreux has a sweet, smiling expression.",
  },
  {
    id: `${Math.random()}`,
    type: "cat",
    name: "Maine Coon",
    imageUrl:
      "https://www.purina.com/_gatsby/image/4cf5224a1f74f185977fe85ad864847d/3f561170167ef1bfda649098ed0314c7/MaineCoon_body_7.avif?u=https%3A%2F%2Fwww.purina.com%2Fsites%2Fdefault%2Ffiles%2Fmedia%2Fimage%2FMaineCoon_body_7.jpg&a=w%3D500%26h%3D500%26fm%3Davif%26q%3D75&cd=b69526a9b9800c6acd19ef265be4cea0",
    price: 300,
    description:
      "Maine Coon cats are gentle natured and friendly, making them good companions",
  },
  {
    id: `${Math.random()}`,
    type: "cat",
    name: "Himalayan",
    imageUrl:
      "https://www.purina.com/_gatsby/image/95d40c1d26970f3fd4eece5caa86469b/3f561170167ef1bfda649098ed0314c7/Chartruese_body_6.avif?u=https%3A%2F%2Fwww.purina.com%2Fsites%2Fdefault%2Ffiles%2Fmedia%2Fimage%2FChartruese_body_6.jpg&a=w%3D500%26h%3D500%26fm%3Davif%26q%3D75&cd=868712ea9cee27ac2ce2350839fdf527",
    price: 400,
    description: "Himalayan is a sweet and mild-tempered feline.",
  },
  {
    id: `${Math.random()}`,
    type: "sugar glider",
    name: "Sugar Glider",
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQGnvAgxWx6PbS6rxNKkF0iEMVEQEocdsiXHnXpo8BqVlnBmcY_",
    price: 600,
    description: "Friendly and calm creatures make great companions.",
  },
];

const container = document.querySelector(".card") as HTMLDivElement;

function createPetCard(pet: Pets): HTMLElement {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
          <img src="${pet.imageUrl}" alt="${pet.name}">
          <h3>${pet.name}</h3>
          <p>${pet.description}</p>
          <div class="price">$${pet.price}</div>
    `;
  return card;
}

function renderPets(pets: Pets[], divElement: HTMLDivElement) {
  try {
    if (!divElement) throw new Error("divElement is missing");

    divElement.innerHTML = "";
    pets.forEach((pet) => {
      const petCard = createPetCard(pet);
      divElement.appendChild(petCard);
    });
  } catch (error) {
    console.error(error);
  }
}

function filterPets(type: string): void {
  if (type === "all") {
    renderPets(pets, container);
  } else {
    const filteredPets = pets.filter((pet) => pet.type === type);
    renderPets(filteredPets, container);
  }
}

function sortPetsByPrice(): void {
  const sortedPets = [...pets].sort((a, b) => a.price - b.price);
  renderPets(sortedPets, container);
}

(window as any).filterPets = filterPets;
(window as any).sortPetsByPrice = sortPetsByPrice;
renderPets(pets, container);
