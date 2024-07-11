class Animal {
    id: string;
    name: string;
    image_source: string;
    x: number;
    y: number;
    direction: string;
  
    constructor(
      name: string,
      id: string,
      image_source: string,
      x: number,
      y: number
    ) {
      this.id = id;
      this.name = name;
      this.image_source = image_source;
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
  
  }
  
  const Drake = new Animal("Drake the Snake", "1", "https://kids.rspca.org.au/UserFiles/RSPCAKidsEducationSA/Image/snake.png", 25, 50);
  const Earl = new Animal("Earl the Squirrel", "2", "https://terminix.ca/wp-content/uploads/2022/02/Terminix_March28_Blog_7AmazingSquirrelAbilities_1024x712.jpg", 42, 65);
  const Morse = new Animal("Morse the Horse", "3", "https://ichef.bbci.co.uk/news/480/cpsprodpb/B875/production/_102512274_gettyimages-518360318.jpg.webp", 52, 10);
  const Greetle = new Animal("Greetle the Beetle", "4", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbTAweSJC3fL7jG6hEWEERZRPVftqz9aqiw&s", 20, 40);
 
  
  const mainDiv = document.querySelector("#farm") as HTMLDivElement;
  
  function AnimalsDiv(animal: Animal): string | undefined {
    try {
      let directionClass = "";
      switch (animal.direction) {
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
      return `<div class='animals ${directionClass}' id='${animal.id}' style="left:${animal.x}%;top:${animal.y}%">
                <img src='${animal.image_source}' alt='${animal.name}'>
                <button class="animal__button" onclick="handleMove('${animal.id}', 'up')">Up</button>
                <button class="animal__button" onclick="handleMove('${animal.id}', 'down')">Down</button>
                <button class="animal__button" onclick="handleMove('${animal.id}', 'left')">Left</button>
                <button class="animal__button" onclick="handleMove('${animal.id}', 'right')">Right</button>
              </div>`;  
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
  
  const animals: Animal[] = [Drake, Earl, Morse, Greetle];
  
  function writeAnimalsToDOM() {
    try {
      if (!mainDiv) throw new Error("Element not found");
      if (!animals.length) throw new Error("No animal found");
      let html: string = ``;
      animals.forEach((player) => {
        const htmlAnimal = AnimalsDiv(player);
        if (htmlAnimal) html += htmlAnimal;
      });
  
      mainDiv.innerHTML = html;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
  
  writeAnimalsToDOM();
  
  function handleMove(id: string, direction: string) {
    try {
      const animal = animals.find((p) => p.id === id);
      if (!animal) throw new Error("Animal not found");
  
      switch (direction) {
        case 'up':
            animal.moveUpAndDown(-1);
          break;
        case 'down':
            animal.moveUpAndDown(1);
          break;
        case 'left':
            animal.moveRightAndLeft(-1);
          break;
        case 'right':
            animal.moveRightAndLeft(1);
          break;
      }
  
      checkCollisions();
      writeAnimalsToDOM();
    } catch (error) {
      console.error(error);
    }
  }
  
  function checkCollisions() {
    for (let i = 0; i < animals.length; i++) {
      for (let j = i + 1; j < animals.length; j++) {
        if (Math.abs(animals[i].x - animals[j].x) < 5 && Math.abs(animals[i].y - animals[j].y) < 5) {
          const audio = document.querySelector('collision-sound') as HTMLAudioElement;
          audio.play();
        }
      }
    }
  }
  document.addEventListener("keydown", handleKeyPress);
  function handleKeyPress(event: KeyboardEvent) {
    const key = event.key.toLowerCase();
    switch (key) {
      case "arrowup":
        handleMove(selectedAnimalId, "up");
        break;
      case "arrowdown":
        handleMove(selectedAnimalId, "down");
        break;
      case "arrowleft":
        handleMove(selectedAnimalId, "left");
        break;
      case "arrowright":
        handleMove(selectedAnimalId, "right");
        break;
    }
  }