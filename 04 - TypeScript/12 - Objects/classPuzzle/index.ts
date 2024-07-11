//primitive types


const element = document.getElementById("element1");
console.dir(element);

//print to console log, the second child text content


interface Student {
    year: number,
    first_name: string,
    last_name: string,
    class_name: string
}

let yossi: Student = { year: 1231, first_name: 'yosi', last_name: 'shor', class_name: 'physics' }
const { year, first_name, last_name, class_name} = yossi
console.log(year, first_name, last_name, class_name)