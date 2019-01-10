class TodoList {
  constructor(listArr) {
    this.list = listArr;
  }
  add(item) {
    this.list.push(item);
    localStorage.setItem('todoList', JSON.stringify(this.list));
    return this.list;
  }
  delete(index) {
    this.list.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(this.list));
    return this.list;
  }
  complete(index) {
    this.list[index].completed = true;
    localStorage.setItem('todoList', JSON.stringify(this.list));
  }
  getAll() {
    return this.list;
  }
  getActive() {
    return this.list.filter((curItem) => {
      return curItem.completed === false;
    });
  }
  getCompleted() {
    return this.list.filter((curItem) => {
      return curItem.completed === true;
    });
  }
}