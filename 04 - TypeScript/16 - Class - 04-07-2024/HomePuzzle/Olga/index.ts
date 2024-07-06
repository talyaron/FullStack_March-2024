class Player {
  id: number;
  role: string | undefined;
  action: string;
  name: string;
  x: number | undefined;
  y: number | undefined;
  img: string;
  team: string | undefined;
  constructor(
    name: string,
    img: string,
    x?: number,
    y?: number,
    role?: string,
    team?: string
  ) {
    this.id = Math.random();
    this.name = name;
    this.img = img;
    this.action = "draggable";
    this.x = x;
    this.y = y;
    this.role = role;
    this.team = team;
  }

  moveUp() {
    this.y -= 1;
  }

  moveDown() {
    this.y += 1;
  }

  moveLeft() {
    this.x -= 1;
  }

  moveRight() {
    this.x += 1;
  }

  checkPosition() {
    if (this.x < 5) {
      this.x = 5;
    }
    if (this.x > 95) {
      this.x = 95;
    }
    if (this.y < 5) {
      this.y = 5;
    }
    if (this.y > 95) {
      this.y = 95;
    }
  }
}

const team = {
  redGoalkeeper: [5, 50],
  blueGoalkeeper: [95, 50],
  redLeftDefender: [10, 40],
  blueRightDefender: [90, 40],
  redLeftMidfielder: [10, 30],
  blueRightMidfielder: [90, 30],
  redLeftForward: [10, 20],
  blueRightForward: [90, 20],
  blueCenter: [55, 45],
  blueLeftDefender: [90, 60],
  redRightDefender: [10, 60],
  blueLeftMidfielder: [90, 70],
  redRightMidfielder: [10, 70],
  blueLeftForward: [90, 80],
  redRightForward: [10, 80],
  redCenter: [45, 55],
};

const rolesList = Object.keys(team);
console.log(rolesList);

const players: Player[] = [
  new Player("Olga", "images/olga.jpeg"),
  new Player("Yos", "images/yos.jpeg"),
  new Player("Efrat", "images/efrat.jpeg"),
  new Player("Tanya", "images/yossi.jpeg"),
  new Player("TalS", "images/avi.jpeg"),
  new Player("Israel", "images/moshe.jpeg"),
  new Player("Maya", "images/haim.jpeg"),
  new Player("Orly", "images/tom.jpeg"),
  new Player("Roni", "images/haim.jpeg"),
  new Player("Reut", "images/tom.jpeg"),
  new Player("Lior", "images/haim.jpeg"),
  new Player("Shemesh", "images/tom.jpeg"),
  new Player("Eden", "images/haim.jpeg"),
  new Player("Yuval", "images/tom.jpeg"),
  new Player("Naama", "images/moshe.jpeg"),
  new Player("Misha", "images/avi.jpeg"),
];

const game = document.querySelector("#game") as HTMLElement;

function getRandomArbitrary(num: number) {
  return Math.round(Math.random() * (0 - num) + num);
}

// for (let i = 0; i < 16; i++) {
//   const x = getRandomArbitrary(array.length);
//   console.log(x);
//   array.splice(x, 1);
//   console.log(array);
// }

function getPositionAndRole(players: Player[]) {
  players.forEach((player) => {
    const role = rolesList[Math.floor(Math.random() * rolesList.length)];
    player.role = role;
    console.log(player.name, " ", player.role);
    rolesList.splice(rolesList.indexOf(role), 1);
    player.x = team[role][0];
    player.y = team[role][1];

    if (role.includes("blue")) {
      player.team = "blue";
    } else {
      player.team = "red";
    }
    delete team[role];
  });

  players.push(new Player("Dor", "images/goalkeeper.jpeg", 40, 102, "Reserve", 'red'));
  players.push(
    new Player("TalY", "images/goalkeeper.jpeg", 50, 102, "Trainer", 'teal')
  );
}

getPositionAndRole(players);
console.log(players);

function renderPlayer(player: Player) {
  try {
    return `<div class="${player.action}" id="${player.id}" title="${player.name}" data-title="${player.role}" style="left:${player.x}%;top:${player.y}%;background-color:${player.team};" onclick='handleClick(${player.id})'></div>`;
  } catch (error) {
    console.error(error);
  }
}

function renderPlayers(players: Player[], element: HTMLElement) {
  try {
    let html = "";
    players.forEach((player) => {
      html += renderPlayer(player);
    });
    element.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

renderPlayers(players, game);

function handleClick(id): void {
  players.forEach((player) => {
    if (player.id === id) {
      player.action = "selected";
    } else {
      player.action = "draggable";
    }
  });
  renderPlayers(players, game);
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  const player = players.find(
    (player) => player.action === "selected"
  ) as Player;
  if (event.key.includes("Arrow")) {
    event.preventDefault();
    switch (key) {
      case "ArrowUp":
        player.moveUp();
        break;
      case "ArrowDown":
        player.moveDown();
        break;
      case "ArrowLeft":
        player.moveLeft();
        break;
      case "ArrowRight":
        player.moveRight();
        break;
    }
    player.checkPosition();
    renderPlayers(players, game);
  }
});
