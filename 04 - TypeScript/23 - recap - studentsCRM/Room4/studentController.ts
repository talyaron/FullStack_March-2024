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
function handleAddGrades(ev) {
  ev.preventDefault();
  try {
      const studentId = ev.target.studentId.value;
      const student = students.find(stud => stud.id === studentId);
      const grade = ev.target.grade.value;
      const subject = ev.target.subject.value;

      if (student) {
          student.addGrade(grade, subject);
          renderStudentList(students, document.querySelector("#list"));
      } else {
          console.error('Student not found');
      }
  } catch (error) {
      console.error(error);
  }
}
