interface Continent {
  name: string;
  description: string;
  image: string;
  left: number;
  right: number;
  top:number;
  bottom:number;
}

const asia: Continent = {
  name: "Asia",
  description:
    "Asia is the largest continent[note 1][10][11] in the world by both land area and population.[11] It covers an area of more than 44 million square kilometers,[note 2] about 30% of Earth's total land area and 8% of Earth's total surface area. The continent, which has long been home to the majority of the human population,[12] was the site of many of the first civilizations. Its 4.7 billion people[13] constitute roughly 60% of the world's population",
  image: "./images/asia.jpg",
  top:260,
  bottom:0,
  left: 1200,
  right: 0,

};
const europe: Continent = {
  name: "Europe",
  description: "abc",
  image: "./images/europe.png",
  top:250,
  bottom:0,
  left: 800,
  right: 0,
};
const africa: Continent = {
  name: "Africa",
  description: "abc",
  image: "./images/africa.jpg",
  top:440,
  bottom:0,
  left: 780,
  right: 0,
};

const australia: Continent = {
  name: "Australia",
  description: "abc",
  image: "./images/Australia.png",
  top:600,
  bottom:0,
  left: 1200,
  right: 0,
};

const northAmerica: Continent = {
  name: "North America",
  description: "abc",
  image: "./images/North_America.png",
  top:300,
  bottom:0,
  left: 140,
  right: 0,
};

const southAmerica: Continent = {
  name: "South America",
  description: "abc",
  image: "./images/south-america.jpg",
  top:530,
  bottom:0,
  left: 270,
  right: 0,
};

const continents = [asia,europe,africa,australia,northAmerica,southAmerica];
const continentsDiv = document.querySelector("#continents") as HTMLDivElement;

function setContinents(
  continents: Continent[],
  continentsDiv: HTMLDivElement
): string | undefined {
  try {
    let continentPosition: string = "";
    continents.forEach((continent) => {
        continentPosition = continentPosition + `<div class="continent" style="top:${continent.top}px;bottom:${continent.bottom}px;left:${continent.left}px;right:${continent.right}px;"><img src="${continent.image}" alt="${continent.name}"></div>`
    });

    return continentsDiv.innerHTML = continentPosition;
  } catch (error) {
    return undefined;
  }
}

console.log(setContinents(continents, continentsDiv));
