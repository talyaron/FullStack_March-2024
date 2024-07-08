class Player {
    id: string;
    name: string;
    img: string;
    x: number;
    y: number;

    constructor(name: string, img: string, x: number, y: number) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.img = img;
        this.x = x;
        this.y = y;
    }

    moveRight() {
        this.x += 5;
    }

    moveLeft() {
        this.x -= 5;
    }

    moveUp() {
        this.y -= 5;
    }

    moveDown() {
        this.y += 5;
    }
}

const messi = new Player("Messi", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYvS5pCTTXbNpXja5dkBZOiYJpYZpmxyEjQ&s", 500, 700);
const ronaldo = new Player("Ronaldo", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYvS5pCTTXbNpXja5dkBZOiYJpYZpmxyEjQ&s", 250, 25);
const pedro = new Player("Pedro", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYvS5pCTTXbNpXja5dkBZOiYJpYZpmxyEjQ&s", 150, 50);

const players = [messi, ronaldo, pedro];

const root = document.querySelector(".players") as HTMLDivElement;
let selectedPlayer: Player | null = null; // Track the selected player

function renderPlayer(player: Player) {
    const playerElement = document.createElement('div');
    playerElement.classList.add('player');
    playerElement.style.backgroundImage = `url('${player.img}')`;
    playerElement.style.top = `${player.y}px`;
    playerElement.style.left = `${player.x}px`;

    playerElement.addEventListener('click', () => {
        // Select the player upon click
        selectedPlayer = player;
        renderPlayers(players); // Re-render to update selection styling
    });

    root.appendChild(playerElement);
}

function renderPlayers(players: Player[]) {
    root.innerHTML = ''; // Clear previous content
    players.forEach(player => {
        renderPlayer(player);
        if (selectedPlayer && player.id === selectedPlayer.id) {
            playerElement.classList.add('selected');
        }
    });
}

renderPlayers(players);

function handleMove(id: string) {
    const player = players.find(player => player.id === id);
    if (!player) {
        throw new Error('Player not found');
    }
    selectedPlayer = player; // Select the player
    renderPlayers(players);
}

function handleRight(id: string) {
    if (!selectedPlayer) return;
    selectedPlayer.moveRight();
    renderPlayers(players);
}

function handleLeft(id: string) {
    if (!selectedPlayer) return;
    selectedPlayer.moveLeft();
    renderPlayers(players);
}

function handleUp(id: string) {
    if (!selectedPlayer) return;
    selectedPlayer.moveUp();
    renderPlayers(players);
}

function handleDown(id: string) {
    if (!selectedPlayer) return;
    selectedPlayer.moveDown();
    renderPlayers(players);
}

// Event listener for keyboard arrow keys
document.addEventListener('keydown', (event) => {
    if (!selectedPlayer) return;

    const key = event.key;
    switch (key) {
        case 'ArrowRight':
            handleRight(selectedPlayer.id);
            break;
        case 'ArrowLeft':
            handleLeft(selectedPlayer.id);
            break;
        case 'ArrowUp':
            handleUp(selectedPlayer.id);
            break;
        case 'ArrowDown':
            handleDown(selectedPlayer.id);
            break;
        default:
            break;
    }
});
