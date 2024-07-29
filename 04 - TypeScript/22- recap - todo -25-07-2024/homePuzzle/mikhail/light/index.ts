class Bulb{
    id:string;
    color:string;
    x:number;
    y:number;
    img:string;

    constructor(color:string){
        this.id=crypto.randomUUID();
        this.color=color;
        this.x=Math.floor(Math.random() * 1001);
        this.y=Math.floor(Math.random() * 1001);
        this.img=".light-bulb.jpg"
    }
}
const element = document.querySelector('#room') as HTMLDivElement;
function renderBulb(bulb:Bulb,element:HTMLDivElement){
    const html=`<div class="bulb" style='top:${bulb.y};left:${bulb.x};backgeoung-color:"${bulb.color}"'>
    <img src="${bulb.img}">
    </div>`

    element.innerHTML=html;
}

function addBulb(){
    lights.push(new Bulb("blue"));
}
const lights: Bulb[] = [];
function renderlights(lights:Bulb[]){
    
}