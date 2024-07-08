//model
class Player {
    id: string;
    name: string;
    img: string;
    x: number;
    y: number;
    class: string

    constructor(name: string, img: string, x: number, y: number) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.img = img;
        this.x = x;
        this.y = y;
        this.class = "player";
    }

    moveRight() {

        try {
            if (this.x === undefined) {
                this.x = 0;
            }

            if (this.y === undefined) {
                this.y = 0;
            }
            this.x += 5;
            this.class = "player";
            if (this.x > 100) {
                this.x = 100;
            }
        } catch (error) {

        }

    }

    moveLeft() {

        try {
            if (this.x === undefined) {
                this.x = 0;
            }

            if (this.y === undefined) {
                this.y = 0;
            }
            this.x -= 5;
            this.class = "flipPlayer";


            if (this.x < 0) {
                this.x = 0;
            }
        } catch (error) {

        }

    }

    moveUp() {

        try {
            if (this.x === undefined) {
                this.x = 0;
            }

            if (this.y === undefined) {
                this.y = 0;
            }
            this.y -= 5;


            if (this.y < 0) {
                this.y = 0;
            }
        } catch (error) {

        }

    }

    moveDown() {

        try {
            if (this.x === undefined) {
                this.x = 0;
            }

            if (this.y === undefined) {
                this.y = 0;
            }
            this.y += 5;
            if (this.y > 100) {
                this.y = 100;
            }
        } catch (error) {

        }

    }
}


const pedri = new Player("Pedri", "https://i.ibb.co/HYgRKzs/2023-12-10-FCBvs-GIRONA-85-Photoroom.png", 5, 5);
const gavi = new Player("Gavi", "https://i.ibb.co/2YkGmt0/2024-06-12-RECUPERACIOGAVI-03-Photoroom.png", 30, 10);
const ansuFati = new Player("Ansu Futi", "https://i.ibb.co/N9n7WnF/15669357183578-b-600x450-Photoroom.png", 70, 15);
const daniOlmo = new Player("Dani Olmo", "https://i.ibb.co/jv504PB/dani-olmo-rb-leipzig-2020-Photoroom.png", 25, 20);

const players = [pedri, gavi, ansuFati, daniOlmo];



const root = document.querySelector(".players") as HTMLDivElement;



function renderplayer(player: Player) {
    // const html = `<div class="player"  style = "background-image:url('${player.img}'); top:${player.y}rem; left:${player.x}rem">
    const html = `<div class=${player.class}   style= "top:${player.y}rem; left:${player.x}rem"> <img src="${player.img}" alt="player-img">
    <button class="right" onclick="handleRight('${player.id}')"><i class="fa-solid fa-arrow-right"></i></button>
    <button class="left" onclick="handleLeft('${player.id}')"><i class="fa-solid fa-arrow-left"></i></button>
    <button class="up" onclick="handleUp('${player.id}')"><i class="fa-solid fa-arrow-up"></i></button>
    <button class="down" onclick="handleDown('${player.id}')"><i class="fa-solid fa-arrow-down"></i></button>
    </div>`;


    return html;
}

function renderPlayers(players: Player[]) {
    const html = players.map(player => renderplayer(player)).join("");

    root.innerHTML = html;


}

renderPlayers(players);

function handleRight(id: string) {
    try {


        const player = players.find(player => player.id === id);




        if (!player) {
            throw new Error('player not found');
        }
        player.moveRight();
        renderPlayers(players);
    } catch (error) {

    }
}

function handleLeft(id: string) {
    try {


        const player = players.find(player => player.id === id);
        console.log(player);
        




        if (!player) {
            throw new Error('player not found');
        }
        player.moveLeft();
        renderPlayers(players);
        

    } catch (error) {

    }
}

function handleUp(id: string) {
    try {

        const player = players.find(player => player.id === id);


        if (!player) {
            throw new Error('player not found');
        }
        player.moveUp();
        renderPlayers(players);
    } catch (error) {

    }
}

function handleDown(id: string) {
    try {


        const player = players.find(player => player.id === id);




        if (!player) {
            throw new Error('player not found');
        }
        player.moveDown();
        renderPlayers(players);
    } catch (error) {

    }
}




