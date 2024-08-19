import { GameModel } from "../model/gameModel";
import { GameView } from "../view/gameView";

export class GameController {
    model: GameModel;
    view: GameView;
    intervalId: number | undefined;
  
    constructor(model: GameModel, view: GameView) {
      this.model = model;
      this.view = view;
      this.intervalId = undefined;
    }
  
    init() {
      document.addEventListener('keydown', (event) => this.handleKeyPress(event));
      this.intervalId = setInterval(() => this.gameLoop(), 1000 / 60);
    }
  
    handleKeyPress(event: KeyboardEvent) {
      if (event.key === ' ' && !this.model.levelCompleted) {
        if (!this.model.player.hook.isMoving) {
          this.model.player.hook.launch();
        }
      }
    }
  
    gameLoop() {
      this.model.update();
      this.view.renderHook(this.model.player.hook);
      this.view.renderWater();
      this.view.updateScore(this.model.score);
      this.view.updateTimer(this.model.timer);
  
      if (this.model.levelCompleted) {
        if (this.intervalId) {
          clearInterval(this.intervalId);
          console.log("Game Stopped, Level Completed");
        }
      }
    }
  }
  