class Player {
    id: string;
    name: string;
    yearOfBirth: number;
    img: string;
    x: number;
    y: number;
    direction:boolean;
    style:String="background-image:url(${player.img}); top:${player.y}%; left:${player.x}%";

    constructor(name: string, yearOfBirth: number, img: string){
        this.id = Math.random().toString(16).slice(2);
        this,name=name;
        this.img=img;
        this.yearOfBirth=yearOfBirth;
    }


    setPosition(x:number,y:number){
        this.x=x;
        this.y=y;
    }
    setDirection(direction:boolean){
        this.direction=direction;
    }
    setStyle(style:String){
        this.style=style;
    }


    moveUp(){
        try {
            if(this.y===undefined)
                this.y=50;
            this.y=this.y-5;
            if(this.y<=20)
                this.y=20;
        } catch (error) {
            console.log("error moveUp");
            
        }
    }
    moveRight(){
        try {
            if(this.x===undefined)
                this.x=50;
            this.x=this.x+5;
            if(this.x>=100)
                this.x=100;
        } catch (error) {
            console.log("error moveRight")
        }
    }
    moveLeft(){
        try {
            if(this.x===undefined)
                this.x=50;
            this.x=this.x-5;
            if(this.x<=25)
                this.x=25;
        } catch (error) {
            console.log("error moveLeft")
        } 
    }
    moveDown(){
        try {
            if(this.y===undefined)
                this.y=50;
            this.y=this.y+5;
            if(this.y>=100)
                this.y=100;
        } catch (error) {
            console.log("error moveDown");
            
        }
    }
}


const ronaldo = new Player("ronaldo",1985,"ronaldo-removebg-preview.png");
const messi = new Player("messi",1987,"messi-removebg-preview.png");

ronaldo.setPosition(35,55);
ronaldo.setDirection(true);
messi.setPosition(90,55);
messi.setDirection(true);
const players: Player[]=[ronaldo,messi];

const root = document.querySelector('#football') as HTMLElement;

function renderPlayer(player: Player, element: HTMLElement) {

    const html = `<div class="player" style="background-image:url(${player.img}); top:${player.y}%; left:${player.x}%">
    <button class="player__button player__button--up"  onclick="handleUp('${player.id}')">Up</button>
    <button class="player__button player__button--right"  onclick="handleRight('${player.id}')">Right</button>
    <button class="player__button player__button--left"  onclick="handleLeft('${player.id}')">Left</button>
    <button class="player__button player__button--down"  onclick="handleDown('${player.id}')">Down</button>
    </div>`;
    return html;

}

function renderPlayers(players: Player[], root: HTMLElement | null) {
    try {

        if (!root) {
            throw new Error('Root element not found');
        }

        let html = '';
        players.forEach(player => {
            html += renderPlayer(player, root);
        });
        root.innerHTML = html;
    } catch (error) {
        console.error(error)
    }
}

renderPlayers(players, root);

function handleUp(id: string) {
    try {
        const player = players.find(player => player.id === id);
        if (!player) {
            throw new Error('Player not found');
        }
        player.moveUp();
        renderPlayers(players, root);
    } catch (error) {
        console.error(error)

    }
}

function handleRight(id: string) {
    try {
        const player = players.find(player => player.id === id);
        if (!player) {
            throw new Error('Player not found');
        }
        if(player.direction===undefined){
            player.setDirection(true);
            player.style="background-image:url(${player.img}); top:${player.y}%; left:${player.x}%"
        }
        if(player.direction===false){
            player.setDirection(true);

            player.setStyle("background-image:url(${player.img}); top:${player.y}%; left:${player.x}%");
        }
        player.moveRight();
        renderPlayers(players, root);
    } catch (error) {
        console.error(error)

    }
}

    function handleLeft(id: string) {
        try {
            const player = players.find(player => player.id === id);
            if (!player) {
                throw new Error('Player not found');
            }
            if(player.direction===undefined){
                player.setDirection(false);
                player.setStyle("background-image:url(${player.img}); top:${player.y}%; left:${player.x}%; transform: scaleX(-1);");
            }
            if(player.direction===true){

                player.setDirection(false);
                player.setStyle("background-image:url(${player.img}); top:${player.y}%; left:${player.x}%; transform: scaleX(-1);");
            }
            player.moveLeft();
            renderPlayers(players, root);
        } catch (error) {
            console.error(error)
    
        }
}


function handleDown(id: string) {
    try {
        const player = players.find(player => player.id === id);
        if (!player) {
            throw new Error('Player not found');
        }
        player.moveDown();
        renderPlayers(players, root);
    } catch (error) {
        console.error(error)

    }
}
