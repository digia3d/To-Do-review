import displayData from './modules/displayData.js';
import addTask from './modules/addTask.js';
import './style.css';

displayData();

const store = new localStorage();
loadTaskList(store.getItems());