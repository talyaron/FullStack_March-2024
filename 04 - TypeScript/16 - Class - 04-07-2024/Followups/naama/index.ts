class dog {
    name:string
    owner:string
    age:number
    id:number
    breed:string
    nuked:boolean
    constructor(name:string,owner:string,age:number,breed:string,nuked:boolean) {
        this.name = name;
        this.owner = owner;
        this.age = age;
        this.id = Math.random();
        this.breed = breed;
        this.nuked = nuked;
    }
}

const sky = new dog("sky","mom",13,"mix",true);
console.log(sky);