const addTask = require ('./modules/addTask.js');
const removeTask = require ('./modules/deleteTask.js');
const Storage = require ('./__mocks__/localStorage.js');

describe ('Add Task to Storage', () => {
taskList = addTask(taskList, newTask);

test('Check if new task aded in list', () => {
  expect (taskList[2].description).toBe('New Task');
})
});




