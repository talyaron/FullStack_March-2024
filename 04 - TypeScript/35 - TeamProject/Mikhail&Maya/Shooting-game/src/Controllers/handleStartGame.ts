import { Weapon } from "../Model/WeaponModel"
import { Target } from "../Model/TargetModel";
import { renderHomeScreen } from "../View/homescreen";

export function handleStartGame(weapon: Weapon, root: HTMLElement) {

   const targets: Target[] = [
      new Target('MohamadD.jpg', { x: 0, y: 0 }, root),
      new Target('MohamadD.jpg', { x: 0, y: 0 }, root),
      new Target('MohamadD.jpg', { x: 0, y: 0 }, root),
  ];

   renderHomeScreen(weapon, root, targets);
    
}