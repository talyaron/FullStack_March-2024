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
function handleAddGrades(ev: any, studentId: string) {
  ev.preventDefault();
  try {

    const student = students.find(stud => stud.id === studentId);
    const grade = ev.target.grade.value;
    const subject = ev.target.subject.value;

    if (student) {
      student.addGrade(grade, subject);
      renderStudentList(students, document.querySelector("#list"));
    } else {
      throw new Error ('Student not found');
    }
  } catch (error) {
    console.error(error);
  }
}
