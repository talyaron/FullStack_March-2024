export class Target {
    image: string;
    position: { x: number; y: number };
    id: string;
    direction: boolean;
    isHit: boolean;
    gameContainer: HTMLElement;


    constructor(image: string, position: { x: number; y: number },gameContainer: HTMLElement) {
        this.image = image;
        this.position = position;
        this.id = crypto.randomUUID();
        this.direction = true;
        this.isHit = false;
        this.gameContainer = gameContainer;

    
    }
    move() {
        if (this.direction) {
            this.position.x += 5; // Move right
            if (this.position.x >= 800) this.direction = false; // Reverse direction
        } else {
            this.position.x -= 5; // Move left
            if (this.position.x <= 0) this.direction = true; // Reverse direction
        }
    }
        hit() {
            this.isHit = true;
        }
    }
    // setposition(position: { x: number; y: number }){
    //     this.position = position;
    // }


