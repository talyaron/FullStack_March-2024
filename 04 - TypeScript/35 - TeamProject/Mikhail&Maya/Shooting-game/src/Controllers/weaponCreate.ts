import { Weapon } from "../Model/WeaponModel";
import { handleStartGame } from "./handleStartGame";
export function weaponCreate(weaponId:string,root:HTMLElement){
    let weapon: Weapon | null = null;
    switch(weaponId){
        case 'pistolImage':
            weapon=new Weapon('/src/images/weapons/pistolSelect.png','/src/audio/pew.m4a',weaponId);
            break;
        default: console.error("didnt choose weapon");
      }
      if(weapon)
         handleStartGame(weapon,root);
}