interface pokimons {
  name: string;
  age: number;
  image: string;
  color: string;
}

const bulbasaur: pokimons = {
  name: "bulbasaur",
  age: 5,
  color: "green",
  image:
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
};

const blastoise: pokimons = {
  name: "blastoise",
  age: 4,
  color: "blue",
  image:
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/009.png",
};

const picachu: pokimons = {
  name: "picachu",
  age: 8,
  color: "yellow",
  image:
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png",
};

const clefairy: pokimons = {
  name: "clefairy",
  age: 10,
  color: "pink",
  image:
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/035.png",
};

const pokimons: pokimons[] = [clefairy, picachu, blastoise, bulbasaur];
const mapDiv = document.querySelector("#map") as HTMLDivElement;
