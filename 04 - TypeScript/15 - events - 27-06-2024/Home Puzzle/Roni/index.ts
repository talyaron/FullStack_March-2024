interface Dinosaur {
    name: string;
    photo: string;

}

const TRex: Dinosaur = {
    name: 'TRex',
    photo:"./images/T-rex.png",
};
const Velociraptor: Dinosaur = {
    name: 'Velociraptor',
    photo:"./images/Velociraptor.png",
};
const Triceratops: Dinosaur = {
    name: 'Triceratops',
    photo:"./images/Triceratops.png",
};
const Spinosaurus: Dinosaur = {
    name: 'Spinosaurus',
    photo:"./images/Spinosaurus.png",
};
const Pteranodon: Dinosaur = {
    name: 'Pteranodon',
    photo:"./images/pteranodon.png",
};

const dinosaurs:Dinosaur[]= [TRex,Velociraptor,Triceratops,Spinosaurus,Pteranodon];
const mapDiv = document.querySelector("#map") as HTMLDivElement;

//randomly placing dinos on map 

function addDinosaur (arr:Dinosaur[], element: HTMLDivElement): HTMLDivElement | undefined {
    try {
        let html: string = ``;
        arr.forEach((dinosaur) => {
            let posX = Math.random() * 90;
            let posY = Math.random() * 90;
            html += `<div class="dinosaur" style="background-image:url(${dinosaur.photo}); top: ${posY}%; left: ${posX}%; title="${dinosaur.name}"></div>`;
        });
        element.innerHTML = html;
        return element;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

addDinosaur(dinosaurs, mapDiv);

//making them dissappear

//function dinosaurDisappear(event) {
  //  try {
    //  const dinosaurs = document.querySelectorAll('.dinosaur');
      //if (!dinosaurs || dinosaurs.length === 0) {
        //throw new Error("No dinosaurs found on the map.");}
  
      //dinosaurs.forEach(dinosaur => {
       // dinosaur.style.display = "none";});
  
    //} catch (error) {
    //  console.error(error.message);
    //}
 // }