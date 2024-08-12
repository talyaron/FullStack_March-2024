export function renderGame() {
    const html = `
    <div id="hook"></div>
    <div class="header">
        <div class="div-box">
            <div id="score">Score: 0</div>
            <div id="goalLevel">Goal: 100</div>
        </div>
        <div id="player">
            
        </div>

        <div class="div-box">
            <div id="level">Level: 1</div>
            <div id="timer">Timer: 60</div>
        </div>
    </div>
    <div class="water"></div>
    `;
    const game = document.querySelector("#game") as HTMLElement;
    game.innerHTML = html;

}