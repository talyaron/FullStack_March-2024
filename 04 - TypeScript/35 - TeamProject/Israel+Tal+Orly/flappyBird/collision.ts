let currentState: string = "ready";  // Initial game state
let isColliding = false;
let bird: number = 90;
let isKeyPressed: boolean = false;

const topWall1 = document.querySelector('#topWall') as HTMLDivElement;
const bottomWall1 = document.querySelector('#bottomWall') as HTMLDivElement;
const topWall2 = document.querySelector('#topWall2') as HTMLDivElement;
const bottomWall2 = document.querySelector('#bottomWall2') as HTMLDivElement;
const topWall3 = document.getElementById("topWall3") as HTMLElement;
const bottomWall3 = document.getElementById("bottomWall3") as HTMLElement;
const img = document.querySelector('img') as HTMLImageElement;

console.log(isColliding);


function isCollision(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return !(rect1.left > rect2.right || rect1.right < rect2.left || rect1.top > rect2.bottom || rect1.bottom < rect2.top);

}

function checkCollision() {
    if (currentState !== "playing") return; // Prevent collision checking unless the game is playing

    const isCollidingWithTopWall = isCollision(topWall1, img);
    const isCollidingWithBottomWall = isCollision(bottomWall1, img);
    const isCollidingWithTopWall2 = isCollision(topWall2, img);
    const isCollidingWithBottomWall2 = isCollision(bottomWall2, img);
    const isCollidingWithBottomWall3 = isCollision(bottomWall3, img);
    const isCollidingWithTopWall3 = isCollision(bottomWall3, img);

    if (isCollidingWithTopWall || isCollidingWithBottomWall || isCollidingWithTopWall2 || isCollidingWithBottomWall2 || isCollidingWithBottomWall3 || isCollidingWithTopWall3 ) {
        console.log("Collision detected");
        isColliding = true;
        img.style.top = "90vh";  // Move the bird to a default position after collision
    } else {
        isColliding = false;  // Reset the collision flag when no collisions are detected
    }
}


setInterval(checkCollision, 100);


document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        isKeyPressed = true;

    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp') {
        isKeyPressed = false;



    }
});

function renderBird(bird: number) {
    if (!isColliding) {
        img.style.top = bird + "vh";
    }
}

setInterval(() => {
    if (currentState !== "playing") return; // Prevent bird movement unless the game is playing

    if (isKeyPressed) {
        bird--;
        if (bird < 10) bird = 10;
    } else {
        bird++;
        if (bird > 90) bird = 90;
    }

    renderBird(bird);
}, 10);


// Function to start the game
function startGame() {
    currentState = "playing";  // Set game state to 'playing'
    bird = 90;  // Reset bird position
    isColliding = false;  // Reset collision flag
    console.log("Game started!");
}

document.querySelector('#startButton')?.addEventListener('click', startGame);
