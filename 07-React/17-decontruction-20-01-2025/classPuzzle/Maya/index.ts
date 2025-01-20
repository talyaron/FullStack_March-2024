console.log("hello world);");

// Challenge 1:
const avengersTeam = ['Iron Man', 'Captain America', 'Thor'];
const guardiansTeam = ['Star-Lord', 'Gamora', 'Rocket'];
// 1.
const allHeroes = [...avengersTeam, ...guardiansTeam];

// 2. Destructure
const [leader, deputy, ...remainingAvengers] = avengersTeam;

// 3.
const [firstGuardian, secondGuardian, ...remainingGuardians] = guardiansTeam;

console.log('All Heroes:', allHeroes);
console.log('Leader:', leader);
console.log('Deputy:', deputy);
console.log('Remaining Avengers:', remainingAvengers);
console.log('Remaining Guardians:', remainingGuardians);


// Challenge 2: Object Spread and Destructuring
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

// 1. Combine objects using object spread
const completeProfile = { ...ironMan, ...extraInfo };

// 2. Destructure and reassign properties
const { name, power, ...other } = completeProfile;

console.log('Name:', name);
console.log('Power:', power);
console.log('Other Properties:', other);

//3 Destructure
const { location = 'Unknown' } = extraInfo;

// Challenge 3: Combining Both

function addAllies(hero, allies) {
    return {
        ...hero,
        allies: [...(hero.allies || []), ...allies]
    };
}

const thor = {
    name: 'Thor',
    power: 'Thunder',
    team: ['Valkyrie']
};

const updatedThor = addAllies(thor, ['Loki', 'Heimdall']);
console.log('Updated Thor:', updatedThor);