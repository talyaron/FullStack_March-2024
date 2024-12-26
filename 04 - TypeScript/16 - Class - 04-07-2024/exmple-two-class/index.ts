class Pet{
    id:string;
    name:string;
    type:string;

    constructor( name:string, type:string){
        this.id = crypto.randomUUID();
        this.name = name;
        this.type = type;
    }

    makeSound(){
        if(this.type === 'dog'){
            console.log('bark');
        }else if(this.type === 'parot'){
            console.log('squak');
        }
    }
}

const dogy = new Pet('dogy', 'dog');
const pitizi = new Pet('pitizi', 'parot');

dogy.makeSound();
pitizi.makeSound();

class Owner{
    id:string;
    name:string;
    pets:Pet[];

    constructor(name:string, pets:Pet[]){
        this.id = crypto.randomUUID();
        this.name = name;
        this.pets = pets;
    }
}

const nama = new Owner('nama', [dogy, pitizi]);
const tal = new Owner('tal', [new Pet('Poff', 'dog')]);



const owners:Owner[] = [nama, tal];

console.log(owners)

//save to local storage

localStorage.setItem('owners', JSON.stringify(owners));

//get from local storage

const ownersFromLocalStorage = JSON.parse(localStorage.getItem('owners'));

console.log(ownersFromLocalStorage)

//convert to class from object

const newOwners = ownersFromLocalStorage.map((owner:Owner) => new Owner(owner.name, owner.pets.map((pet:Pet) => new Pet(pet.name, pet.type)));



newOwners.forEach((owner:Owner) => {
    console.log(owner.name);
    owner.pets.forEach((pet:Pet) => {
       pet.makeSound();
    })
})