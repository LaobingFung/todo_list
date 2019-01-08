function clickAll() {
  state = 'all';
  clearList(ul);
  displayList(todoList.getAll(), ul);
  displayLeftItems(todoList.getActive());
}

function clickActive() {
  state = 'active';
  clearList(ul);
  displayList(todoList.getActive(), ul);
}

function clickCompleted() {
  state = 'completed';
  clearList(ul);
  displayList(todoList.getCompleted(), ul);
}

function add() {
  if (input.value !== '' && window.event.keyCode === 13) {
    let content = input.value;
    let item = new Item(content, false);
    localStorage.setItem('todoList', JSON.stringify(todoList.add(item)));
    if (state !== 'completed') {
      displayNewItem(item, todoList.list.length);
    }
    let activeList = todoList.getActive();
    displayLeftItems(activeList);
    displayClearCompleted(activeList);
  }
}

function complete() {

  let target = window.event.target;
  if (target.nodeName.toLowerCase() === 'li') {
    let nodeListArr = Array.from(target.parentElement.childNodes);
    let index = nodeListArr.findIndex((curNode) => curNode.innerText === target.innerText);
    todoList.complete(index);
    localStorage.setItem('todoList', JSON.stringify(todoList.list));
    addDeleteLine(target);
    let activeList = todoList.getActive();
    displayLeftItems(activeList);
    displayClearCompleted(activeList);
  }
}

function deleteItem() {
  let target = window.event.target;
  if (target.nodeName.toLowerCase() === 'button') {
    let nodeListArr = Array.from(target.parentElement.parentElement.childNodes);
    let index = nodeListArr.findIndex((curNode) => curNode.innerText === target.parentElement.innerText);
    todoList.delete(index);
    localStorage.setItem('todoList', JSON.stringify(todoList.list));
    displayDeleteItem(index);
    let activeList = todoList.getActive();
    displayLeftItems(activeList);
    displayClearCompleted(activeList);
  }
}

function clearCompleted() {
  todoList.list = todoList.getActive();
  localStorage.setItem('todoList', JSON.stringify(todoList.list));
  switch (state) {
    case 'active':
      clickActive();
      break;
    case 'completed':
      clickCompleted();
      break;
    default:
      clickAll();
      break;
  }
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

function clearCompletedOccur() {
  let target = window.event.target;
  if (parseInt(target.innerText) > 1) {
    clearBtn.classList.remove('btn_hide');
  } else {
    clearBtn.classList.add('btn_hide');
  }
}