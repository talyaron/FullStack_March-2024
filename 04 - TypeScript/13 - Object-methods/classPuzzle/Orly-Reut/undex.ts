interface Students {
    firstName: string;
    lastName: string;
    grades: number[];
    calculateAverage: () => number | undefined;
}

const David: Students = {
    firstName: "David",
    lastName: "Sason",
    grades: [90, 95, 80, 75],
    calculateAverage: calculateAverage
}

const Yosef: Students = {
    firstName: "Yosef",
    lastName: "Sason",
    grades: [85, 75, 87, 83],
    calculateAverage: calculateAverage
}

const Avi: Students = {
    firstName: "Avi",
    lastName: "Sason",
    grades: [82, 86, 88, 91],
    calculateAverage: calculateAverage
}

const Shlomi: Students = {
    firstName: "Shlomi",
    lastName: "Sason",
    grades: [100, 99, 91, 78],
    calculateAverage: calculateAverage
}

const Orly: Students = {
    firstName: "Orly",
    lastName: "Sason",
    grades: [80, 60, 45, 70],
    calculateAverage: calculateAverage
}


function calculateAverage(): number | undefined {
    try {
        let sum = 0;
        const grades= this.grades 
        for (let a of grades)
            sum += a;
        return sum/grades.length;
    } catch (error) {
        return undefined;
    }
}
console.log (David.calculateAverage());

const students: Students [] = [David, Yosef, Avi, Shlomi, Orly];

function classAverage(): number | undefined {
    try {
        let sum = 0;
        const grades= this.grades 
        for (let a of grades)
            sum += a;
        return sum/grades.length;
    } catch (error) {
        return undefined;
    }
}
console.log (David.Yosef.Avi.Shlomi.Orly.classAverage);