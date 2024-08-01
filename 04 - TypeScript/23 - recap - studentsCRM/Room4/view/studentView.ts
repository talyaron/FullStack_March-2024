function renderStudent(student) {
    try {
        let gradesHtml = '<ul>'
        gradesHtml += student.grades.map(grade => `<li>${grade.subject}: ${grade.grade}</li>`).join(' ');
        gradesHtml += '</ul>';
        let html = `<li>${student.name}: ${gradesHtml}</li>`;
        html += renderStudentForm(student);

        return html;
    } catch (error) {
        console.error(error);
    }
}



function renderStudentList(students: Student[], htmlElement: HTMLElement | null): void {
    try {
        if (!htmlElement) throw new Error('Element not found');
        let html = '<ol>';
        students.forEach(student => {
            html += renderStudent(student);
        });
        html += '</ol>';

        htmlElement.innerHTML = html;

        console.log(students);
    } catch (error) {
        console.error(error);
    }
}

function renderStudentForm(student: Student): string {
    try {


        const html =  `<form onsubmit="handleAddGrades(event, '${student.id}')">
            <label for="grade">Student Grade</label>
            <input type="number" name="grade" placeholder="Student Grade" id="gradeId" required>
            <label for="subject">Subject</label>
            <input type="text" name="subject" placeholder="Subject" id="subjectId" required>
        <button type="submit">Add</button>
    </form>`;

        return html;

    } catch (error) {
        console.error(error);
        return '';
    }
}