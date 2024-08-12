import { Fish } from "./objectModel";

export class Player {
  id: string;
  name: string;
  x: number;
  y: number;
  score: number = 0;
  level: number = 0;
  hook: Hook;
  constructor(name: string, x: number, y: number) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.id = `id-${crypto.randomUUID()}`;
    this.hook = new Hook(this.x, this.y);
  }
}

export const players: Player[] = [];

export class Hook {
  x: number;
  y: number;
  angle: number = 0;
  length: number = 5;
  speed: number = 2;
  rotationSpeed: number = 0.003;
  isMoving: boolean = false;
  direction: "forward" | "backward" = "forward";
  rotate: "left" | "right" = "left";
  hookedObject: Fish | null = null;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  playSound() {
    let swinging = new Audio("./src/sound/swinging.mp3");
    swinging.play();
  }

  update() {
    if (!this.isMoving) {
      if (this.rotate === "left" && this.angle < 0.82) {
        this.angle += this.rotationSpeed;
      } else if (this.rotate === "right" && this.angle > -0.82) {
        this.angle -= this.rotationSpeed;
      } else if (this.angle > 0.8) {
        this.rotate = "right";
      } else if (this.angle < -0.8) {
        this.rotate = "left";
      }
    } else {
      if (this.direction === "forward") {
        this.length += this.speed;
      } else if (this.direction === "backward") {
        this.length -= this.speed;
      }

      // const hookX = this.x + Math.cos(this.angle) * this.length;
      // const hookY = this.y + Math.sin(this.angle) * this.length;

      // console.log(this.isOutOfBounds());

      if (this.isOutOfBounds()) {
        this.direction = "backward";
      }
    }
    console.log(this.isMoving)
  }

  isOutOfBounds(): boolean {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const hookElement = document.querySelector("#hook");
    const hookRect = hookElement!.getBoundingClientRect();

    const hookXabs = hookRect.left;
    const hookYabs = hookRect.top;

    console.log(hookXabs, hookYabs);

    if (hookXabs < 0 || hookXabs > screenWidth - hookRect.width || hookYabs < 0 || hookYabs > screenHeight - hookRect.height) {
      return true;
    }

    return false;
  }

  launch() {
    this.isMoving = true;
    // this.direction = 'forward';
    // this.length = 0;
  }

  retract() {
    this.isMoving = false;
    this.length = 5;
    this.direction = "forward";
  }

  caughtObject(obj: Fish): boolean {
    
    const fish = document.querySelector(`#${obj.id}`) as HTMLElement;
    console.log(fish);
    // const fishRect = fish!.getBoundingClientRect();
    // const hookElement = document.querySelector("#hook");
    // const hookRect = hookElement!.getBoundingClientRect();

    // проверка на захват объекта
    // const hookX = this.x + Math.cos((this.angle * Math.PI) / 180) * this.length;
    // const hookY = this.y + Math.sin((this.angle * Math.PI) / 180) * this.length;

    // const fishX = fishRect.left + fishRect.width / 2;
    // const fishY = fishRect.top + fishRect.height / 2;
    // const hookX = hookRect.left + hookRect.width / 2;
    // const hookY = hookRect.top + hookRect.height / 2;

    // const fishX = fishRect.left;
    // const fishY = fishRect.top;
    // const hookX = hookRect.left;
    // const hookY = hookRect.top;
    // return (
    //   hookX > fishX &&
    //   hookX < fishX + obj.type.width &&
    //   hookY > fishY &&
    //   hookY < fishY + obj.type.height
    // );
  }
}
