export class Weapon{
   id: string;
   image: string;
   shootingAudio: string; 
   
   constructor(image:string, shootingAudio:string){
    this.id = crypto.randomUUID(),
    this.image = image,
    this.shootingAudio = shootingAudio
   }

}