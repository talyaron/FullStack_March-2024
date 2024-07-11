class Player {
    id: string;
    name: string;
    imageUrl: string;
    yearOfBirth: number;
    x: number;
    y: number;
    direction: string;
  
    constructor(
      name: string,
      id: string,
      imageUrl: string,
      yearOfBirth: number,
      x: number,
      y: number
    ) {
      this.id = id;
      this.name = name;
      this.imageUrl = imageUrl;
      this.yearOfBirth = yearOfBirth;
      this.x = x;
      this.y = y;
      this.direction = "right", "left", "up", "down";
    }
  
    moveRightAndLeft(dx: number) {
      this.x += dx;
  
      if (dx > 0) this.direction = "right";
      if (dx < 0) this.direction = "left";
  
      console.log(this.x);
    }
    moveUpAndDown(dy: number) {
      this.y += dy;
  
      if (dy > 0) this.direction = "down";
      if (dy < 0) this.direction = "up";
  
      console.log(this.y);
    }
  
    getAge() {
      return new Date().getFullYear() - this.yearOfBirth;
    }
  }
  
  const Messi = new Player("Messi", "1", "./images/messi.jpg", 1987, 25, 50);
  const Ronaldo = new Player("Ronaldo", "2", "./images/ronaldo.jpg", 1985, 42, 65);
  const Vini = new Player("Vini", "3", "./images/vini.jpg", 2000, 52, 10);
  const Mbappe = new Player("Mbappe", "4", "./images/mbappe.jpg", 1999, 20, 40);
  const Griezmann = new Player("Griezmann", "5", "./images/grizmann.jpg", 1988, 30, 10);
  
  const mainDiv = document.querySelector("#field") as HTMLDivElement;
  
  function playersDiv(player: Player): string | undefined {
    try {
      let directionClass = "";
      switch (player.direction) {
        case "left":
          directionClass = "left";
          break;
        case "right":
          directionClass = "right";
          break;
        case "up":
          directionClass = "up";
          break;
        case "down":
          directionClass = "down";
          break;
      }
      return `<div class='players ${directionClass}' id='${player.id}' style="left:${player.x}%;top:${player.y}%">
                <img src='${player.imageUrl}' alt='${player.name}'>
                <button class="player__button" onclick="handleMove('${player.id}', 'up')">Up</button>
                <button class="player__button" onclick="handleMove('${player.id}', 'down')">Down</button>
                <button class="player__button" onclick="handleMove('${player.id}', 'left')">Left</button>
                <button class="player__button" onclick="handleMove('${player.id}', 'right')">Right</button>
              </div>`;  
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
  
  const players: Player[] = [Messi, Ronaldo, Vini, Mbappe, Griezmann];
  
  function writePlayersToDOM() {
    try {
      if (!mainDiv) throw new Error("Element not found");
      if (!players.length) throw new Error("No player found");
      let html: string = ``;
      players.forEach((player) => {
        const htmlPlayer = playersDiv(player);
        if (htmlPlayer) html += htmlPlayer;
      });
  
      mainDiv.innerHTML = html;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
  
  writePlayersToDOM();
  
  function handleMove(id: string, direction: string) {
    try {
      const player = players.find((p) => p.id === id);
      if (!player) throw new Error("Player not found");
  
      switch (direction) {
        case 'up':
          player.moveUpAndDown(-1);
          break;
        case 'down':
          player.moveUpAndDown(1);
          break;
        case 'left':
          player.moveRightAndLeft(-1);
          break;
        case 'right':
          player.moveRightAndLeft(1);
          break;
      }
  
      checkCollisions();
      writePlayersToDOM();
    } catch (error) {
      console.error(error);
    }
  }
  
  function checkCollisions() {
    for (let i = 0; i < players.length; i++) {
      for (let j = i + 1; j < players.length; j++) {
        if (Math.abs(players[i].x - players[j].x) < 5 && Math.abs(players[i].y - players[j].y) < 5) {
          const audio = document.querySelector('collision-sound') as HTMLAudioElement;
          audio.play();
        }
      }
    }
  }
  