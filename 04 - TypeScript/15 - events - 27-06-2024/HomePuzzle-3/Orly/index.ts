interface Pet {
    name: string;
    imageUrl: string;
    description: string;
    price: number;
    type: string;
}

const pets: Pet[]=[
    {

        name: 'Milo',
        imageUrl: 'https://cdn.britannica.com/72/234472-050-735B6214/maltese-dog.jpg',
        description: 'Very friendly.',
        price: 1000,
        type: 'dog',

    },
    {

        name: 'Browny',
        imageUrl: 'https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg',
        description: 'Loves to play.',
        price: 1500,
        type: 'dog',

    },
    {

        name: 'Cooper',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/62af384068c95446e8d4003f/1718743236466-Y0HSOH2ZLUK2GD39XA3N/IMG_9810.jpeg?format=1000w',
        description: 'Blue eyed cat.',
        price: 2000,
        type: 'cat',

    },
    {

        name: 'Cookie',
        imageUrl: 'https://media-be.chewy.com/wp-content/uploads/2024/04/02173915/beautiful-cats-maine-coon.jpg',
        description: 'Likes to chase mice.',
        price: 1800,
        type: 'cat',

    },
    {

        name: 'Ruby',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/5f31e14e89237f65ccad168b/1611811074355-6KVSJ2MMU64RWN0AI3K9/image-asset.jpeg',
        description: 'Loves to dig.',
        price: 800,
        type: 'rabbit',

    },
    {

        name: 'Daisy',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4zH7eRWJd6ZADd-aOuGyfzUAG_KYi5pduA&s',
        description: 'Likes spinach.',
        price: 900,
        type: 'rabbit',

    }
];

const container = document.getElementById('pet-container') as HTMLDivElement;

function createPetCard(pet: Pet): HTMLDivElement {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = pet.imageUrl;
    card.appendChild(img);

    const name = document.createElement('h3');
    name.innerText = pet.name;
    card.appendChild(name);

    const description = document.createElement('p');
    description.innerText = pet.description;
    card.appendChild(description);

    const price = document.createElement('p');
    price.innerText = `$${pet.price}`;
    card.appendChild(price);

    return card;
}

function displayPets(pets: Pet[]) {
    container.innerHTML = ''
    pets.forEach(pet => {
        const card = createPetCard(pet);
        container.appendChild(card);
    });
}


document.getElementById('show-all')?.addEventListener('click', () => displayPets(pets));

document.getElementById('filter-dogs')?.addEventListener('click', () => {
    const filteredPets = pets.filter(pet => pet.type === 'dog');
    displayPets(filteredPets);
});

document.getElementById('filter-cats')?.addEventListener('click', () => {
    const filteredPets = pets.filter(pet => pet.type === 'cat');
    displayPets(filteredPets);
});

document.getElementById('filter-rabbits')?.addEventListener('click', () => {
    const filteredPets = pets.filter(pet => pet.type === 'rabbit');
    displayPets(filteredPets);
});

document.getElementById('sort-price')?.addEventListener('click', () => {
    const sortedPets = [...pets].sort((a, b) => a.price - b.price);
    displayPets(sortedPets);
});

// Display all pets by default
displayPets(pets);