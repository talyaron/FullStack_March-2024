// //model
// class Players {
//   id: string;
//   name: string;
//   yearOfBirth: number;
//   img: string;
//   x: number;
//   y: number;

//   constructor(name: string, yearOfBirth: number, img: string) {
//     this.id = Math.random().toString(16).slice(2);
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.img = img;
//   }

//   //   moveRight() {
//   //     try {
//   //       if (this.x === undefined) {
//   //         this.x = 0;
//   //       }
//   //       if (this.y === undefined) {
//   //         this.y = 0;
//   //       }
//   //       this.x += 5;
//   //       if (this.x > 100) {
//   //         this.x = 100;
//   //       }
//   //     } catch (error) {
//   //       console.error(error);
//   //     }
//   //   }

//   //   moveUp() {
//   //     try {
//   //       if (this.y === undefined) {
//   //         this.y = 0;
//   //       }
//   //       this.y -= 5;
//   //       if (this.y < 0) {
//   //         this.y = 0;
//   //       }
//   //     } catch (error) {
//   //       console.error(error);
//   //     }
//   //   }
//   // }

//   moveRight() {
//     try {
//       if (this.x === undefined) {
//         this.x = 0;
//       }

//       if (this.y === undefined) {
//         this.y = 0;
//       }
//       this.x += 5;
//       if (this.x > 100) {
//         this.x = 100;
//       }
//     } catch (error) {}
//   }

//   moveLeft() {
//     try {
//       if (this.x === undefined) {
//         this.x = 0;
//       }

//       if (this.y === undefined) {
//         this.y = 0;
//       }
//       this.x -= 5;

//       if (this.x < 0) {
//         this.x = 0;
//       }
//     } catch (error) {}
//   }

//   moveUp() {
//     try {
//       if (this.x === undefined) {
//         this.x = 0;
//       }

//       if (this.y === undefined) {
//         this.y = 0;
//       }
//       this.y -= 5;

//       if (this.y < 0) {
//         this.y = 0;
//       }
//     } catch (error) {}
//   }

//   moveDown() {
//     try {
//       if (this.x === undefined) {
//         this.x = 0;
//       }

//       if (this.y === undefined) {
//         this.y = 0;
//       }
//       this.y += 5;
//       if (this.y > 100) {
//         this.y = 100;
//       }
//     } catch (error) {}
//   }
// }

// const TonikRoss = new Players("Tonik Ross", "./image/Toni-Kroos.png");

// console.log(TonikRoss);
// TonikRoss.setPosition(10, 20);
// console.log(TonikRoss);
// TonikRoss.moveRight();
// console.log(TonikRoss);

// const ronaldo = new players("Ronaldo", "./image/Ronaldo.jpg");
// console.log(ronaldo);
// ronaldo.moveRight();
// console.log(ronaldo);
// ronaldo.setPosition(20, 40);

// console.log(ronaldo);

// const player: Player[] = [TonikRoss, ronaldo];

// //view
// const Root = document.querySelector(".root") as HTMLElement;

// function renderPlayer(player: Player, element: HTMLElement) {
//   const html = `<div class="player" style="background-image:url(${player.img}); top:${player.y}%; left:${player.x}%">
//     <button class="player__button player__button--up"  onclick="handleUp('${player.id}')">Up</button>
//     </div>`;
//   return html;
// }

// function renderplayers(players: Player[], root: HTMLElement | null) {
//   try {
//     if (!root) {
//       throw new Error("Root element not found");
//     }

//     let html = "";
//     players.forEach((player) => {
//       html += renderPlayer(player, root);
//     });
//     root.innerHTML = html;
//   } catch (error) {
//     console.error(error);
//   }
// }

// renderPlayers(players, root);

// function handleMove(id: string) {
//   const player = players.find((player) => player.id === id);
//   if (!player) {
//     throw new Error("Player not found");
//   }
//   selectedPlayer = player; // Select the player
//   renderPlayers(players);
// }

// function handleDown(id: string) {
//   try {
//     const player = players.find((player) => player.id === id);
//     if (!player) {
//       throw new Error("Player not found");
//     }
//     player.moveDown();
//     renderPlayers(players, root);
//   } catch (error) {
//     console.error(error);
//   }
// }

// function handleRight(id: string) {
//   try {
//     const player = players.find((player) => player.id === id);
//     if (!player) {
//       throw new Error("Player not found");
//     }
//     player.moveRight();
//     renderPlayers(players, root);
//   } catch (error) {
//     console.error(error);
//   }
// }

class player {
  id: string;
  name: string;
  img: string;
  x: number;
  y: number;

  constructor(name: string, img: string, x: number, y: number) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.img = img;
    this.x = x;
    this.y = y;
  }

  moveRight() {
    this.x += 5;
  }

  moveLeft() {
    this.x -= 5;
  }

  moveUp() {
    this.y -= 5;
  }

  moveDown() {
    this.y += 5;
  }
}

const ronaldo = new Player(
  "ronaldo",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYvS5pCTTXbNpXja5dkBZOiYJpYZpmxyEjQ&s",
  500,
  700
);
const toni = new Player(
  "Toni-Kroos",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYvS5pCTTXbNpXja5dkBZOiYJpYZpmxyEjQ&s",
  200,
  25
);

const players = [toni, ronaldo];

const root = document.querySelector(".players") as HTMLDivElement;
let selectedPlayer: Player | null = null; // Track the selected player

function renderPlayer(player: Player) {
  const playerElement = document.createElement("div");
  playerElement.classList.add("player");
  playerElement.style.backgroundImage = `url('${player.img}')`;
  playerElement.style.top = `${player.y}px`;
  playerElement.style.left = `${player.x}px`;

  playerElement.addEventListener("click", () => {
    // Select the player upon click
    selectedPlayer = player;
    renderPlayers(players); // Re-render to update selection styling
  });

  root.appendChild(playerElement);
}

function renderPlayers(players: Player[]) {
  root.innerHTML = ""; // Clear previous content
  players.forEach((player) => {
    renderPlayer(player);
    if (selectedPlayer && player.id === selectedPlayer.id) {
      playerElement.classList.add("selected");
    }
  });
}

renderPlayers(players);

function handleMove(id: string) {
  const player = players.find((player) => player.id === id);
  if (!player) {
    throw new Error("Player not found");
  }
  selectedPlayer = player; // Select the player
  renderPlayers(players);
}

function handleRight(id: string) {
  if (!selectedPlayer) return;
  selectedPlayer.moveRight();
  renderPlayers(players);
}

function handleLeft(id: string) {
  if (!selectedPlayer) return;
  selectedPlayer.moveLeft();
  renderPlayers(players);
}

function handleUp(id: string) {
  if (!selectedPlayer) return;
  selectedPlayer.moveUp();
  renderPlayers(players);
}

function handleDown(id: string) {
  if (!selectedPlayer) return;
  selectedPlayer.moveDown();
  renderPlayers(players);
}

// Event listener for keyboard arrow keys
// document.addEventListener("keydown", (event) => {
//   if (!selectedPlayer) return;

//   const key = event.key;
//   switch (key) {
//     case "ArrowRight":
//       handleRight(selectedPlayer.id);
//       break;
//     case "ArrowLeft":
//       handleLeft(selectedPlayer.id);
//       break;
//     case "ArrowUp":
//       handleUp(selectedPlayer.id);
//       break;
//     case "ArrowDown":
//       handleDown(selectedPlayer.id);
//       break;
//     default:
//       break;
//   }
// });
