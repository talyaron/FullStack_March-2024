class Snake {
  body: { x: number; y: number }[];
  direction: { x: number; y: number };
  size: number;

  constructor() {
    this.body = [{ x: 10, y: 10 }];
    this.direction = { x: 0, y: 0 };
    this.size = 20;
  }

  move() {
    const head = { ...this.body[0] };
    head.x += this.direction.x;
    head.y += this.direction.y;
    this.body.unshift(head);
    this.body.pop();
  }

  grow() {
    const lastSegment = { ...this.body[this.body.length - 1] };
    this.body.push(lastSegment);
  }

  setDirection(x: number, y: number) {
    this.direction.x = x;
    this.direction.y = y;
  }

  checkCollision(food: Food): boolean {
    const head = this.body[0];
    console.log(`Checking collision: Snake head at (${head.x}, ${head.y}), Food at (${food.position.x}, ${food.position.y})`);
    return head.x === food.position.x && head.y === food.position.y;

  }

  checkSelfCollision(): boolean {
    const head = this.body[0];
    return this.body.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
  }

  checkWallCollision(width: number, height: number): boolean {
    const head = this.body[0];
    return head.x < 0 || head.x >= width || head.y < 0 || head.y >= height;
  }
}

class Food {
  position: { x: number; y: number };
  size: number;
  containerSize: { width: number; height: number };

  constructor(containerSize: { width: number; height: number }) {
    this.position = { x: 5, y: 5 };
    this.size = 20;
    this.containerSize = containerSize;
  }

  generateNewPosition() {
    this.position.x = Math.floor(Math.random() * (this.containerSize.width / this.size));
    this.position.y = Math.floor(Math.random() * (this.containerSize.height / this.size));
    console.log(`New food position: (${this.position.x}, ${this.position.y})`);

  }
}

class GameModel {
  snake: Snake;
  food: Food;
  score: number;
  containerSize: { width: number; height: number };

  constructor(containerSize: { width: number; height: number }) {
    this.snake = new Snake();
    this.food = new Food(containerSize);
    this.score = 0;
    this.containerSize = containerSize;
  }

  updateGame(): { gameOver: boolean } {
    this.snake.move();

    if (this.snake.checkCollision(this.food)) {
      this.snake.grow();
      this.score++;
      this.food.generateNewPosition();
    }

    const wallCollision = this.snake.checkWallCollision(
      this.containerSize.width / this.snake.size,
      this.containerSize.height / this.snake.size
    );
    const selfCollision = this.snake.checkSelfCollision();

    return { gameOver: wallCollision || selfCollision };
  }
}

class GameView {
  gameContainer: HTMLElement;
  scoreElement: HTMLElement;

  constructor(gameContainer: HTMLElement, scoreElement: HTMLElement) {
    this.gameContainer = gameContainer;
    this.scoreElement = scoreElement;
  }

  renderSnake(snake: Snake) {
    this.gameContainer.innerHTML = ""; 
    snake.body.forEach(segment => {
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

class GameController {
  model: GameModel;
  view: GameView;

  constructor(model: GameModel, view: GameView) {
    this.model = model;
    this.view = view;
  }

  startGame() {
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

  handleMovement(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        if (this.model.snake.direction.y !== 1) this.model.snake.setDirection(0, -1);
        break;
      case 'ArrowDown':
        if (this.model.snake.direction.y !== -1) this.model.snake.setDirection(0, 1);
        break;
      case 'ArrowLeft':
        if (this.model.snake.direction.x !== 1) this.model.snake.setDirection(-1, 0);
        break;
      case 'ArrowRight':
        if (this.model.snake.direction.x !== -1) this.model.snake.setDirection(1, 0);
        break;
    }
  }
}

const gameContainer = document.getElementById("game-container") as HTMLElement;
const scoreElement = document.getElementById("score") as HTMLElement;
const containerSize = { width: 400, height: 400 };

const model = new GameModel(containerSize);
const view = new GameView(gameContainer, scoreElement);
const controller = new GameController(model, view);

controller.startGame();
