const nameInput = document.getElementById("nameInput") as HTMLInputElement;
const gradeInput = document.getElementById("gradeInput") as HTMLInputElement;
const studentList = document.getElementById("studentList") as HTMLUListElement;

function addStudent(): void {
  const name = nameInput.value.trim();
  const grade = gradeInput.value.trim();

  if (name !== "" && grade !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${name}, Grade: ${grade}`;

    studentList.appendChild(listItem);

    nameInput.value = "";
    gradeInput.value = "";
  } else {
    alert("Please enter both a name and a grade.");
  }
}
