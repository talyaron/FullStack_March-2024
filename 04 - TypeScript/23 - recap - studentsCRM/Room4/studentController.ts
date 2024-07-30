function handleAddStudent(ev: any) {
  ev.preventDefault();
  try {
    const studentName = ev.target.name.value;
    students.push(new Student(studentName));
    console.log(students);
    renderStudentList(students, document.querySelector("#list"));
  } catch (error) {
    console.error(error);
  }
}
function handleAddGrades(ev: any) {
  ev.preventDefault();
  try {
    // const studentGrade = ev.target.grade.value;
    const studentId = ev.target.studentId.value; 
    const student = students.find(stud => stud.id === studentId);
    const gradeId = ev.target.gradeId.value; 
    const grade: any = grades.find(grade => grade.id === gradeId);

    if (student) {
      student.addGrade(grade); 
      console.log(students);
      renderStudentList(students, document.querySelector("#list"));
      renderStudent(student);
    } else {
      console.error('Student not found');
    }
  } catch (error) {
    console.error(error);
  }
}
