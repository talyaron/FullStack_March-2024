interface Zombie {
    img: string;
    x: number;
    y: number;
}


const zombie1: Zombie = {
    img: 'https://i.ibb.co/Kb9svwg/zombie1-1.png',
    x: 60,
    y: 35
}

const zombie2: Zombie = {
    img: 'https://i.ibb.co/Kb9svwg/zombie1-1.png',
    x: 110,
    y: 45
}

const zombie3: Zombie = {
    img: 'https://i.ibb.co/Kb9svwg/zombie1-1.png',
    x: 60,
    y: 9
}

const allzombies = [
    zombie1,
    zombie2,
    zombie3
]

console.log(allzombies);


document.addEventListener('DOMContentLoaded', () => {

    //תפיסת ה - zombie
    let zombiesContainer = document.querySelector('.zombies') as HTMLDivElement;
    console.log(zombiesContainer);

    //בדיקה שהוא באמת קיים
    if (!zombiesContainer) {
        console.log(zombiesContainer);

        console.error('Could not find zombie container');
        return;
    }

    // הכנסת תמונה ומיקום

    function updateZombiesTopLeft() {

        let html = '';
        allzombies.forEach(Zombie => {

            

            Zombie.x += (Math.random() - 1) * 1;
            Zombie.y += (Math.random() - 1) * 1;

            Zombie.x = Math.max(0, Math.min(window.innerWidth / 16 - 6, Zombie.x));
            Zombie.y = Math.max(0, Math.min(window.innerHeight / 16 - 6, Zombie.y));



            html += `<img src="${Zombie.img}" alt="zombie" style="position: absolute; left: ${Zombie.x}rem; top: ${Zombie.y}rem;">`;

            
        });

            zombiesContainer.innerHTML = html;

            requestAnimationFrame(updateZombiesTopLeft);


    }

    function updateZombiesBottomLeft() {

        let html = '';
        allzombies.forEach(Zombie => {

            

            Zombie.x += (Math.random() - 1) * 1;
            Zombie.y += (Math.random() + 1) * 1;

            Zombie.x = Math.max(0, Math.min(window.innerWidth / 16 - 6, Zombie.x));
            Zombie.y = Math.max(0, Math.min(window.innerHeight / 16 - 6, Zombie.y));



            html += `<img src="${Zombie.img}" alt="zombie" style="position: absolute; left: ${Zombie.x}rem; top: ${Zombie.y}rem;">`;

            
        });

            zombiesContainer.innerHTML = html;

            requestAnimationFrame(updateZombiesBottomLeft);


    }
if(Zombie.y>0){

    updateZombiesTopLeft();
} else if(Zombie.y< window.innerHeight / 16 - 6 && ){
    updateZombiesBottomLeft
}

});

function handleClick(event) {
    const boom = document.querySelector('.boom') as HTMLImageElement;
    event.target.style.display = "none";
    const aditx = event.x - 100;
    const adity = event.y - 100;


    boom.style.left = `${aditx}px`;
    boom.style.top = `${adity}px`;
    console.log("ccc", event.x);

    boom.style.display = "block";

    setTimeout(() => {
        boom.style.display = "none";
    }, 2000)


}



