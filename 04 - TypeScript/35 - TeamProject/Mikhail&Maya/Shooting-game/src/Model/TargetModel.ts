export class Target {
    image: string;
    position: { x: number; y: number };
    id: string;
    isHit: boolean;
    gameContainer: HTMLElement;    

    


    constructor(image: string, position: { x: number; y: number }, gameContainer: HTMLElement) {
        this.image = image;
        this.position = position;
        this.id = crypto.randomUUID();
        this.isHit = false;
        this.gameContainer = gameContainer;


    
    }
   
    hit() {
        if (!this.isHit) {  
            this.isHit = true;
            console.log(`Target ${this.id} hit!`);
        }
    }
}
 
  


