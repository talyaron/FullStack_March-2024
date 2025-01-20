//1: Array Spread and Destructuring
// Given these arrays of superhero teams:
// TODO:
// 1. Create a new array 'allHeroes' that combines both teams using spread operator
// 2. Destructure the first two Avengers into variables 'leader' and 'deputy'
// 3. Get all remaining heroes using rest parameter

const avengers = ['Iron Man', 'Captain America', 'Thor'];
const guardians = ['Star-Lord', 'Gamora', 'Rocket'];

const allHeroes = [...avengers, ...guardians];
const [leader, deputy, ...rest] = avengers; 
const [, , ...remainingHeroes] = avengers;

console.log(allHeroes);
console.log(leader);
console.log(deputy);    
console.log(rest);
console.log('Remaining Avengers:', remainingHeroes);

// Challenge 2: Object Spread and Destructuring
// Given these hero profile objects:

//const ironMan = {
    //name: 'Tony Stark',
   // power: 'Genius intellect',
   // suit: 'Mark 85',
  //  company: 'Stark Industries'
//};

//const extraInfo = {
   // location: 'New York',
   // suit: 'Mark 86',
  //  partner: 'War Machine'
//};

// TODO:
// 1. Create a new object 'completeProfile' that combines both objects using spread
//    (notice how suit property conflicts are handled)
// 2. Destructure 'name' and 'power', and collect remaining properties in 'other'
// 3. Destructure 'location' with a default value of 'Unknown'

const ironMan = {
    name: 'Tony Stark',
    power: 'Genius intellect',
    suit: 'Mark 85',
    company: 'Stark Industries'
};

const extraInfo = {
    location: 'New York',
    suit: 'Mark 86',
    partner: 'War Machine'
};

const completeProfile = { ...ironMan, ...extraInfo };
const { name, power, ...other } = ironMan;
const { location = 'Unknown' } = extraInfo;

console.log('Complete Profile:', completeProfile);
console.log('Name:', name);
console.log('Power:', power);
console.log('Other Properties:', other);
console.log('Location:', location);
