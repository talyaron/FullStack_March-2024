import { size } from "../view/size";
import { Fish, fishList } from "./objectModel";
import { Player } from "./playerModel";

export class GameModel {
    player: Player;
    objects: Fish[] = fishList;
    score: number = 0;
    timer: number = 60; // время на уровень (в секундах)
    minScore: number = 100; // минимальное количество очков для прохождения уровня
    levelCompleted: boolean = false;

    constructor() {
      this.player = new Player('user',-(size.size/6),size.size/2);
      // this.initLevelObjects();
    }

    initLevelObjects() {
        fishList.forEach((type) => {
            this.objects.push(type);
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
            const fish = document.querySelector(`#${obj.id}`) as HTMLElement;
            const grab = document.querySelector('#grab') as HTMLElement;
            grab.appendChild(fish);
            this.player.hook.direction = 'backward';
            console.log('length',this.player.hook.length);
            this.score += obj.value;
            fishList.splice(index, 1); // удаляем пойманный объект
          }
        });
      }

      if (this.player.hook.length <= 5) {
        this.player.hook.retract();
        const grab = document.querySelector('#grab') as HTMLElement;
        if (grab.childNodes.length > 0) {
          grab.innerHTML = '';
          this.player.hook.soundCatch.play();
        }
      }
    }

    checkLevelCompletion() {
      if (this.score >= this.minScore) {
        this.levelCompleted = true;
        this.player.hook.stopSound(this.player.hook.backwardSound);
        alert("Level completed!");
      } else {
        alert("The time is up! The level has not been completed.");
        console.log("The time is up! The level has not been completed.");
      }
    }
  }
