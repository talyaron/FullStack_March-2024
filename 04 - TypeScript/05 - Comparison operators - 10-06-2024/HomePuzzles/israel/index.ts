



function calculateBusTicketPrice(age: number): number | undefined {
    try {
        let price = 20;
        if (age < 18) {
            return price / 2;
        } else if (age >= 18 && age < 67) {
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


function factoriasumOfOddNumberslEven(num: number): number | undefined {
    try {
        let count = 0;
        for (let i = 1; i <= num; i += 2) {
            count += i;
            console.log(i);

        }
        return count;

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

console.log(factoriasumOfOddNumberslEven(100));


function fizzBuzz(num: number): number | undefined {
    try {
        for (let i = 1; i <= num; i++) {

            if (i % 3 === 0 && i % 5 > 0) {
                console.log(i + "fizz");

            } else if (i % 5 === 0 && i % 3 > 0) {
                console.log(i + "buzz");

            } else if (i % 3 === 0 && i % 5 === 0) {
                console.log(i + "fizzBuzz");

            } else {
                console.log(i);

            }

        }
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

console.log(fizzBuzz(150));



function isPrime(num: number): boolean {
    try {
        for (let i = num - 1; i > 0; i--) {
            if (num % i === 0) {
                return false
            

        }
    } catch (error) {

    }
}



