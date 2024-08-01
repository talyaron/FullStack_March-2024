export function renderForm(){
    try {
        const id:string = "studentForm"+crypto.randomUUID();
        const html:string=`<form id="${id}" >
        <input type="text" value="student name">
        <input type="submit" value="add">
        </form>`;
        const div=htmlTag("#studentCrp");
        // div.innerHTML=html;
        div.addEventListener('submit',handleAddEvent);
        return html
       
    } catch (error) {
        console.error(error);
    }
}

export function renderStudents(){
    try {
        let html = `<div><ul id='studentList'>`;
         
        students.forEach(element => {
            html+=`<li class="linkToStudent" id='${element.id}'><a href="#" >${element.name}</a></li>`;
        });
        html+= `</ul></div>`;
        const div=htmlTag("#list");
        div.innerHTML = html;
        div.querySelectorAll(".linkToStudent").forEach((student)=> {student.addEventListener('click',()=>viewStudentHandler(student.id))})
        
    } catch (error) {
        console.error(error);
    }
}