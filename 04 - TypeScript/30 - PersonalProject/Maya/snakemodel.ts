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

  setDirection(x, y) {
    this.direction.x = x;
    this.direction.y = y;
  }

  checkCollision(food) {
    const head = this.body[0];
    return head.x === food.position.x && head.y === food.position.y;
  }

  checkSelfCollision() {
    const head = this.body[0];
    return this.body
      .slice(1)
      .some((segment) => segment.x === head.x && segment.y === head.y);
  }

  checkWallCollision(width, height) {
    const head = this.body[0];
    return head.x < 0 || head.x >= width || head.y < 0 || head.y >= height;
  }
}

class Food {
  position: { x: number; y: number };
  size: number;
  containerSize: number | any;
  constructor(containerSize) {
    this.position = { x: 5, y: 5 };
    this.size = 20;
    this.containerSize = containerSize;
  }

  generateNewPosition() {
    this.position.x = Math.floor(
      Math.random() * (this.containerSize.width / this.size)
    );
    this.position.y = Math.floor(
      Math.random() * (this.containerSize.height / this.size)
    );
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

  updateGame() {
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
