function renderStudent(student) {
    try {
        const gradesHtml = student.grades.map(grade => `${grade.subject}: ${grade.grade}`).join(', ');
        const html = `<li>${student.name}: ${gradesHtml}</li>`;
        return html;
    } catch (error) {
        console.error(error);
    }
}



function renderStudentList(students: Student[], htmlElement: HTMLElement|null): void {
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