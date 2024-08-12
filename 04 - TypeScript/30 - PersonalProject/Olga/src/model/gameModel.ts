import { Fish, typeList } from "./objectModel";
import { Player } from "./playerModel";

export class GameModel {
    player: Player;
    objects: Fish[] = [];
    score: number = 0;
    timer: number = 60; // время на уровень (в секундах)
    minScore: number = 100; // минимальное количество очков для прохождения уровня
    levelCompleted: boolean = false;
  
    constructor() {
      this.player = new Player('user',25,92);
      this.initLevelObjects();
    }
  
    initLevelObjects() {
        typeList.forEach((type) => {
            this.objects.push(new Fish(type));
        })
    }
  
    update() {
      if (this.timer > 0) {
        this.timer -= 1 / 60; // уменьшаем таймер каждую секунду
      } else {
        this.checkLevelCompletion();
      }
  
      this.player.hook.update();
  
      if (this.player.hook.isMoving) {
        this.objects.forEach((obj, index) => {
          if (this.player.hook.caughtObject(obj)) {
            this.player.hook.direction = 'backward';
            this.score += obj.value;
            this.objects.splice(index, 1); // удаляем пойманный объект
          }
        });
      }
  
      if (this.player.hook.length <= 5) {
        this.player.hook.retract();
      }
    }
  
    checkLevelCompletion() {
      if (this.score >= this.minScore) {
        this.levelCompleted = true;
        alert("Level completed!");
      } else {
        alert("The time is up! The level has not been completed.");
      }
    }
  }
  