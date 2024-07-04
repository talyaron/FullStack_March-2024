class Car {
    manufacturer: string
    model: string
    year: number
    imageUrl: string
    color: string
    price: number

    constructor(manufacturer: string, model: string, year: number, imageUrl: string, color: string, price: number) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.imageUrl = imageUrl;
        this.color = color;
        this.price = price;
        this
    }
}

const Acura = new Car("Acura", "MDX", 2022, "https://www.google.com/imgres?q=acura%20mdx%202022&imgurl=https%3A%2F%2Fwww.acura.com%2F-%2Fmedia%2FAcura-Platform%2FVehicle-Pages%2FMDX%2F2022%2Fspecs-page%2Fjelly%2FMDX-2022-Standard-Pricing-and-Specs.png&imgrefurl=https%3A%2F%2Fwww.acura.com%2Fsuvs%2F2022%2Fmdx%2Fpricing-and-specs&docid=LWw-OUTdKWN_6M&tbnid=rkU095lESsFINM&vet=12ahUKEwjTqP-p1Y2HAxUWoI4IHb36ASwQM3oECBwQAA..i&w=640&h=307&hcb=2&ved=2ahUKEwjTqP-p1Y2HAxUWoI4IHb36ASwQM3oECBwQAA", "silver", 40000	);

console.log(Acura);