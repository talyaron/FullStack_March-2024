class GameView {
  gameContainer: HTMLElement;
  scoreElement: HTMLElement;

  constructor(gameContainer: HTMLElement, scoreElement: HTMLElement) {
    this.gameContainer = gameContainer;
    this.scoreElement = scoreElement;
  }

  renderSnake(snake: Snake) {
    this.gameContainer.innerHTML = "";
    snake.body.forEach((segment) => {
      const segmentElement = document.createElement("div");
      segmentElement.style.left = `${segment.x * snake.size}px`;
      segmentElement.style.top = `${segment.y * snake.size}px`;
      segmentElement.style.width = `${snake.size}px`;
      segmentElement.style.height = `${snake.size}px`;
      segmentElement.classList.add("snake-segment");
      this.gameContainer.appendChild(segmentElement);
    });
  }

  renderFood(food: Food) {
    let foodElement = document.querySelector(".food") as HTMLElement;
    if (!foodElement) {
      foodElement = document.createElement("div");
      foodElement.classList.add("food");
      this.gameContainer.appendChild(foodElement);
    }
    foodElement.style.left = `${food.position.x * food.size}px`;
    foodElement.style.top = `${food.position.y * food.size}px`;
  }
  updateScore(score: number) {
    this.scoreElement.textContent = score.toString();
  }

  showGameOver() {
    alert("Game Over!");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const gameContainer = document.querySelector("game-container") as HTMLElement | null;
  const scoreElement = document.querySelector("score") as HTMLElement | null;

  if (gameContainer && scoreElement) {
    const containerSize = {
      width: gameContainer.clientWidth,
      height: gameContainer.clientHeight,
    };
    const model = new GameModel(containerSize);
    const view = new GameView(gameContainer, scoreElement);
    const controller = new GameController(model, view);

    controller.startGame();
  } else {
    console.error("Required DOM elements are not found.");
  }
});
