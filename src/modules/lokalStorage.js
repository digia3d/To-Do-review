export default class localStorage {
  constructor() {
    this.store = [];
  }

  setItems = (obj) => {
    localStorage.setItems('taskList', JSON.stringify(obj));
  };

  getItems = () => {
    this.store = JSON.parse(localStorage.getItems('taskList') || '[]');
    return this.store;
  };
}