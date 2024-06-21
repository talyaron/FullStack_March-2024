interface student {
  name: string;
  grades: number[];
  calculateAverage: () => number;
}

const eden: student = {
  name: "eden",
  grades: [50, 70, 80, 30],
  calculateAverage: calculateAverage,
};

const tal: student = {
  name: "tal",
  grades: [40, 70, 10, 50],
  calculateAverage: calculateAverage,
};

const olga: student = {
  name: "olga",
  grades: [50, 40, 15, 80],
  calculateAverage: calculateAverage,
};

const raviv: student = {
  name: "raviv",
  grades: [50, 35, 25, 55],
  calculateAverage: calculateAverage,
};

const or: student = {
  name: "or",
  grades: [50, 45, 10, 95],
  calculateAverage: calculateAverage,
};

// function calculateAverage(): number {
//     const grades: number[] {
//         this.grades = grades;
//     }
//   if (this.grades.length === 0) {
//     return 0;
//   }
//   const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
//   return sum / this.grades.length;
// }

function calculateAverage(): number {
  if (this.grades.length === 0) {
    return 0; // Handle the case where there are no grades
  }
  const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
  return sum / this.grades.length;
}

console.log(eden.calculateAverage());
console.log(or.calculateAverage());

function calculateAverage(): number {}
