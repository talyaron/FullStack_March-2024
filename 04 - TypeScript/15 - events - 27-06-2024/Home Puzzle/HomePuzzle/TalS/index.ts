interface nation {
  flag: string;
  player: string;
  playerImage: string;
  playerNumber: number;
  playerClub: string;
  age: number;
}

const Germany: nation = {
  flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
  player: "Toni Kroos",
  playerImage: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/103147.png",
  playerNumber: 8,
  playerClub: "Real Madrid",
  age: 34,
};
const France: nation = {
  flag: "https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg",
  player: "kylian Mbappe",
  playerImage:
    "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250076574.png",
  playerNumber: 10,
  playerClub: "paris saint germain",
  age: 25,
};
const England: nation = {
  flag: "https://cdn.britannica.com/44/344-050-94536674/Flag-England.jpg",
  player: "Jude Bellingham",
  playerImage:
    "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250128377.png",
  playerNumber: 10,
  playerClub: "Real Madrid",
  age: 21,
};
const Spain: nation = {
  flag: "https://cdn.britannica.com/36/4336-050-056AC114/Flag-Spain.jpg",
  player: "Lamine Yamal",
  playerImage:
    "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/250176450.png",
  playerNumber: 19,
  playerClub: "Barcelona",
  age: 17,
};
const Portugal: nation = {
  flag: "https://cdn.britannica.com/88/3588-050-323A5397/Flag-Portugal.jpg",
  player: "Cristiano Ronaldo",
  playerImage: "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/63706.png",
  playerNumber: 7,
  playerClub: "El Naaser",
  age: 39,
};
const Netherlands: nation = {
  flag: "https://cdn.britannica.com/82/2982-050-4A783E03/flag-prototype-Netherlands-countries-European-flags.jpg",
  player: "Virgil van Dijk",
  playerImage:
    "https://img.uefa.com/imgml/TP/players/3/2024/cutoff/50327420.png",
  playerNumber: 4,
  playerClub: "paris saint germain",
  age: 32,
};

const nations = [Germany, France, England, Spain, Portugal, Netherlands];

const nationsDiv = document.querySelector("#nations") as HTMLDivElement;

function writeNationsToDom(nations: nation[], element: HTMLDivElement) {
  try {
    if (!nations) throw new Error("no nations found");
    if (!element) throw new Error("no element found");

    let html: string = ``;
    nations.forEach((nation, index) => {
      const htmlNation = nationCard(nation, index);
      if (htmlNation) html += htmlNation;
    });
    element.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

writeNationsToDom(nations, nationsDiv);

function nationCard(nation: nation, index :number): string | undefined {
  try {
    return `<div class="nation${index === 0 ? '' : index}">
        <div class = "nation__img"> <img src="${nation.flag}" alt="Flag"></div>
        <div class = "nation__player">
        <div class="playerImg"> <img src="${nation.playerImage}" alt="Key Player"></div>
        <div class = "player-info">
        <h2>Key player</h2>
        <p> Name: ${nation.player} <br> Number: ${nation.playerNumber} <br> Club: ${nation.playerClub} <br> Age: ${nation.age} </p>
        </div>
        </div>
        </div>  `;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
