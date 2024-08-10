import './style.scss'
import { renderGame } from "./view/playerView";

setInterval(() => {
  renderGame();
}, 50)

// renderGame();
