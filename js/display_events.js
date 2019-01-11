function clickAll() {
  clearList(ul);
  displayList(todoList, ul, 'all');
  displayLeftItems(todoList.getActive());
}

function clickActive() {
  clearList(ul);
  displayList(todoList, ul, 'active');
}

function clickCompleted() {
  clearList(ul);
  displayList(todoList, ul, 'completed');
}

function clearList(ul) {
  ul.innerHTML = '';
}

function displayLeftItems(itemArr) {
  leftItems.innerText = itemArr.length;
}

function displayList(todoList, ul, state) {
  let itemArr;
  switch (state) {
    case 'active':
      itemArr = todoList.getActive();
      break;
    case 'completed':
      itemArr = todoList.getCompleted();
      break;
    default:
      itemArr = todoList.getAll();
      break;
  }
  itemArr.forEach((curItem) => displayOneItem(curItem, ul))
}

function add(event) {
  if (input.value !== '' && event.keyCode === 13) {
    let content = input.value;
    let item = new Item(content, false);
    todoList.add(item);
    if (state !== 'completed') {
      displayOneItem(item, ul);
    }
    let activeList = todoList.getActive();
    displayLeftItems(activeList);
    displayClearCompleted(activeList);
    input.value = '';
  }
}

function displayOneItem(item, ul) {
  let li = document.createElement('li');
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  let label = document.createElement('label');
  label.innerText = item.content;
  if (item.completed === true) {
    label.classList.add('completed');
    checkbox.setAttribute('checked', true);
    checkbox.setAttribute('disabled', true);
  }
  let btn = document.createElement('button');
  btn.innerText = 'X';
  btn.classList.add('btn_hide');
  btn.classList.add('delete_btn');
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(btn);
  ul.appendChild(li);
}

function displayClearCompleted(itemArr) {
  if (itemArr.length > 1) {
    clearBtn.classList.remove('btn_hide')
  } else {
    clearBtn.classList.add('btn_hide');
  }
}

function complete(event) {
  let target = event.target;
  let inedx;
  let checkbox;
  let label;
  if (target.nodeName === 'LI') {
    index = todoList.list.findIndex((curItem) => curItem.content === target.children[1].innerText && curItem.completed === false);
    label = target.children[1];
    checkbox = target.children[0];
  } else if (target.nodeName === 'INPUT' || target.nodeName === 'LABEL') {
    index = todoList.list.findIndex((curItem) => curItem.content === target.parentElement.children[1].innerText && curItem.completed === false);
    label = target.parentElement.children[1];
    checkbox = target.parentElement.children[0];
  } else return null;
  todoList.complete(index);
  label.classList.add('completed');
  checkbox.setAttribute('checked', true);
  checkbox.setAttribute('disabled', true);
  let activeList = todoList.getActive();
  displayLeftItems(activeList);
  displayClearCompleted(activeList);
}

function deleteItem(event) {
  let target = event.target;
  if (target.nodeName === 'BUTTON') {
    let index = todoList.list.findIndex((curItem) => {
      return curItem.content === target.parentElement.children[1].innerText && curItem.completed === target.parentElement.children[1].classList.contains('completed') ? true : false;
    });
    todoList.delete(index);
    displayList(todoList, ul, state)
    let activeList = todoList.getActive();
    displayLeftItems(activeList);
    displayClearCompleted(activeList);
  }
}

function clearCompleted() {
  todoList.list = todoList.getActive();
  localStorage.setItem('todoList', JSON.stringify(todoList.list));
  displayList(todoList, ul, state);
}