import { Weapon } from "../Model/WeaponModel"
import { renderHomeScreen } from "../View/homescreen"
export function handleStartGame(weapon:Weapon,root:HTMLElement){
  
  
   renderHomeScreen(weapon,root);
    
}