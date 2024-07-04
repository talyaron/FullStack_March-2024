interface Pet {
    name: string;
    photo: string;
    description: string;
    type: string;
    price: number;
}

const Lily: Pet = {
    name:'Lily',
    photo:"https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J",
    type:"Dog",
    description:'',
    price: 100,
}
const Billy: Pet = {
    name:'Billy',
    photo:"https://images.theconversation.com/files/560110/original/file-20231117-29-fv986f.jpg?ixlib=rb-4.1.0&rect=0%2C15%2C5048%2C3340&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    description:'', 
    type: "Cat",
    price: 80,
}
const Chika: Pet = {
    name:'Chika',
    photo:"https://www.pond-planet.co.uk/blog/wp-content/uploads/2023/12/Untitled-91.png",
    description:'', 
    type: "Fish",
    price: 10,
}
const Louis: Pet = {
    name:'Louis',
    photo:"https://cats.com/wp-content/uploads/2024/02/96E4B546-9BE7-4977-9A29-05F2D9BB47BC_1_102_a-e1711411797978.jpeg",
    description:'', 
    type: "Cat",
    price: 110,
}
const Perry: Pet = {
    name:'Perry',
    photo:"https://c02.purpledshub.com/uploads/sites/62/2023/09/Weirdest-fish-1.jpg?w=1029&webp=1",
    description:'', 
    type: "Fish",
    price: 5,
}
const Bean: Pet = {
    name:'Bean',
    photo:"https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg",
    description:'', 
    type: "Dog",
    price: 50,
}
const George: Pet = {
    name:'George',
    photo:"https://www.wondercide.com/cdn/shop/articles/Upside_down_gray_cat.png?v=1685551065&width=1100",
    description:'', 
    type: "Cat",
    price: 120,
}
const Dylen: Pet = {
    name:'Dylen',
    photo:"https://www.thesprucepets.com/thmb/y4YEErOurgco9QQO-zJ6Ld1yVkQ=/3000x0/filters:no_upscale():strip_icc()/english-dog-breeds-4788340-hero-14a64cf053ca40f78e5bd078b052d97f.jpg",
    description:'', 
    type: "Dog",
    price: 200,
}
const Shoko: Pet = {
    name:'Shoko',
    photo:"https://www.aqueon.com/-/media/project/oneweb/aqueon/us/blog/ways-to-know-your-fish-are-happy/fish-are-happy-and-healthy-1.png",
    description:'', 
    type: "Fish",
    price: 25,
}

const pets:Pet[]= [Lily,Billy,Chika,Louis,Perry,Bean,George,Dylen,Shoko];
pets.push(Lily);
pets.push(Billy);
pets.push(Chika);
pets.push(Louis);
pets.push(Perry);
pets.push(Bean);
pets.push(George);
pets.push(Dylen);
pets.push(Shoko);
 console.log(pets)


const containerDiv = document.querySelector("#container") as HTMLDivElement;
