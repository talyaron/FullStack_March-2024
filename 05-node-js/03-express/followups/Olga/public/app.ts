const taskList = document.getElementById('task-list') as HTMLUListElement;
const addTaskButton = document.getElementById('add-task') as HTMLButtonElement;
const newTaskInput = document.getElementById('new-task') as HTMLInputElement;

addTaskButton.addEventListener('click', () => {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    console.log(taskText);
    const li = document.createElement('li');
    li.textContent = taskText;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      taskList.removeChild(li);
    });
    li.appendChild(removeButton);
    taskList.appendChild(li);
    newTaskInput.value = '';
  }
});
