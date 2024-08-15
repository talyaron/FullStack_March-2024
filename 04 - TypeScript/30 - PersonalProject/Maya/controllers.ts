function handleMovement(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this.model.snake.setDirection(0, -1);
        break;
      case 'ArrowDown':
        this.model.snake.setDirection(0, 1);
        break;
      case 'ArrowLeft':
        this.model.snake.setDirection(-1, 0);
        break;
      case 'ArrowRight':
        this.model.snake.setDirection(1, 0);
        break;
    }
  }


const result = this.model.updateGame();
this.view.renderSnake(this.model.snake);
this.view.renderFood(this.model.food);

if (result.gameOver) {
    this.view.showGameOver();
}

document.addEventListener('keydown', this.handleMovement.bind(this));

function   startGame() {
    const gameLoop = setInterval(() => {
      const gameState = this.model.updateGame(); 
      this.view.renderSnake(this.model.snake);
      this.view.renderFood(this.model.food);
      this.view.updateScore(this.model.score);

      if (gameState.gameOver) {
        clearInterval(gameLoop);
        this.view.showGameOver();
      }
    }, 100);

    document.addEventListener('keydown', this.handleMovement.bind(this));
  }

