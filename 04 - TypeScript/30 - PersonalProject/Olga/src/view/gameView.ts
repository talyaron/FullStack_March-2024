import { fishList } from "../model/objectModel";
import { Hook } from "../model/playerModel";

export class GameView {
  playerElement: HTMLElement;
  hookElement: HTMLElement;
  objectsContainer: HTMLElement;
  scoreElement: HTMLElement;
  timerElement: HTMLElement;

  constructor() {
    this.playerElement = document.querySelector("#player")!;
    this.hookElement = document.querySelector("#hook")!;
    this.objectsContainer = document.querySelector(".water")!;
    this.scoreElement = document.querySelector("#score")!;
    this.timerElement = document.querySelector("#timer")!;
  }

  renderHook(hook: Hook) {
    const fishingRod = document.querySelector("#fishing-rod") as HTMLElement;
    const hookElem = document.querySelector("#hook") as HTMLElement;
    const fishingLine = document.querySelector("#fishing-line") as HTMLElement;

    if (!hook.isMoving) {
      hook.update();
      fishingLine.style.height = `50px`;
      fishingRod.style.transform = `rotate(${hook.angle}rad)`;
      fishingRod.style.left = `${hook.x}px`;
      hookElem.style.left = `0px`;
      fishingRod.style.top = `${hook.y}px`;
      hookElem.style.top = `0px`;

    } else {
        fishingLine.style.height = `${hook.length + 50}px`;
        if (hook.angle < 0) {
          hookElem.style.left = `${hook.length * Math.sin(0)}px`;
          hookElem.style.top = `${hook.length * Math.cos(0)}px`;
        } else {
          hookElem.style.left = `-${hook.length * Math.sin(0)}px`;
          hookElem.style.top = `${hook.length * Math.cos(0)}px`;
        }
    }
  }

  renderWater() {
    let html: string = "";
    fishList.forEach((fish) => {
      if (fish.direction === "left") {
        html += `<div id="${fish.id}" class="fish" style="left: ${fish.x}%; top: ${fish.y}%; width: ${fish.type.width}px; height: ${fish.type.height}px;"><img src="${fish.type.img}" alt="fish" style="transform: scaleX(-1);"></div>`;
      } else {
        html += `<div id="${fish.id}" class="fish" style="left: ${fish.x}%; top: ${fish.y}%; width: ${fish.type.width}px; height: ${fish.type.height}px;"><img src="${fish.type.img}" alt="fish"></div>`;
      }
      fish.update();
    });
    this.objectsContainer.innerHTML = html;
  }

  updateScore(score: number) {
    this.scoreElement.innerText = `Score: ${score}`;
  }

  updateTimer(timer: number) {
    this.timerElement.innerText = `Time: ${Math.floor(timer)}`;
  }
}
