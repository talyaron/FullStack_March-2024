class GameController {
    model: GameModel;
    view: GameView;
    snake: Snake;


    constructor(model: GameModel, view: GameView) {
        this.model = model;  
        this.view = view; 

        document.addEventListener('keydown', this.handleMovement.bind(this));
    }

    startGame() {
        this.model.updateGame(); 
        this.view.renderSnake(this.model.snake);
        this.view.renderFood(this.model.food);

        document.addEventListener('keydown', this.handleMovement.bind(this));
    }
    updateGame (gameOver: boolean) {
         this.snake.move();
        this.checkCollision();
        return { gameOver: false };
    }

    handleMovement(event: KeyboardEvent) {
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
}
const result = this.model.updateGame();
this.view.renderSnake(this.model.snake);
this.view.renderFood(this.model.food);

if (result.gameOver) {
    this.view.showGameOver();
}


