
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

displayNameAge("shemesh");
displayNameAge("shemesh", 10);

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

combineWords("one","two");
combineWords();

function capitalize(word:string):any{
  try {
    return console.log(word.charAt(0).toLocaleUpperCase() + word.slice(1));
  } catch (error) {
    
  }
}

capitalize("one");
