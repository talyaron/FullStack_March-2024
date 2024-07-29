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