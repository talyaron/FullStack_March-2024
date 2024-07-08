class Player {
  id: string;
  name: string;
  DOB: number;
  image: string;
  x: number;
  y: number;
  scale: number;

  constructor(name: string, DOB: number) {
    this.id = Math.random().toString();
    this.name = name;
    this.DOB = DOB;
    this.image = "./images/player.png";
    this.x = Math.floor(Math.random() * 500) + 1;
    this.y = Math.floor(Math.random() * 1200) + 1;
    this.scale = 1;
  }
  playerMove(direction: string) {
    switch (direction) {
      case "u":
        this.x -= 5;
        break;
      case "d":
        this.x += 5;
        break;
      case "l":
        this.y -= 5;
        this.scale = -1;
        break;
      case "r":
        this.y += 5;
        this.scale = 1;
        break;
      default:
        break;
    }
  }
}

const player1 = new Player("Mike", 2000);
const player2 = new Player("John", 1997);
const player3 = new Player("Tom", 1996);
const player4 = new Player("Aaron", 1995);
const player5 = new Player("Tod", 1994);
const player6 = new Player("Kyel", 1993);

const players = [player1, player2, player3, player4, player5, player6];

const playerElement = document.querySelector(".court") as HTMLDivElement;

function getPlayers() {
  try {
    if (!players) throw new Error("players not found");
    const playersHtml = players.map((p) => renderPlayers(p)).join("");
    return (playerElement.innerHTML = playersHtml);
  } catch (error) {
    console.log(error);
  }
}

function renderPlayers(player: Player): string {
  try {
    const playerHtml: string = `<div id="${player.id}" class="player" style="top:${player.x}px;left:${player.y}px;"><img src="${player.image}" style="transform: scaleX(${player.scale});" alt="player"><div class="player-name">${player.name}</div>
        <button type="button" onclick=handelMoveClick('${player.id}','u') class="btn btn--up">&uarr;</button> 
        <button type="button" onclick=handelMoveClick('${player.id}','l') class="btn btn--left">&larr;</button> 
        <button type="button" onclick=handelMoveClick('${player.id}','r') class="btn btn--right">&rarr;</button> 
        <button type="button" onclick=handelMoveClick('${player.id}','d') class="btn btn--down">&darr;</button> 
        </div>`;
    return playerHtml;
  } catch (error) {}
}

function handelMoveClick(id: string, direction: "u" | "d" | "l" | "r") {
  try {
    if (!id) throw new Error("player not found");

    const playerSelected = players.find((p) => p.id === id);

    playerSelected?.playerMove(direction);
    getPlayers();

    //check if element is touching another element
    const movedElem = document.getElementById(id) as HTMLDivElement;
    checkColid(movedElem);
  } catch (error) {
    console.error(error);
  }
}

function checkColid(movedElem: HTMLDivElement) {
  try {
    // debugger;
    let ouch: boolean = false;
    const playersCntr: number = players.length;
    let i: number = 0;
    let playerElementCheck: HTMLDivElement;
    const movedElemDimension = movedElem.getBoundingClientRect();


    while (!ouch || playersCntr < i) {
      if (players[i].id != movedElem.id) {
        playerElementCheck = document.getElementById(players[i].id);
        let playerDimension = playerElementCheck.getBoundingClientRect();

        // Check if the two elements are touching horizontally
        const horizontalTouch =
        movedElemDimension.right >= playerDimension.left && movedElemDimension.left <= playerDimension.right;

        // Check if the two elements are touching vertically
        const verticalTouch =
        movedElemDimension.bottom >= playerDimension.top && movedElemDimension.top <= playerDimension.bottom;

        // Check if the two elements are touching each other
        if (horizontalTouch && verticalTouch) {
          // Elements are touching each other
          ouch = true;
          playBeep();
        } else {
          // Elements are not touching each other
        }
      }
      
      i++;
    }
  

  } catch (error) {}
}

function playBeep() {
    const beep = new Audio('./sounds/ouchnoise.mp3');
    beep.play();
}


getPlayers();
