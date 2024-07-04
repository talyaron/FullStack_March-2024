interface PetCard {
  name: string;
  image: string;
  price: number;
  description: string;
  type: string;
}

const petCards: PetCard[] = [];
const dog1: PetCard = {
  name: "Doggo",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1JAnVfe1VCdpsVIpd1pf6KIMeibLU2HEcA&s",
  price: 400,
  description: "cute doggo is very friendly",
  type: "dog",
};
const dog2: PetCard = {
  name: "Dogley",
  image:
    "https://www.thesprucepets.com/thmb/aakdWmF36D3RYti507u94vWSwy0=/3600x0/filters:no_upscale():strip_icc()/cute-dog-breeds-we-can-t-get-enough-of-4589340-14-4cdb2f10e1654a468f13cd95ff880834.jpg",
  price: 350,
  description: "cute Dogley is very pretty",
  type: "dog",
};
const dog3: PetCard = {
  name: "Doggy",
  image:
    "https://media-be.chewy.com/wp-content/uploads/2021/06/03163602/American-Eskimo-Dog-FeaturedImage-768x461.jpg",
  price: 250,
  description: "cute Doggy likes to play",
  type: "dog",
};
const cat1: PetCard = {
  name: "Tom",
  image:
    "https://media.4-paws.org/a/5/3/7/a537f08d227326121b80790ba54036498668c9c8/VIER%20PFOTEN_2016-07-08_011-4993x3455-1920x1329.jpg",
  price: 250,
  description: "Tom is bad at catching mice",
  type: "cat",
};
const cat2: PetCard = {
  name: "Jerry",
  image:
    "https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=600",
  price: 150,
  description: " Jerry is very funny",
  type: "cat",
};
const parrot1: PetCard = {
  name: "Willy",
  image:
    "https://assets.technologynetworks.com/production/dynamic/images/content/379495/parrots-have-a-unique-voice-print-379495-960x540.jpg?cb=12495383",
  price: 200,
  description: "Willy talks a lot",
  type: "parrot",
};
const parrot2: PetCard = {
  name: "Willow",
  image:
    "https://i.ytimg.com/vi/otV4xSdXLh0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBnSE789XJV1jpF_nBota5U81g4EA",
  price: 45,
  description: "Willow is weird",
  type: "parrot",
};
const parrot3: PetCard = {
  name: "Wilkins",
  image:
    "https://img.buzzfeed.com/buzzfeed-static/static/2021-10/13/21/campaign_images/20649ee6a907/your-day-will-be-made-once-you-see-this-adorable--2-417-1634160356-1_dblbig.jpg?resize=1200:*",
  price: 1000,
  description: "Wilkins is a tiktok star",
  type: "parrot",
};

petCards.push(dog1);
petCards.push(dog2);
petCards.push(dog3);
petCards.push(cat1);
petCards.push(cat2);
petCards.push(parrot1);
petCards.push(parrot2);
petCards.push(parrot3);

function renderPetCard(petCard: PetCard): string | undefined {
  try {
    const html: string = `<div class ="PetCard"><img src="${petCard.image}" alt = "${petCard.name} the ${petCard.type}"> <p> name: ${petCard.name} <br> price: ${petCard.price} <br> description: ${petCard.description} </p></div>  `;
    return html;
  } catch (error) {
    console.error(error);
    return "";
  }
}

function renderPetCards(petCards: PetCard[], divElement: HTMLDivElement) {
  try {
    if (!divElement) throw new Error("divElement is missing");

    const html = petCards.map((petCard) => renderPetCard(petCard)).join("");
    divElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

renderPetCards(
  petCards,
  document.querySelector("#petHolder") as HTMLDivElement
);

function getDogs(petCards: PetCard[]): PetCard[] | undefined {
  try {
    const Dogs = petCards.filter((petCard) => petCard.type === "dog");
    return Dogs;
  } catch (error) {
    console.error(error);
  }
}

function handleDogButton() {
  try {
    const Dogs = getDogs(petCards);
    renderPetCards(
      Dogs,
      document.querySelector("#petHolder") as HTMLDivElement
    );
  } catch (error) {
    console.error(error);
  }
}
function getCats(petCards: PetCard[]): PetCard[] | undefined {
  try {
    const Cats = petCards.filter((petCard) => petCard.type === "cat");
    return Cats;
  } catch (error) {
    console.error(error);
    return [];
  }
}
function handleCatButton() {
  try {
    const Cats = getCats(petCards);
    renderPetCards(
      Cats,
      document.querySelector("#petHolder") as HTMLDivElement
    );
  } catch (error) {
    console.error(error);
  }
}

function getParrots(petCards: PetCard[]): PetCard[] | undefined {
  try {
    const Parrots = petCards.filter((petCard) => petCard.type === "parrot");
    return Parrots;
  } catch (error) {
    return [];
  }
}

function handleParrotButton() {
  try {
    const Parrots = getParrots(petCards);
    renderPetCards(
      Parrots,
      document.querySelector("#petHolder") as HTMLDivElement
    );
  } catch (error) {
    console.error(error);
  }
}

function handleAllButton();
