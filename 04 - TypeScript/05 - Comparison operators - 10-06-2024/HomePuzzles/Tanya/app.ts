document.addEventListener('DOMContentLoaded', () => {
    BusFareCalculator();
    OddNumberSumCalculator();
    FizzBuzzCalculator();
    PrimeChecker();
    BackgroundChanger();
});

                    /* Bus Fare Calculator */

function BusFareCalculator() {
    const form = document.getElementById('busFare') as HTMLFormElement;
    const ticketInput = document.getElementById('ticket') as HTMLInputElement;
    const birthdayInput = document.getElementById('birthday') as HTMLInputElement;
    const resultOutput = document.getElementById('result') as HTMLDivElement;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        try {
            const ticketPrice = parseFloat(ticketInput.value);
            const birthday = new Date(birthdayInput.value);
            const age = calculateAge(birthday);
            if (isNaN(ticketPrice) || !birthdayInput.value) {
                throw new Error('You broke it!');
            }
            const finalPrice = calculateBusTicketPrice(age, ticketPrice);
            resultOutput.textContent = `Final ticket price: $${finalPrice.toFixed(2)}`;
            resultOutput.className = '';
        } 
        catch (error) {
            resultOutput.textContent = (error as Error).message;
            resultOutput.className = 'error';
        }
    });
}
function calculateAge(birthday: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
}
function calculateBusTicketPrice(age: number, ticketPrice: number): number {
    if (age < 18) {
        return ticketPrice * 0.5;
    } else if (age > 67) {
        return ticketPrice * 0.8;
    } else {
        return ticketPrice;
    }
}

                /* Odd number sum calculation */

function OddNumberSumCalculator() {
    const form = document.getElementById('oddNumbers') as HTMLFormElement;
    const numInput = document.getElementById('num') as HTMLInputElement;
    const resultOutput = document.getElementById('result2') as HTMLDivElement;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        try {
            const num = parseInt(numInput.value);
            if (isNaN(num) || num <= 0) {
                throw new Error('You broke it!');
            }
            const sum = sumOfOddNumbers(num);
            resultOutput.textContent = `Result: ${sum}`;
            resultOutput.className = '';
        } 
        catch (error) {
            resultOutput.textContent = (error as Error).message;
            resultOutput.className = 'error';
        }
    });
}
function sumOfOddNumbers(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}

                  /*             FizzBuzz             */

function FizzBuzzCalculator() {
    const form = document.getElementById('fizzbuzz') as HTMLFormElement;
    const numInput = document.getElementById('num_fizzbuzz') as HTMLInputElement;
    const resultOutput = document.getElementById('result3') as HTMLDivElement;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        try {
            resultOutput.innerHTML = ''; 
            const num = parseInt(numInput.value);
            if (isNaN(num) || num <= 0) {
                throw new Error('You broke it!');
            }
            const result = fizzBuzz(num);
            resultOutput.innerHTML = result;
            resultOutput.className = '';
        } 
        catch (error) {
            resultOutput.textContent = (error as Error).message;
            resultOutput.className = 'error';
        }
    });
}
function fizzBuzz(n: number): string {
    let result = '';
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'FizzBuzz';
        } else if (i % 3 === 0) {
            result += 'Fizz';
        } else if (i % 5 === 0) {
            result += 'Buzz';
        } else {
            result += i.toString();
        }
        if (i !== n) {
            result += ', ';
        }
    }
    return result;
}


                    /*      Prime Checker        */

function PrimeChecker() {
    const form = document.getElementById('prime') as HTMLFormElement;
    const numInput = document.getElementById('num_prime') as HTMLInputElement;
    const resultOutput = document.getElementById('result4') as HTMLDivElement;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        try {
            const num = parseInt(numInput.value);
            if (isNaN(num) || num <= 0) {
                throw new Error('You broke it!');
            }
            const isPrimeNumber = isPrime(num);
            resultOutput.textContent = isPrimeNumber ? `${num} is a prime number.` : `${num} is not a prime number.`;
            resultOutput.className = '';
        } 
        catch (error) {
            resultOutput.textContent = (error as Error).message;
            resultOutput.className = 'error';
        }
    });
}

function isPrime(num: number): boolean {
    if (num <= 1) return false;
    return checkPrime(num);
}
function checkPrime(num: number): boolean {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

                    /* Changing timed background */

function BackgroundChanger() {
    const backgroundImg = [
        "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1667761634654-7fcf176434b8?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];

    setInterval(changeImage, 5000);

    function changeImage() {
        const i = Math.floor((Math.random() * backgroundImg.length));
        document.body.style.backgroundImage = `url('${backgroundImg[i]}')`;
    }
}
