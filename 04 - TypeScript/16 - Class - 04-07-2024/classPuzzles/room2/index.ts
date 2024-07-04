class Player {
    name:string
    image:string
    yearOfBirth:number
    x:number
    y:number

    constructor(name:string,image:string,yearOfBirth:number,x:number,y:number){
        this.name = name;
        this.image = image;
        this.yearOfBirth = yearOfBirth;
        this.x = x;
        this.y = y;
    }

    moveToRight(){
        this.x+=15;
        console.log(this.x);
    }
}

const messi = new Player("messi","./images/messi.jpg",1987,25,50);
const ronaldo = new Player("ronaldo","./images/ronaldo.jpg",1985,42,65);
const thirdGuy = new Player("IDK","./images/thirdguy.jpg",2000,52,10);

const mainDiv = document.querySelector("#field") as HTMLDivElement;
console.dir(mainDiv);
function playersDiv(player:Player):string | undefined{
    try {
        return `<div class='players' style="left:${player.x}%;top:${player.y}%" onclick='${player.moveToRight()}'><img src='${player.image}' alt='${player.name}'></div>`;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}
const players:Player[]= [messi,ronaldo,thirdGuy];
function writePlayersToDOM(player:Player[],element:HTMLDivElement){
    try {
        if (!element) throw new Error("Element not found");
        if (!player) throw new Error("No player found");
        let html:string = ``;
        player.forEach(player => {
            const htmlplayer = playersDiv(player);
           if(htmlplayer) html += htmlplayer;
        });

        element.innerHTML = html;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

writePlayersToDOM(players,mainDiv);
function updatePos(player:Player){
    
}