import { GameController } from './controller/gameContr';
import { GameModel } from './model/gameModel';
import './style.scss'
import { GameView } from './view/gameView';

const model = new GameModel();
const view = new GameView();
const controller = new GameController(model, view);

controller.init();