import { Student, Subjects } from "../models/student";

export function renderFormSubject(id: string): string {
    const addSubjectInput = `<div class="add-subject"> 
                        <form id="add-subject-form">
                            <label for="subject">Enter Subject Name</label>
                            <input name="subject" type="text" placeholder="Enter Subject Name"> 
                            <label for="grade">Enter Grade</label>
                            <input name="grade" type="number" placeholder="Enter Grade">
                            <p style="display:none;" id="${id}"></p>
                            <div class="show-buttons">
                                <div class="buttons buttons__add_subject"><button type="submit" name="id" id="${id}">Add</button></div>
                            </div>
                        </form>
                    </div>`
    return addSubjectInput;
}

// <div class="buttons buttons__delete_subject"><button type="submit" name="delete-subject" id="${id}">Delete</button></div>
// 

export function renderSubjects(subjectDetails: Subjects): string {
    
    const subject = `<div class="add-subject"> 
                        <form id="add-subject-form">
                            <label for="subject">Subject Name</label>
                            <h2 name="subject" style="padding:0; margin:0;">${subjectDetails.subject}</h2> 
                            <label for="grade">Grade : </label>
                            <h2 name="subject" style="padding:0; margin:0;"> ${subjectDetails.score}</h2> 
                            <div class="show-buttons">
                                <div class="buttons buttons__edit"><button type="submit" name="id" id="${subjectDetails.id}">Edit</button></div>
                            </div>
                        </form>
                    </div>`
    return subject;
}

export function renderAllSubjects(subjects: Subjects[]): string {
    let subjectsDiv = '';
    subjects.forEach(subject => {
        subjectsDiv += renderSubjects(subject);
    })
    return subjectsDiv;
}