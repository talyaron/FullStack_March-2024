

function Calculatebusticketprice(age:number):number | undefined {
    try{
        let price = 40;
        if(age<18){
            return price/2;
        } else if (age>=18 && age < 67){
            return price;
        } else if (age > 67){
            return price = 0;
        }
    }  catch (error) {
        console.error(error);
        return undefined;
    }
    }
    
    console.log(Calculatebusticketprice(16));
    console.log(Calculatebusticketprice(36));
    console.log(Calculatebusticketprice(76));
    
    
    function sumofoddnumbers (num: number): number | undefined {
        try {
        let sum = 0
            for (let n = 1; n <= 15; n= n + 2) { 
                if( n % 2 !== 0)
                    sum = sum + n;
            }
        } catch (error) {
            console.error(error)
            return undefined;
    }
    }
    
    console.log(sumofoddnumbers,(15));
    
    function fizzbuzz(num: number): string | number {
    
        if (num % 3 === 0) return 'Fizz';
        if (num % 5 === 0) return 'Buzz';
        if (num % 15 === 0) return 'FizzBuzz';
        return num;
      }
      
      for (let i: number = 1; i <= 30; i++) 
        
        console.log(fizzbuzz(i));
    
    
        function isPrime(num: number): boolean {
            if (num <= 1) return false; 
            if (num <= 3) return true; 
        
            if (num % 2 === 0 || num % 3 === 0) return false;
    
            let i = 5;
            while (i * i <= num) {
                if (num % i === 0 || num % (i + 2) === 0) return false;
                i += 6;
            }
            return true;
        }
    
        const numberToCheck = 31;
    if (isPrime(numberToCheck)) {
        console.log(`${numberToCheck} is a prime number.`);
    } else {
        console.log(`${numberToCheck} is not a prime number.`);
    }
    
    