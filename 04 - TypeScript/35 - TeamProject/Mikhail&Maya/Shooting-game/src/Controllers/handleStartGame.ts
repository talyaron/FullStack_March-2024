import { Weapon } from "../Model/WeaponModel"
import { Target } from "../Model/TargetModel";
import { renderTarget } from "../View/targetRender";
import { renderHomeScreen } from "../View/homescreen"

export function handleStartGame(weapon: Weapon, container: HTMLElement, targets: Target[], root: HTMLElement) {
   renderHomeScreen(weapon, container, targets, root);
    
}