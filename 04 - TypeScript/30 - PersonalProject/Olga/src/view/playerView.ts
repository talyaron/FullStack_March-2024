import { Hook } from "../model/playerModel";
import { renderWater } from "./waterView";

export function renderHook(hook: Hook) {
    const hookElem = document.querySelector("#hook") as HTMLElement;
    hookElem.style.transform = `rotate(${hook.angle}rad)`
    hook.update();

}

export const hook = new Hook(50, 50);

export function renderGame() {
    const html = `
    <div class="header">
        <div class="div-box">
            <div id="score">Score: 0</div>
            <div id="goalLevel">Goal: 100</div>
        </div>
        <div id="player">
            <div id="hook"></div>
        </div>

        <div class="div-box">
            <div id="level">Level: 1</div>
            <div id="timer">Timer: 60</div>
        </div>
    </div>
    <div class="water">${renderWater()}</div>
    `;
    const game = document.querySelector("#game") as HTMLElement;
    game.innerHTML = html;
    renderHook(hook);
}