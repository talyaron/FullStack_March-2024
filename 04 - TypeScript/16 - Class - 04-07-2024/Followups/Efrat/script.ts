class Car{
    brand:string
    color:string
    year:number

    constructor(brand:string,color:string,year:number){
        this.brand = brand;
        this.color = color;
        this.year = year;
    }
}

const toyota = new Car("toyota","Pink",2023);
console.log(toyota);