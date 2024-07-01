// model - schema
interface Creatures {
name:string;
img:string;
race: string;
}

//model - data
const frodo:Creatures = {
    name:"frodo",
    img:"https://upload.wikimedia.org/wikipedia/he/thumb/0/03/Vlcsnap-8625278.png/377px-Vlcsnap-8625278.png",
    race: "hobbit"
}

const  gandalf:Creatures = {
    name:"gandalf",
    img:"https://upload.wikimedia.org/wikipedia/he/thumb/e/e7/%D7%92%D7%A0%D7%93%D7%90%D7%9C%D7%A3.JPG/375px-%D7%92%D7%A0%D7%93%D7%90%D7%9C%D7%A3.JPG",
    race: "istari"
}

const aragorn:Creatures = {
    name:"aragorn",
    img:"https://upload.wikimedia.org/wikipedia/he/8/83/Aragorn.jpg",
    race: "men"
}

//model - data
const creatures  = [
    frodo,
    gandalf,
    aragorn
];

console.log(creatures);

//view
const background = document.querySelector('.background') as HTMLDivElement;

//controller
creatures.forEach(Creatures => {
    let html = '';
    html += `<img class="creatur" src="${Creatures.img}" alt="">
    `

    background.innerHTML += html;
})



