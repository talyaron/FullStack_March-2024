import { Task } from '../models/task';
import './styles/popup-remainder.scss'
import './styles/buttons.scss'

export function popup(task: Task) {
    const popup = `
    <div class="popup">
        <div class="popup-header">
            <h3>${task.title}</h3>
        </div>
        <div class="popup-body">
            <p>You Need To Finish Your Task</p>
        </div>
        <div class="popup-footer">
            <button id="done-${task.id}" class="buttons buttons__delete">Done</button>
        </div>
    </div>
    `;
    return popup;
}