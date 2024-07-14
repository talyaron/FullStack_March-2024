type Pet = {
    name: string;
    type: string;
    imageUrl: string;
    description: string;
    price: number;
  };

  const pets: Pet[] = [
    { name: 'Buddy', type: 'dog', imageUrl: 'https://cdn.britannica.com/92/212692-050-D53981F5/labradoodle-dog-stick-running-grass.jpg', description: 'Friendly dog', price: 100 },
    { name: 'Max', type: 'dog', imageUrl: 'https://i.guim.co.uk/img/media/21d2cabce7b5bef6b78aefd75e24601f00ecbfde/0_255_1536_922/master/1536.jpg?width=1900&dpr=2&s=none', description: 'Loyal dog', price: 200 },
    { name: 'Whiskers', type: 'cat', imageUrl: 'https://media.4-paws.org/7/b/8/4/7b84da50b67c8c39b9deb0d6581efa3309960ed6/VIER%20PFOTEN_2019-12-13_209-2001x2000-600x600.jpg', description: 'Curious cat', price: 150 },
    { name: 'Snowball', type: 'cat', imageUrl: 'https://media.wired.com/photos/6616c08b630a7060d3bd0dfa/master/pass/Best-Cat-Toys-Gear-GettyImages-1456903581.jpg', description: 'Playful cat', price: 120 },
    { name: 'Polly', type: 'parrot', imageUrl: 'https://media.graphassets.com/resize=height:360,width:1280/output=format:webp/rhKmQuYpTvmOrHpdMY4V?width=1280', description: 'Talkative parrot', price: 300 },
    { name: 'Kiwi', type: 'parrot', imageUrl: 'https://d2zp5xs5cp8zlg.cloudfront.net/image-62867-800.jpg', description: 'Colorful parrot', price: 250 }
  ];

  const petContainer = document.getElementById('pet-container') as HTMLDivElement;

  function createPetCard(pet: Pet) {
    const html: string = `<div class="card">
      <img src="${pet.imageUrl}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>${pet.description}</p>
      <p>Price: $${pet.price}</p>
      </div>
    `;
    return html;
  }

  function displayPets(pets: Pet[]) {
    let html = ``;
    pets.map(pet => html += createPetCard(pet));
    petContainer.innerHTML = html;
  }

  document.querySelectorAll('.buttons button[data-filter]').forEach(button => {
    button.addEventListener('click', (e) => {
      const filter = (e.target as HTMLButtonElement).dataset.filter;
      if (filter === 'all') {
        displayPets(pets);
      } else {
        const filteredPets = pets.filter(pet => pet.type === filter);
        displayPets(filteredPets);
      }
    });
  });

  document.getElementById('sort-price')!.addEventListener('click', () => {
    const sortedPets = [...pets].sort((a, b) => a.price - b.price);
    displayPets(sortedPets);
  });

  // Initial display of all pets
  displayPets(pets);
