function handleAddStudent(ev:any){
    ev.preventDefault();
    try {
     const studentName = ev.target.name.value;
     students.push(new Student(studentName))
     console.log(students);
     renderStudentList(students,document.querySelector("#list"));
    } catch (error) {
      console.error(error); 
    }

}
function handleAddGrades(ev:any){
    ev.preventDefault();
    try {
     const studentGrade = ev.target.grade.value;
     console.log()
     //findd student using his id
     //use the method add grade
    } catch (error) {
     console.error(error);   
    }
}
