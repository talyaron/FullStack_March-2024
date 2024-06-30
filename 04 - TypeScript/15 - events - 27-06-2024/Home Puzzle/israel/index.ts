interface Zombie {
    img: string;
    x: string;
    y:string;
}


const zombie1: Zombie = {
    img: 'https://i.ibb.co/Kb9svwg/zombie1-1.png',
    x: '60',
    y: '35'
}

const zombie2: Zombie = {
    img: 'https://i.ibb.co/Kb9svwg/zombie1-1.png',
    x: '110',
    y: '45'
}

const zombie3: Zombie = {
    img: 'https://i.ibb.co/Kb9svwg/zombie1-1.png',
    x: '60',
    y: '9'
}

const allzombies = [
    zombie1,
    zombie2,
    zombie3
]

console.log(allzombies);


document.addEventListener('DOMContentLoaded', () => {
    let zombiesContainer = document.querySelector('.zombies') as HTMLDivElement;
    console.log(zombiesContainer);


    if (!zombiesContainer) {
        console.log(zombiesContainer);

        console.error('Could not find zombie container');
        return;
    }


    let html = '';
    allzombies.forEach(Zombie => {
        
        html += `<img src="${Zombie.img}" alt="zombie" style="position: absolute; left: ${Zombie.x}rem; top: ${Zombie.y}rem;">`;
        console.log(html);
        zombiesContainer.innerHTML = html;
        

    });

});


function handleClick(event){
    event.target.style.display = "none";
    setInterval(() => {
        event.target.style.display = "block";

    },1000);
}
