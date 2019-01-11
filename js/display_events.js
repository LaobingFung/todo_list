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

function clearList(ul) {
  ul.innerHTML = '';
}

function displayLeftItems(itemArr) {
  leftItems.innerText = itemArr.length;
}

function displayList(itemArr, ul) {
  itemArr.forEach((curItem) => displayNewItem(curItem, ul))
  // {
  //   let li = document.createElement('li');
  //   let checkbox = document.createElement('input');
  //   checkbox.setAttribute('type', 'checkbox');
  //   let content = document.createElement('label');
  //   content.innerText = curItem.content;
  //   if (curItem.completed === true) {
  //     content.classList.add('completed');
  //   }
  //   let btn = document.createElement('button');
  //   btn.innerText = 'X';
  //   btn.classList.add('btn_hide');
  //   btn.classList.add('delete_btn');
  //   li.appendChild(checkbox);
  //   li.appendChild(content);
  //   li.appendChild(btn);
  //   ul.appendChild(li);
  // })
}

function add(event) {
  if (input.value !== '' && event.keyCode === 13) {
    let content = input.value;
    let item = new Item(content, false);
    todoList.add(item);
    if (state !== 'completed') {
      displayNewItem(item, ul);
    }
    let activeList = todoList.getActive();
    displayLeftItems(activeList);
    displayClearCompleted(activeList);
    input.value = '';
  }
}

function displayNewItem(item, ul) {
  let li = document.createElement('li');
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  let content = document.createElement('label');
  content.innerText = item.content;
  if (item.completed === true) {
    content.classList.add('completed');
  }
  let btn = document.createElement('button');
  btn.innerText = 'X';
  btn.classList.add('btn_hide');
  btn.classList.add('delete_btn');
  li.appendChild(checkbox);
  li.appendChild(content);
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