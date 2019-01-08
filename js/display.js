function displayList(itemArr, ul) {
  itemArr.forEach((curItem, I) => {
    let li = document.createElement('li');
    li.innerText = curItem.content;
    if (curItem.completed === true) {
      li.classList.add('completed');
    }
    let btn = document.createElement('button');
    btn.innerText = 'X';
    btn.classList.add('btn_hide');
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

function clearList(ul) {
  let child = ul.childNodes;
  for (let i = child.length - 1; i >= 0; i--) {
    ul.removeChild(child[i]);
  }
}

function displayLeftItems(itemArr) {
  leftItems.innerText = itemArr.length
}

function displayNewItem(item, I) {
  let li = document.createElement('li');
  li.innerText = item.content;
  let btn = document.createElement('button');
  btn.innerText = 'X';
  btn.classList.add('btn_hide');
  li.appendChild(btn);
  ul.appendChild(li);
}

function displayDeleteItem(I) {
  let li = ul.childNodes[I];
  ul.removeChild(li);
}

function displayClearCompleted(itemArr) {
  if (itemArr.length > 1) {
    clearBtn.classList.remove('btn_hide')
  } else {
    clearBtn.classList.add('btn_hide');
  }
}

function addDeleteLine(element) {
  element.classList.add('completed');
}
