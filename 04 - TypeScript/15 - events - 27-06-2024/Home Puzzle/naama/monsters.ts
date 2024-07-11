interface monster{
    name: string;
    level: (min:number,max:number) => number;
    image:string;
    hp:number;
    attack:number;
    expDrop: (min:number,max:number) => number;
}

import { randomNum } from './functions';

const bat:monster = {
    name: 'Bat',
    level: randomNum,
    image: "./images/bat.png",
    hp: 15,
    attack: 4,
    expDrop: randomNum
}

const orc:monster ={
    name: 'Orc',
    level: randomNum,
    image: "./images/Orc.png",
    hp: 30,
    attack: 8,
    expDrop: randomNum
}

const mimic:monster={
    name: 'Mimic',
    level: randomNum,
    image: "./images/mimic.png",
    hp: 20,
    attack: 7,
    expDrop: randomNum
}

const dragon:monster={
    name: 'Dragon',
    level: randomNum,
    image: "./images/dragon.png",
    hp: 50,
    attack: 20,
    expDrop: randomNum
}

export const monsters:monster[] = [bat,orc,mimic,dragon];