interface student {
  name: string;
  grades: number[];
  getAvg:()=> number|undefined;
  totalAvg:()=> number|undefined;
}

const Maya: student = {
  name: "Maya",
  grades: [93, 100, 87, 65, 79],
  getAvg:gradesAvg
};
const Roni: student = {
  name: "Roni",
  grades: [93, 99, 78, 96, 100],
  getAvg:gradesAvg
};
const Yuval: student = {
  name: "Yuval",
  grades: [66, 66, 24, 80, 94],
  getAvg:gradesAvg
};
const Tal: student = {
  name: "Tal",
  grades: [95, 100, 69, 65, 84],
  getAvg:gradesAvg
};
const Tanya: student = {
  name: "Tanya",
  grades: [100, 100, 99, 78, 95],
  getAvg:gradesAvg
};
const allStudents:student[] = [Maya,Roni, Yuval,Tal,Tanya]
function gradesAvg():number|undefined{
    let sum:number=0;
    // debugger
    try {
        for(let i=0;i<this.grades.length;i++){
            sum+=this.grades[i];
        }
        let avg:number = sum/this.grades.length;
        return avg
            
        }
    catch (error) {
        console.error(error);
        return undefined
    }
}
function totalAvg(arr:student[]):number|undefined{
    let tAvg:number = 0;
    try {
        for(let i=0;i<arr.length;i++){
            tAvg = tAvg + arr[i].getAvg();
        }
        tAvg = tAvg/arr.length;
        return tAvg
            
        }
    catch (error) {
        console.error(error);
        return undefined
    }
}

console.log(Maya.getAvg());
console.log(totalAvg(allStudents));

// function getGrades():number{
// return new Total(.getGrades())
// }