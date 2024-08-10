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
  length: number = 50;
  speed: number = 0.03;
  isMoving: boolean = false;
  direction: "forward" | "backward" | "notMoving" = "notMoving";
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
        this.angle += this.speed;
      } else if (this.rotate === "right" && this.angle > -0.82) {
        this.angle -= this.speed;
      } else if (this.angle > 0.8) {
        this.rotate = "right";
        let swinging = new Audio("./src/sound/swinging.mp3");
        // swinging.autoplay = true;
        // swinging.muted = false
    swinging.play();
      } else if (this.angle < -0.8) {
        this.rotate = "left";
        let swinging = new Audio("./src/sound/swinging.mp3");
        // swinging.autoplay = true;
        // swinging.muted = false
    swinging.play();
      }
    } else {
      if (this.direction === "forward") {
        this.length += this.speed;
      } else {
        this.length -= this.speed;
      }
    }
  }

  launch() {
    this.isMoving = true;
  }

  retract() {
    this.isMoving = false;
    this.length = 50;
    this.direction = "forward";
  }

  caughtObject(obj: Fish): boolean {
    // проверка на захват объекта
    const hookX = this.x + Math.cos((this.angle * Math.PI) / 180) * this.length;
    const hookY = this.y + Math.sin((this.angle * Math.PI) / 180) * this.length;
    return (
      hookX > obj.x &&
      hookX < obj.x + obj.type.width &&
      hookY > obj.y &&
      hookY < obj.y + obj.type.height
    );
  }
}
