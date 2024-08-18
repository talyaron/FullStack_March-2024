class Game {
  constructor() {
    this.score = 0;
    this.snake = new Snake(this);
    this.updateScoreDisplay();
    this.setupResetButton();
  }

  incrementScore() {
    this.score += 1;
    this.updateScoreDisplay();
  }

  resetScore() {
    this.score = 0;
    this.updateScoreDisplay();
  }

  updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `Score: ${this.score}`;
  }

  setupResetButton() {
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", () => this.resetScore());
  }
}

class Snake {
  constructor(game) {
    this.game = game;
    this.element = document.getElementById("snake");
    this.gameArea = document.getElementById("gameArea");
    this.element.addEventListener("click", () => this.handleClick());
    this.moveSnake();
  }

  handleClick() {
    this.game.incrementScore();
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
