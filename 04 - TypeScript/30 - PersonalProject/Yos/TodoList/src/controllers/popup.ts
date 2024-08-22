import { popup } from "../views/popup";
import { getCurrentAndAllUsers } from "./addTaskToUser";


export function showPopUpFinishYourTask() {
    const { currentUser } = getCurrentAndAllUsers();
    if (!currentUser) throw new Error("Cant find the current user");
    // debugger
    //checking users' task datetime and if it have left just one hour
    currentUser.list.forEach(task => {
        const oneHourInMillis = 60 * 60 * 1000; // One hour in milliseconds
        const taskDueTime = new Date(task.expectToBeDone).getTime() + oneHourInMillis;
        const currentTime = new Date().getTime();
        if (taskDueTime <= currentTime) {
            //render some reminder on the screen
            //check if already have popup so not add new one
            const popupDivElement = document.querySelector('.popup-wrapper');
            if(popupDivElement) return;
            //send notification
            const popupDiv = popup(task);
            const pop = document.createElement('div');
            if (pop) pop.innerHTML = popupDiv;
            pop.className = 'popup-wrapper';
            // pop.style.backgroundColor = 'red';
            // pop.style.position = 'fixed';
            // pop.style.top = '12rem';
            // pop.style.left = '90%';
            // pop.style.transform = 'translate(-50%, -50%)';
            document.body.append(pop);

            //send email

            //delete task



        }
    });

}