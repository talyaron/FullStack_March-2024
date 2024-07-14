interface pokemon{
    pokedex:number;
    name:string;
    image:string;
    types:string[];
    evolve?:string;
}

const bulbasaur:pokemon = {
    pokedex: 1,
    name: "bulbasaur",
    image:"https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0001_000_mf_n_00000000_f_n.png",
    types: ["grass","poison"],
    evolve:"ivysaur"
}

const ivysaur:pokemon = {
    pokedex: 2,
    name:"ivysaur",
    image:"https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0002_000_mf_n_00000000_f_n.png",
    types: ["grass","poison"]
}

const kangaskhan:pokemon= {
    pokedex:115,
    name:"kangaskhan",
    image:"https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0115_000_fo_n_00000000_f_n.png",
    types:["normal"]
}

const pokemons = [
    bulbasaur,
    ivysaur,
    kangaskhan
]

const pokemonsDiv = document.querySelector('#pokemons') as HTMLDivElement;

function pokemonCard(pokemon:pokemon):string | undefined{
    try {
        let element:string="";
        if(!pokemon.evolve){
        element=`<div class="pokemon">
            <div class="pokemon__img" style="background-image:url(${pokemon.image})"></div>
            <div class="pokemon__info">
                <h1>${pokemon.name}(${pokemon.pokedex})</h1>
                <h2>${pokemon.types}</h2>
            </div>
        </div>`;
        }else{
            element=`<div class="pokemon">
            <div class="pokemon__img" style="background-image:url(${pokemon.image})"></div>
            <div class="pokemon__info">
                <h1>${pokemon.name}(${pokemon.pokedex})</h1>
                <h2>${pokemon.types}</h2>
                <p>evolves to ${pokemon.evolve}</p>
            </div>
        </div>`;
        }
        return element;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

function writePokemonToDOM(pokemons:pokemon[],element:HTMLDivElement){
    try {
        if (!element) throw new Error("Element not found");
        if (!pokemons) throw new Error("No pokemons found");

        let html:string = ``;
        pokemons.forEach(pokemon =>{
            const htmlPokemon = pokemonCard(pokemon);
            if(htmlPokemon) html+=htmlPokemon;
        });
        element.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

writePokemonToDOM(pokemons,pokemonsDiv);