document.addEventListener('DOMContentLoaded', () => {
    ArrayReversal();
    ArraySummation();
    MaxElementFinder();
    EvenNumberFilter();
    UniqueValuesHandler();
    FrequencyCounterHandler(); 
    BackgroundChanger();
});

//Array Reversal
function ArrayReversal() {
    const form = document.getElementById('arrayReversal') as HTMLFormElement;
    const inputElement = document.getElementById('arrayInput') as HTMLInputElement;
    const resultElement = document.getElementById('result') as HTMLDivElement;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        try {
            let input_value = inputElement.value;
            let input_nums = input_value.split(/[\s,]+/).map(item => item.trim()).filter(item => item !== "");
            if (input_nums.length === 0) throw new Error("Invalid input");
            let reversedArray = reverseArray(input_nums);
            resultElement.textContent = `${reversedArray.join(', ')}`;
            resultElement.classList.remove('error');
        } catch (error) {
            resultElement.textContent = `You broke it:` + error.message;
            resultElement.classList.add('error');
        }
    });
}

// Array Summation
function ArraySummation() {
    const form = document.getElementById('arraySummation') as HTMLFormElement;
    const inputElement = document.getElementById('arrayInput2') as HTMLInputElement;
    const resultElement = document.getElementById('result2') as HTMLDivElement;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        try {
            let inputValue = inputElement.value;
            let input_nums = inputValue.split(/[,\s]+/).filter(Boolean).map(item => {
                let number = parseFloat(item.trim());
                if (isNaN(number)) throw new Error("Invalid input");
                return number;
            });
            if (input_nums.length === 0) throw new Error("Invalid input");
            let sum = sumArray(input_nums);
            resultElement.textContent = `Sum: ${sum}`;
            resultElement.classList.remove('error');
        } catch (error) {
            resultElement.textContent = `You broke it: ` + error.message;
            resultElement.classList.add('error');
        }
    });
}


//Max element finder
function MaxElementFinder() {
    const form = document.getElementById('arrayMax') as HTMLFormElement;
    const inputElement = document.getElementById('arrayInput3') as HTMLInputElement;
    const resultElement = document.getElementById('result3') as HTMLDivElement;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        try {
            let input_value = inputElement.value;
            let input_nums = input_value.split(/[\s,]+/).map(item => {
                let number = parseFloat(item.trim());
                if (isNaN(number)) throw new Error("Invalid input");
                return number;
            });
            if (input_nums.length === 0) throw new Error("Invalid input");
            let max = findMax(input_nums);
            resultElement.textContent = `Max: ${max}`;
            resultElement.classList.remove('error');
        } catch (error) {
            resultElement.textContent =`You broke it: ` + error.message;
            resultElement.classList.add('error');
        }
    });
}

// EvenNumber Filter
function EvenNumberFilter() {
    const form = document.getElementById('filteringEvenNumbers') as HTMLFormElement;
    const inputElement = document.getElementById('arrayInput4') as HTMLInputElement;
    const resultElement = document.getElementById('result4') as HTMLDivElement;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        try {
            let inputValue = inputElement.value;
            let input_nums = inputValue.split(/[,\s]+/).filter(Boolean).map(item => {
                let number = parseFloat(item.trim());
                if (isNaN(number)) throw new Error("Invalid input");
                return number;
            });
            if (input_nums.length === 0) throw new Error("Invalid input");
            let evenNumbers = filterEven(input_nums);
            resultElement.textContent = `Even numbers: ${evenNumbers.join(', ')}`;
            resultElement.classList.remove('error');
        } catch (error) {
            resultElement.textContent = `You broke it: ` + error.message;
            resultElement.classList.add('error');
        }
    });
}


// Unique Values Handler
function UniqueValuesHandler() {
    const form = document.getElementById('uniqueValues') as HTMLFormElement;
    const inputElement = document.getElementById('arrayInput5') as HTMLInputElement;
    const resultElement = document.getElementById('result5') as HTMLDivElement;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        try {
            let input_value = inputElement.value;
            let input_nums = input_value.split(/[\s,]+/).map(item => item.trim()).filter(item => item !== "");
            if (input_nums.length === 0) throw new Error("Invalid input");
            let unique_array = unique(input_nums);
            resultElement.textContent = `Unique values: ${unique_array.join(', ')}`;
            resultElement.classList.remove('error');
        } catch (error) {
            resultElement.textContent = `You broke it:` + error.message;
            resultElement.classList.add("error");
        }
    });
}

// Frequency Counter Handler
function FrequencyCounterHandler() {
    const form = document.getElementById('frequencyCounter') as HTMLFormElement;
    const inputElement = document.getElementById('arrayInput6') as HTMLInputElement;
    const resultElement = document.getElementById('result6') as HTMLDivElement;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        try {
            let input_value = inputElement.value;
            let input_nums = input_value.split(/[\s,]+/).filter(Boolean).map(Number);
            if (input_nums.length === 0) throw new Error("Invalid input");
            let frequency: { [key: number]: number } = {};
            input_nums.forEach(num => {
                frequency[num] = (frequency[num] || 0) + 1;
            });
            let sorted_array = Object.keys(frequency)
                .sort((a, b) => frequency[Number(b)] - frequency[Number(a)] || input_nums.indexOf(Number(a)) - input_nums.indexOf(Number(b)))
                .map(Number);
            resultElement.textContent = `Frequency in decreasing order: [${sorted_array.join(', ')}]`;
            resultElement.classList.remove('error');
        } catch (error) {
            resultElement.textContent = `You broke it:` + error.message;
            resultElement.classList.add("error");
        }
    });
}

//Background Changer
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

// Helper Functions

function reverseArray(arr: any[]): any[] {
    return arr.slice().reverse();
}

function sumArray(arr: number[]): number {
    return arr.reduce((acc, num) => acc + num, 0);
}

function findMax(arr: number[]): number {
    return Math.max(...arr);
}

function filterEven(arr: number[]): number[] {
    return arr.filter(num => num % 2 === 0);
}

function unique(arr: any[]): any[] {
    if (arr.length === 0) {
        throw new Error("No input");
    }
    try {
        const unique_array: any[] = [];
        for (let i = 0; i < arr.length; i++) {
            if (unique_array.indexOf(arr[i]) === -1) {
                unique_array.push(arr[i]);
            }
        }
        return unique_array;
    } catch (error) {
        throw new Error(error.message);
    }
}
