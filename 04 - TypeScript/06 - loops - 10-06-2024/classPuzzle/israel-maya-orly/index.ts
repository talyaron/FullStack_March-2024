function factorialEven(num: number): number | undefined {
    try {
        let count = 1;
        for (let i = 2; i <= num; i+=2) {
            count *= i;
        }
        return count;
        
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

console.log(factorialEven(5));



function calculateBusTicketPrice(age:number):number | undefined{
    try {
        let price = 20;
        if(age<18){
            return price/2;
        } else if (age>=18 && age < 67){
            return price;
        } else {
           return price = 0;
        }
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

console.log(calculateBusTicketPrice(18));


