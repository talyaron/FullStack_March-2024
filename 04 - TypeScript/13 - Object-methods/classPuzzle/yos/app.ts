interface Students {
    name: string;
    grades: number[];
    calculateAverage: (grades) => number;
}


const t: Students = {
    name: 'rtr',
    grades: [234, 34, 32, 2],
    calculateAverage: calculateAverage
}
function calculateAverage(arr: number[]): number {
    try {
        return 2
    } catch (error) {
        return 2

    }
}

console.log(t)