import data from './createLi.js';

const Tasks = document.querySelector('.todoTasks');
const DisplayData = () => {
  data.forEach((index) => {
    // add task
    const task = document.createElement('div');
    task.className = 'task';
    Tasks.appendChild(task);
    const checkbox = document.createElement('input');
    checkbox.className = 'checkCompleted';
    checkbox.type = 'checkbox';
    checkbox.textContent = index.completed;
    task.appendChild(checkbox);
    const Description = document.createElement('span');
    Description.className = 'description';
    Description.textContent = index.description;
    task.appendChild(Description);
    const dots = document.createElement('div');
    dots.className = 'dots';
    dots.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    task.appendChild(dots);
  });
};

export default DisplayData;