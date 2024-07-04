class vehicle{
    plate: number;
    wheels: number;
    color: string;
    brand: string;

    constructor ( wheels:number, color: string, brand: string){
        this.plate=Math.random();
        this.wheels=wheels;
        this.color=color;
        this.brand=brand;


    }
}
const mazda= new vehicle(4,"white","mazda");

console.log(mazda)