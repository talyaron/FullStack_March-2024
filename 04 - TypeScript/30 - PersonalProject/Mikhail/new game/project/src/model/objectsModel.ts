class Box{
    x:number;
    y:number;
    color:String;
    index:number;
    img:string;
    width:number;


    constructor(x:number,y:number,color:string,index:number,width:number){
        this.x=x;
        this.y=y;
        this.color=color;
        this.index=index;
        this.width=width;
        this.img='';
    }
    changePosition(x:number,y:number){
        this.x=x;
        this.y=y;
    }
}