class TodoList {
  constructor(listArr) {
    this.list = listArr;
  }
  add(item) {
    this.list.push(item);
    return this.list;
    //修改local storage
    // window.localStorage.setItem('TodoList', JSON.stringify(this.list));
  }
  delete(index) {
    // let index = this.list.findIndex((curItem) => {
    //   return curItem.content === item.content
    // });
    this.list.splice(index, 1);
    return this.list;
    //修改local storage
    // window.localStorage.setItem('TodoList', JSON.stringify(this.list));
  }
  complete(index) {
    this.list[index].completed = true;
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