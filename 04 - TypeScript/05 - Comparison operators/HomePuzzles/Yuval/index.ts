// Bus ticket price calculation
function calculateBusTicketPrice(age: number, ticketPrice: number): number|undefined {
    try {
        if (age < 18) {
          return ticketPrice * 0.5; 
        } else if (age >= 18 && age <= 67) {
          return ticketPrice; 
        } else if (age > 67){
          return 0;
        }
        else{
            throw new Error('Input is not a number')
        }
        
    } catch (error) {
        console.error(error)
        return undefined
    }
  }
  
  // Sum of odd numbers
  function sumOfOddNumbers(n: number): number|undefined {
    let sum = 0;
    try {
        if (typeof n !== "number") {
            throw new Error('Input is not a number')
        }
        if (n < 0) {
            throw new Error('Input can not be negative')
        }
        for (let i = 1; i <= n; i += 2) {
          sum += i;
        }
        return sum;
        
    } catch (error) {
        console.error(error)
        return undefined;
    }
  }
  
  // FizzBuzz function

  function fizzBuzz(n: number): void {
    try {
        if (typeof n !== 'number'){
            throw new Error('Input is not a number')
        }
        for (let i = 1; i <= n; i++) {
          if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
          } else if (i % 3 === 0) {
            console.log("Fizz");
          } else if (i % 5 === 0) {
            console.log("Buzz");
          } else {
            console.log(i);
          }
        
        }
    } catch (error) {
        console.error(error)
        return undefined;
    }
  }
  
// Prime number checker

  function isPrime(num: number): boolean | undefined{
    try {
        if (typeof num !== 'number'){
            throw new Error('Input is not a number')
        }
        if (num <= 1) return false; // 1 or less is not prime
        if (num <= 3) return true; // 2 and 3 are prime
      
        for (let i = 2; i * i <= num; i++) {
          if (num % i === 0) return false;
        }
      
        return true;
        
    } catch (error) {
        console.error(error)
        return undefined;
    }
  }
  
function sorting(num1:number,num2:number,num3:number,num4:number){
    let array:number[] = [num1,num2,num3,num4];
    let sol:number[]=[];
    for(let i = 0; i<4; i++){
        for(let j=0;j<4;j++){
            if(array[j]<array[i]){
                if( i=0){
                    sol[i]=array[j];
                    break;    
                }
                if(array[j]>sol[i-1]){
                sol[i]=array[j]
                }
            }
        }
    }
}
let str1:number[]=[1,2,3]
console.log(str1[-1])