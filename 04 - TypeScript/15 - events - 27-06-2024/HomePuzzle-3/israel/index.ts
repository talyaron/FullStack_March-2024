interface Pet {
    name: string;
    description: string;
    img:string;
    ty: string;
    
}


const dog:Pet = {
    name: "dog",
    description: "Dogs are loyal, trainable, and social domesticated mammals that are often called man's best friend",
    img:'https://i.ibb.co/6BMY3wf/comrawpixel6173570-removebg-preview.png'
    ty:"dog"
}

const cat:Pet = {
    name: "cat",
    description: "Cats are small, furry domesticated mammals that are known for their independence, intelligence, and playful nature",
    img: 'https://i.ibb.co/ncmFWPV/cat-transparent-background-cat-png-download-303714-6231-removebg-preview.png',
    ty: "cat"
}

const parrot:Pet = {
    name: "Parrot",
    description: "Parrots are colorful, intelligent, and social birds that are known for their ability to mimic human speech",
    img: 'https://i.ibb.co/RzB04Px/parrot-bird-on-a-transparent-background-by-zoostock-dcryyq8-pre-removebg-preview.png',
    ty:"parrot"
}

const rabbit:Pet = {
    name: "rabbit",
    description: "Rabbits are small, furry mammals that are known for their long ears, hopping gait, and gentle nature",
    img: 'https://i.ibb.co/qWNzcGS/1000-F-588507285-ctono-OZnw-AAn-IARLTMUSRFCtqocr-HZgn-removebg-preview.png',
    ty: "rabbit"
}

let petArrey = [
    dog,
    cat,
    parrot,
    rabbit
]

const wrapper = document.querySelector('.wrapper') as HTMLDivElement;
let html = '';
petArrey.forEach(Pet => {

    html += `<div class= "pet" onclick> <img src= '${Pet.img}' alt='pet'> <p> ${Pet.name} <div class="tooltip"><p>${Pet.description} </div> </div>`;
    wrapper.innerHTML = html;
})

// function filtering(){
//     const pet = document.querySelector(".pet") as HTMLDivElement;
//     petArrey.forEach(Pet => {
//         if(Pet.ty !=== "dog"){
//             pet.style.display = "non";
//         }
//     })
// }
