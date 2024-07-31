import { editName } from './controllers/studentsCont.ts'
import './style.css'
import { renderStudentForm } from './views/studentsView.ts'


const student = document.querySelector<HTMLDivElement>('.add-student')
 if(student) { renderStudentForm(student)};

document.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).classList.contains('edit')) {
        editName(event);
    }
})

