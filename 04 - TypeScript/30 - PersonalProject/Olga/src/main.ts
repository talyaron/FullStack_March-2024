import './style.scss'
import { GameController } from './controller/gameContr';
import { GameModel } from './model/gameModel';
import { GameView, renderGame } from './view/gameView';

renderGame();

const model = new GameModel();
const view = new GameView();
const controller = new GameController(model, view);

controller.init();