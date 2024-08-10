export class Fish {
    x: number;
    y: number;
    type: Type;
    direction: "left" | "right";
    constructor(type: Type) {
        this.x = Math.floor(Math.random() * 100);
        this.y = Math.floor(Math.random() * 100);
        this.type = type;
        this.direction = Math.random() > 0.5 ? "right" : "left";
    }

    update() {
        if (this.direction === "right" && this.x < 100) {
            this.x += this.type.speed;
        } else if (this.direction === "left" && this.x > 0) {
            this.x -= this.type.speed;
        } else if (this.x <= 10) {
            this.direction = "right";
        } else if (this.x >= 90) {
            this.direction = "left";
        }
    }
}

export class Type {
    width: number;
    height: number;
    img: string;
    speed: number = 0.2;
    constructor(width: number, height: number, img: string) {
        this.width = width;
        this.height = height;
        this.img = img;
    }
}

export const fishList: Fish[] = [];

export const typeList: Type[] = [];
typeList.push(new Type(100, 100, "./src/assets/fish.png"));
typeList.push(new Type(100, 100, "./src/assets/fish.png"));
typeList.push(new Type(100, 100, "./src/assets/fish.png"));

for (let i = 0; i < typeList.length; i++) {
    fishList.push(new Fish(typeList[i]));
}