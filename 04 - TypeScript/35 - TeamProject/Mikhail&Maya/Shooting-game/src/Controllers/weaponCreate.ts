import { Weapon } from "../Model/WeaponModel";
import { renderHomeScreen } from "../View/homescreen";
import { handleStartGame } from "./handleStartGame";
export function weaponCreate(weaponId:string){
    switch(weaponId){
        case 'pistolImage':
            const weapon=new Weapon('/src/images/weapons/pistolSelect.png','/src/audio/pew.m4a',weaponId);
            break;
        
      }
    handleStartGame(weapon);
}