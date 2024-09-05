
type GameState = "start"|"playing"|"gameOver";

let currentState: GameState = "start";
let collisionCount: number = 0;
const maxCollisions: number = 3;

window.addEventListener("DOMContentLoaded", () => {
    const startPage = document.getElementById("startPage") as HTMLDivElement;
    const gamePage = document.getElementById("gamePage") as HTMLDivElement;
    const gameOverPage = document.getElementById("gameOverPage") as HTMLDivElement;
    const startButton = document.getElementById("startButton") as HTMLButtonElement;
    const restartButton = document.getElementById("restartButton") as HTMLButtonElement;
    const collisionCountDisplay = document.getElementById("collisionCount") as HTMLSpanElement;


function render() {
    if(currentState === "start"){
        startPage.style.display = "block";
        gamePage.style.display = "none";
        gameOverPage.style.display = "none";
    } else if(currentState === "playing"){
        startPage.style.display = "none";
        gamePage.style.display = "block";
        gameOverPage.style.display = "none"; 
    } else if(currentState === "gameOver"){
        startPage.style.display = "none";
        gamePage.style.display ="none";
        gameOverPage.style.display= "block"
    }
}

startButton.addEventListener("click", () => {
    currentState = "playing"; 
    render(); 
    startGame();
});

restartButton.addEventListener("click", () => {
    currentState = "start";
    restartGame();
    render();
});


function startGame() {
    collisionCount = 0;
    
}

function restartGame() {
    collisionCount = 0;
    collisionCountDisplay.textContent = collisionCount.toString();
}

function checkCollision() {
    collisionCount++;
    collisionCountDisplay.textContent = collisionCount.toString();
    if (collisionCount >= maxCollisions) {
        currentState = "gameOver";
        // Additional logic to stop the game (e.g., stop moving walls, stop bird movement, etc.)
    }
}

function gameOver() {
    currentState = "gameOver";
    render();
}
render(); //initial render to show the start page
});
