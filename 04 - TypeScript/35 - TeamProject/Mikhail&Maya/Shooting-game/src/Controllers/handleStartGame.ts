import { Weapon } from "../Model/WeaponModel"
export function handleStartGame(weaponId:string){
  switch(weaponId){

    case 'pistolImage':
        const weapon=new Weapon('/src/images/weapons/pistolSelect.png','/src/audio/pew.m4a',weaponId);
        break;
  }
  
  
    
}