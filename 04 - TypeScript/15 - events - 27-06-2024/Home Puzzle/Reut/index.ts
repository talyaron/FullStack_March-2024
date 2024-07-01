interface Cat {
    name: string,
    breed: string,
    age: number,
    image: string,
}

const jackie: Cat = {
    name: "Jackie",
    breed: "American Curl",
    age: 8,
    image: "./images/american-curl",
}

const emma: Cat = {
    name: "Emma",
    breed: "British Shorthair",
    age: 4,
    image: "./images/british-shorthair",
}

const emily: Cat = {
    name: "Emily",
    breed: "Birman",
    age: 10,
    image: "./images/birman",
}

const leo: Cat = {
    name: "Leo",
    breed: "Exotic Shorthair",
    age: 3,
    image: "./images/exotic-shorthair",
}

const cats: Cat[] = [jackie, emma, emily, leo];
const catsDiv = document.querySelector("#cats") as HTMLDivElement;

function handleClick(event: Event) {
    console.log(event);
    console.dir(event.target);
    (event.target as HTMLElement).innerText = "confetti";
}

function handleBodyClick(event) {
    try {
        console.log("Body clicked", event.x, event.y);
        const boom = document.querySelector("#confetti") as HTMLImageElement;
        if (!boom) throw new Error("Nothing found");
        boom.style.left = `${event.x}px`;
        boom.style.top = `${event.y}px`;
        boom.style.display = "block";
        setTimeout(() => {
            boom.style.display = "none";
        }, 800);
    } catch (error) {
        console.error(error);
    }
}

function handleDisappear(event: Event) {
    (event.target as HTMLElement).style.display = "none";
}

function getRandomPosition(element: HTMLElement) {
    const map = document.getElementById('map') as HTMLDivElement;
    if (!map) throw new Error("Map not found");
    const x = Math.random() * (map.clientWidth - element.clientWidth);
    const y = Math.random() * (map.clientHeight - element.clientHeight);
    return { x, y };
}

function writeCatsToDOM(cats: Cat[], element: HTMLDivElement) {
    try {
        if (!element) throw new Error("Element not found");
        if (!cats || cats.length === 0) throw new Error("No cats were found");

        let html = '';
        cats.forEach(cat => {
            const { x, y } = getRandomPosition(element);
            html += `
                <div class="cat" style="position: absolute; left: ${x}px; top: ${y}px;">
                    <img src="${cat.image}" alt="${cat.name}">
                    <div>${cat.name}</div>
                    <div>${cat.breed}</div>
                    <div>${cat.age} years old</div>
                </div>`
        });
        element.innerHTML = html;
        document.querySelectorAll('.cat').forEach(catElement => {
            catElement.addEventListener('click', handleClick);
            catElement.addEventListener('click', handleDisappear);
        });
    } catch (error) {
        console.error(error);
    }
}
writeCatsToDOM(cats, catsDiv);