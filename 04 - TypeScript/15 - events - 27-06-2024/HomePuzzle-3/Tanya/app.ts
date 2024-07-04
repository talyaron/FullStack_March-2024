interface Pet {
    type: string;
    name: string;
    imageUrl: string;
    description: string;
    price: number;
}
const pets: Pet[] = [
    { type: "dog", name: "Kali", imageUrl: "https://images.unsplash.com/photo-1527179122541-293c3b972d24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZsdWZmeXxlbnwwfHwwfHx8MA%3D%3D", description: "great with kids", price: 350 },
    { type: "dog", name: "Luna", imageUrl: "https://images.unsplash.com/photo-1527484465636-e7e88d8f15ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Loves food and long naps", price: 285 },
    { type: "dog", name: "Marshall", imageUrl: "https://images.unsplash.com/photo-1535249391284-461dc3135495?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Barks a lot", price: 315 },
    { type: "cat", name: "Shimi", imageUrl: "https://images.unsplash.com/photo-1548247417-89a73bd197fa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Buttery", price: 280 },
    { type: "cat", name: "Captain Scratch-A-Lot", imageUrl: "https://images.unsplash.com/photo-1599280964696-b31be73093a7?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Doesn't get along with dogs. Or other cats. Or kids.", price: 180 },
    { type: "parrot", name: "Turkey", imageUrl: "https://images.unsplash.com/photo-1519003458034-e188874bb745?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Devil's apprentice", price: 520 },
    { type: "parrot", name: "Mc'nuggets", imageUrl: "https://images.unsplash.com/photo-1521698443005-6ba7c9fff4dd?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Vocal. Curses a lot", price: 300 },
    { type: "bunny", name: "Fluffy", imageUrl: "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Will pee on your bed", price: 250 },
    { type: "bunny", name: "Albert", imageUrl: "https://images.unsplash.com/photo-1511542229800-663a99ca1817?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Will eat your chairs. And cat.", price: 200 },
    { type: "rat", name: "Pinky", imageUrl: "https://images.unsplash.com/photo-1677058340752-3782b6e18d5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Bumps into walls", price: 100 },
    { type: "rat", name: "Brain", imageUrl: "https://images.unsplash.com/photo-1558407634-6c7a00ba4b07?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Will try to take over the world", price: 120 },
];

const container = document.querySelector('.container') as HTMLElement;
function createCard(pet: Pet): HTMLElement {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<img src="${pet.imageUrl}">
        <div class="name">${pet.name}</div>
        <div class="description">${pet.description}</div>
        <div class="price">$${pet.price}</div>`;
    return card;
}
function displayCards(pets: Pet[]): void {
    container.innerHTML = '';
    pets.forEach(pet => {
        container.appendChild(createCard(pet));
    });
}
document.querySelector('#all')?.addEventListener('click', () => displayCards(pets));
document.querySelector('#dogs')?.addEventListener('click', () => displayCards(pets.filter(pet => pet.type === 'dog')));
document.querySelector('#cats')?.addEventListener('click', () => displayCards(pets.filter(pet => pet.type === 'cat')));
document.querySelector('#parrots')?.addEventListener('click', () => displayCards(pets.filter(pet => pet.type === 'parrot')));
document.querySelector('#bunnies')?.addEventListener('click', () => displayCards(pets.filter(pet => pet.type === 'bunny')));
document.querySelector('#rats')?.addEventListener('click', () => displayCards(pets.filter(pet => pet.type === 'rat')));

document.querySelector('#sort')?.addEventListener('click', () => {
    const sortedPets = [...pets].sort((a, b) => a.price - b.price);
    displayCards(sortedPets);
});
displayCards(pets);

window.onload = function () {
    var backgroundImg=["https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      "https://images.unsplash.com/photo-1533751733515-b07fd430c993?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      "https://images.unsplash.com/photo-1470076491063-fd42fb1ad4b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      "https://images.unsplash.com/photo-1562475598-bb71e4edbc33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      ]

      setInterval(changeImage, 5000);
     function changeImage() {   
      var i = Math.floor((Math.random() * 4));

      document.body.style.backgroundImage = "url('"+backgroundImg[i]+"')";

    }
  }