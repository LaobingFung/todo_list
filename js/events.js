function clickAll() {
  //修改state为ALL
  //刷新显示
  state = 'all';
  clearList(ul);
  displayList(todoList.getAll(), ul);
  displayLeftItems(todoList.getActive());
}

function clickActive() {
  //修改state为Active
  //刷新显示
  state = 'active';
  clearList(ul);
  displayList(todoList.getActive(), ul);
}

function clickCompleted() {
  //修改state为Completed
  //刷新显示
  state = 'completed';
  clearList(ul);
  displayList(todoList.getCompleted(), ul);
}

function add() {
  //检测input是否为空
  //由input生成新的item
  //向todoList增加item
  //向localStorage存储todoList
  //增加显示
  if (input.value !== '' && window.event.keyCode === 13) {
    let content = input.value;
    let item = new Item(content, false);
    localStorage.setItem('todoList', JSON.stringify(todoList.add(item)));
    if (state !== 'completed') {
      displayNewItem(item, todoList.list.length);
    }
    displayLeftItems(todoList.getActive());
  }
}

function complete() {
  //修改todoList的对应item的completed状态
  //修改localStorage的存储
  //刷新显示
  let target = window.event.target;
  // target.classList.add('completed');
  let index = target.id.match(/[0-9]+/);
  todoList.complete(index);
  localStorage.setItem('todoList', JSON.stringify(todoList.list));
  addDeleteLine(target);
  displayLeftItems(todoList.getActive());
}

function deleteItem() {
  //删除todoList的对应item
  //修改localStorage的存储
  //刷新显示
}

function clearCompleted() {
  //删除todoList的对应item
  //修改localStorage的存储
  //刷新显示
}

function mouseOverItem() {
  let target = window.event.target;
  if (target.nodeName.toLowerCase() === 'li') {
    target.childNodes[1].classList.remove('btn_hide');
  } else if (target.nodeName.toLowerCase() === 'button') {
    target.classList.remove('btn_hide');
  }
}

function mouseOutItem() {
  let target = window.event.target;
  if (target.nodeName.toLowerCase() === 'li') {
    target.childNodes[1].classList.add('btn_hide');
  } else if (target.nodeName.toLowerCase() === 'button') {
    target.classList.add('btn_hide');
  }
}
// class Event {
//   constructor() {
//     this.localStorage = window.localStorage;
//     this.input = document.getElementById('todoInput');
//     this.state = 'all';
//   }
//   addTodo(list) {
//     let inputStr = this.input.innerText;
//     let item = new
//     this.localStorage.setItem('todoList', JSON.stringify(list.add(item)))
//   }
//   complete(index, list) {
//     list.complete(index);
//   }
//   delete(index, list) {
//     list.delete(index);
//   }
// }