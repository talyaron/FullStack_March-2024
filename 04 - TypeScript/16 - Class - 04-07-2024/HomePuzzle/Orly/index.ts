class Player {
    id: string;
    name: string;
    img: string;
    x: number;
    y: number;
    direction: string;

    constructor(name: string, img: string) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.img = img;
        this.direction = 'right';  
    }

    setPosition(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    moveRight() {
        this.x = this.x === undefined ? 0 : this.x + 5;
        if (this.x > 95) this.x = 95;
        this.direction = 'right';
    }

    moveLeft() {
        this.x = this.x === undefined ? 0 : this.x - 5;
        if (this.x < 0) this.x = 0;
        this.direction = 'left';
    }

    moveUp() {
        this.y = this.y === undefined ? 0 : this.y - 5;
        if (this.y < 0) this.y = 0;
        this.direction = 'up';
    }

    moveDown() {
        this.y = this.y === undefined ? 0 : this.y + 5;
        if (this.y > 95) this.y = 95;
        this.direction = 'down';
    }

    getBounds() {
        return {
            left: this.x,
            right: this.x + 5,
            top: this.y,
            bottom: this.y + 5
        };
    }
}
const Player1 = new Player('Player1', 'Player1.png');
Player1.setPosition(10, 20);

const Player2 = new Player('Player2', 'Player2.png');
Player2.setPosition(60, 40);

const players: Player[] = [Player1, Player2];

// View
const root = document.querySelector('#root') as HTMLElement;
const collisionSound = document.getElementById('collision-sound') as HTMLAudioElement;

function renderPlayer(player: Player, element: HTMLElement) {
    const transform = player.direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)';
    return `
        <div class="player" style="background-image:url(${player.img}); top:${player.y}%; left:${player.x}%; transform:${transform}">
            <button class="player__button player__button--up" onclick="handleMove('${player.id}', 'up')">Up</button>
            <button class="player__button player__button--down" onclick="handleMove('${player.id}', 'down')">Down</button>
            <button class="player__button player__button--left" onclick="handleMove('${player.id}', 'left')">Left</button>
            <button class="player__button player__button--right" onclick="handleMove('${player.id}', 'right')">Right</button>
        </div>`;
}


function renderPlayers(players: Player[], root: HTMLElement | null) {
    try {
        if (!root) throw new Error('Root element not found');

        let html = '';
        players.forEach(player => {
            html += renderPlayer(player, root);
        });
        root.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

renderPlayers(players, root);

function checkCollision(player1: Player, player2: Player) {
    const bounds1 = player1.getBounds();
    const bounds2 = player2.getBounds();

    return !(bounds1.right < bounds2.left ||
             bounds1.left > bounds2.right ||
             bounds1.bottom < bounds2.top ||
             bounds1.top > bounds2.bottom);
}

// Controllers
(window as any).handleMove = function (id: string, direction: string) {
    try {
        const player = players.find(player => player.id === id);
        if (!player) throw new Error('Player not found');

        switch (direction) {
            case 'up':
                player.moveUp();
                break;
            case 'down':
                player.moveDown();
                break;
            case 'left':
                player.moveLeft();
                break;
            case 'right':
                player.moveRight();
                break;
        }

        // Check for collisions
        if (checkCollision(players[0], players[1])) {
            collisionSound.play();
        }

        renderPlayers(players, root);
    } catch (error) {
        console.error(error);
    }
};