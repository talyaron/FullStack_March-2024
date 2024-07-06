class Player {
    name: string;
    image: string;
    yearOfBirth: number;
    x: number;
    y: number;
    element: HTMLElement;
    constructor(name: string, image: string, yearOfBirth: number, x: number, y: number) {
        this.name = name;
        this.image = image;
        this.yearOfBirth = yearOfBirth;
        this.x = x;
        this.y = y;
        this.element = this.createPlayer();
    }
    // create arrows for player
    createPlayer(): HTMLElement {
        const myPlayer = document.createElement('div');
        myPlayer.className = 'players';
        myPlayer.style.left = `${this.x}%`;
        myPlayer.style.top = `${this.y}%`;
        myPlayer.innerHTML = `
            <div class="arrows">
                <button class="empty"></button>
                <button class="up">&#9650;</button>
                <button class="empty"></button>
                <button class="left">&#9664;</button>
                <button class="down">&#9660;</button>
                <button class="right">&#9654;</button>
            </div>
            <img src='${this.image}' alt='${this.name}'>
        `;
        
        const upButton = myPlayer.querySelector('.up') as HTMLButtonElement;
        const downButton = myPlayer.querySelector('.down') as HTMLButtonElement;
        const leftButton = myPlayer.querySelector('.left') as HTMLButtonElement;
        const rightButton = myPlayer.querySelector('.right') as HTMLButtonElement;
        // handle arrows 
        upButton.addEventListener('click', () => this.move('up'));
        downButton.addEventListener('click', () => this.move('down'));
        leftButton.addEventListener('click', () => this.move('left'));
        rightButton.addEventListener('click', () => this.move('right'));
        return myPlayer;
    }
    // move player
    move(direction: string) {
        switch (direction) {
            case 'up':
                this.y -= 5;
                break;
            case 'down':
                this.y += 5;
                break;
            case 'left':
                this.x -= 5;
                this.element.querySelector('img')!.style.transform = 'scaleX(-1)';
                break;
            case 'right':
                this.x += 5;
                this.element.querySelector('img')!.style.transform = 'scaleX(1)';
                break;
        }
        this.updatePosition();
        this.goBump();
    }
    updatePosition() {
        this.element.style.left = `${this.x}%`;
        this.element.style.top = `${this.y}%`;
    }
    // check if players collide
    goBump() {
        players.forEach(player => {
            if (player !== this && this.x === player.x && this.y === player.y) {
                const audio = new Audio('./Sound/challenge.mp3');
                audio.play();
            }
        });
    }
}
// create players
const player1 = new Player("messi", "./images/player1.png", 1987, 25, 50);
const player2 = new Player("ronaldo", "./images/player2.png", 1985, 40, 65);
const player3 = new Player("IDK", "./images/player3.png", 2000, 50, 60);
const players: Player[] = [player1, player2, player3];
const mainDiv = document.querySelector("#field") as HTMLDivElement;
// place players on field
function writePlayersToDOM(players: Player[], element: HTMLDivElement) {
    if (!element) throw new Error("Element not found");
    element.innerHTML = '';
    players.forEach(player => {
        element.appendChild(player.element);
    });
}
writePlayersToDOM(players, mainDiv);
