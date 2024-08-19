class Game {
  constructor() {
    this.score = 0;
    this.snakes = [];
    this.snakeCount = 3;
    this.initializeSnakes();
    this.updateScoreDisplay();
    this.setupResetButton();
  }

  initializeSnakes() {
    for (let i = 0; i < this.snakeCount; i++) {
      this.addSnake();
    }
  }

  addSnake() {
    const snake = new Snake(this);
    this.snakes.push(snake);
  }

  incrementScore() {
    this.score += 1;
    this.updateScoreDisplay();
  }

  updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `Score: ${this.score}`;
  }

  resetGame() {
    this.score = 0;
    this.updateScoreDisplay();

    const gameArea = document.getElementById("gameArea");
    while (gameArea.firstChild) {
      gameArea.removeChild(gameArea.firstChild);
    }

    this.snakes = [];
    this.initializeSnakes();
  }

  setupResetButton() {
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", () => this.resetGame());
  }
}

class Snake {
  constructor(game) {
    this.game = game;
    this.element = document.createElement("div");
    this.element.classList.add("snake");
    this.gameArea = document.getElementById("gameArea");
    this.gameArea.appendChild(this.element);
    this.element.addEventListener("click", () => this.handleClick());
    this.moveSnake();
  }

  handleClick() {
    this.game.incrementScore();
    this.game.addSnake();
  }

  moveSnake() {
    const maxX = this.gameArea.clientWidth - this.element.offsetWidth;
    const maxY = this.gameArea.clientHeight - this.element.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    this.element.style.left = `${randomX}px`;
    this.element.style.top = `${randomY}px`;

    setTimeout(() => this.moveSnake(), 1000);
  }
}

window.onload = () => {
  new Game();
};
