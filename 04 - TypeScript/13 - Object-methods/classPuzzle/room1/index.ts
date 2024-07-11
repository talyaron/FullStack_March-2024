// interface Students {
//     name:string;
//     grades:number[];
//     calculateAverage:() => number;
    
// }

// const David:Students = {
//     name: "david",
//     grades: [96,87,99],
//     calculateAverage:calculateAverage
// }

// function calculateAverage():number{
//     const grades = this.grades;
//     const average = grades.reduce((acc,grade) => acc + grade , 0);
//     return average/grades.length;
    
    
// }

// console.log(david.calculateAverage());



interface Studentx {
    name: string;
    grades:number[];
    calculateAverage: () => number;
}
const student1: Studentx = {
    name: "Someone",
    grades: [89, 100, 90, 80, 10],
    calculateAverage: calculateAverage
  
}

const student2: Studentx = {
    name: "Someone2",
    grades: [88,75,100,89,99],
    calculateAverage: calculateAverage
  
}

const student3: Studentx = {
    name: "Someone3",
    grades: [89, 100, 85,70,89],
    calculateAverage: calculateAverage
  
}

const student4: Studentx = {
    name: "Someone4",
    grades: [89, 99,94,89,66],
    calculateAverage: calculateAverage
  
}

const student5: Studentx = {
    name: "Someone5",
    grades: [94,86,75,92,100],
    calculateAverage: calculateAverage
  
}

function calculateAverage(): number {
    const grades = this.grades;
    const average = grades.reduce((acc, grade) => acc + grade, 0);
    return average / grades.length;
}
console.log(student1.calculateAverage());

const students: Studentx[] = [student1, student2, student3, student4, student5];

function calculatClass (students:Studentx[]):number{
    const average = students.reduce((acc, student) => acc + student.calculateAverage(), 0);
    return average / students.length;


    
}
console.log("Class average:" + calculatClass(students));



function sortStudents(students: Studentx[]):Studentx[]{
    return students.sort((a,b) => b.calculateAverage() - a.calculateAverage());
}

const sortedStudents = sortStudents(students);
console.log("sortedaverage:");

sortedStudents.forEach(student => {
    console.log(`${student.name}: ${student.calculateAverage()}`);
});
