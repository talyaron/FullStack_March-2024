interface Cat {
    name: string,
    breed: string,
    age: number,
    image: string,
}

const jackie: Cat ={
    name: "Jackie",
    breed:"American Curl",
    age:8,
    image:"./images/american-curl",
}

const emma: Cat = {
    name: "Emma",
    breed:"British Shorthair",
    age:4,
    image:"./images/british-shorthair",
}

const emily: Cat = {
    name: "Emily",
    breed: "Birman",
    age:10,
    image:"./images/birman",
}

const leo: Cat = {
    name:"Leo",
    breed:"Exotic Shorthair",
    age:3,
    image:"./images/exotic-shorthair",
}

const cats: Cat[]= [jackie, emma, emily, leo];
const mapDiv = document.querySelector('#map') as HTMLDivElement;

function addCats (arr:Cat[], element: HTMLDivElement): HTMLDivElement | undefined {
    try {
        let html: string = ``;
        arr.forEach((cat) => {
            let posX = Math.random() * 100;
            let posY = Math.random() * 100;
            html += `<div class="cat" style="background-image:url(${cat.image}); top: ${posY}%; left: ${posX}%" data-title="${cat.age}, ${cat.breed}" title="${cat.name}"></div>`;
        });
        element.innerHTML = html;
        return element;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

addCats (cats, mapDiv);
