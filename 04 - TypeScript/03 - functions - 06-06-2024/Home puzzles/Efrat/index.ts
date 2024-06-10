// Create a function introduce that takes a name and an optional age parameter as arguments.
// The function should return a string like: "Hi, I'm [name], and I'm [age] years old."
// If the age parameter is not provided, the function should return a string like: "Hi, I'm [name]." and give an error message in the console that says "Age not provided."

function displayNameAge(firstName: string, age?: number): any {
  try {
    if (age === undefined) {
      console.log("Hi, I'm " + firstName);
      throw new Error("Age not provided");
    }
    return console.log(
      "Hi, I'm " + firstName + ", and I'm " + age + " years old."
    );
  } catch (error) {
    return console.log(error);
  }
}

displayNameAge("Steve");
displayNameAge("Steve", 10);

// Create a function combineWords that takes two strings as parameters and returns a new string with the two words combined with a space in between.
// Example: combineWords("hello", "world") should return "hello world".

function combineWords(firstWord?: string, secondWord?: string): any {
  try {
    if (firstWord === undefined && secondWord === undefined) {
      throw new Error("Words not provided");
    }
    return console.log(firstWord  + " " + secondWord);
  } catch (error) {
    return console.log(error);
  }
}

combineWords("test","one");
combineWords();
// combineWords("test");

// Create a function capitalize that takes a string as a parameter and returns a new string with the first letter capitalized.
// Example: capitalize("hello") should return "Hello".

function capitalize(word:string):any{
  try {
    return console.log(word.charAt(0).toLocaleUpperCase() + word.slice(1));
  } catch (error) {
    
  }
}

capitalize("teste55445464556");
