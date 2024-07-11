interface player {
  name: string;
  playerNumber: number;
  team: string;
  playerImg: string;
}

const cristianoRonaldo: player = {
  name: "Cristiano Ronaldo",
  playerNumber: 7,
  team: "Portugal",
  playerImg:
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTDS-NN32oWj6jIoj_Yo-XDbjXAgkh7fLKNsrdYhuxxQgdCkpxn",
};
const Mbappe: player = {
  name: "Kylian Mbappe ",
  playerNumber: 10,
  team: "France",
  playerImg:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTnH4FSHHFlSdksSURq-QCvwiwgwfuihe6WQ&s",
};
const Buzaglo: player = {
  name: "Maor Buzaglo ",
  playerNumber: 11,
  team: "Israel",
  playerImg:
    "https://upload.wikimedia.org/wikipedia/commons/a/a4/Maor_Buzaglo_March_28-30%2C_2022_48_%28cropped%29.jpg",
};
const Kroos: player = {
  name: "Toni Kroos ",
  playerNumber: 8,
  team: "Germany",
  playerImg:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILLqF72LS23IHQZJdIJU8hGQgYNNCJ9RyqQ&s",
};

const players = [cristianoRonaldo, Mbappe, Buzaglo, Kroos];

const playersDiv = document.querySelector("#players") as HTMLDivElement;

function writePlayersToDOM(players: player[], element: HTMLDivElement) {
  try {
    if (!element) throw new Error("Element not found");
    if (!players) throw new Error("No players found");

    let html: string = ``;
    players.forEach((player) => {
      const htmlPlayer = playerCard(player);
      if (htmlPlayer) html += htmlPlayer;
    });

    element.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

writePlayersToDOM(players, playersDiv);

function playerCard(player:player): string|undefined{
    try {
        return `<div class="player">
        <div class="player__img" style = "background-image:url(${player.playerImg})">
        </div>
        <div class="player__info">
        <h2>${player.name}</h2>
        <p> player number: ${player.playerNumber} <br> nationality: ${player.team} </p>
        </div>
        </div>`;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}