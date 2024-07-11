// Create a function introduce that takes a name and an optional age parameter as arguments.
// The function should return a string like: "Hi, I'm [name], and I'm [age] years old."
// If the age parameter is not provided, the function should return a string like: "Hi, I'm [name]." and give an error message in the console that says "Age not provided."

function introduce(name: string, age?: number): string {
    try {
        if (age === undefined) {
            throw new Error("Age not provided.")
        }
        return `Hi, I'm ${name}, and I'm ${age} years old.`;
    } catch(error) {
        console.error(error);
        return `Hi, I'm ${name}`
    }
}

console.log(introduce("Anna"))
console.log(introduce("Olga", 36))


// Create a function combineWords that takes two strings as parameters and returns a new string with the two words combined with a space in between.
// Example: combineWords("hello", "world") should return "hello world".

function combineWords(word1: string, word2: string): string {
    return `${word1} ${word2}`
};

console.log(combineWords("hello", "word"));


// arrow function
const combineWords2 = (word3: string, word4: string) => `${word3} ${word4}`
console.log(combineWords2("hello", "word"));


// Create a function capitalize that takes a string as a parameter and returns a new string with the first letter capitalized.
// Example: capitalize("hello") should return "Hello".

const capitalize = (word: string) => {
    let result = word[0].toUpperCase() + word.slice(1);
    return result
};
console.log(capitalize("hello world"))