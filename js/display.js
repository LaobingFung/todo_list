function displayList(itemArr, ul) {
  //更新显示的todoList
  itemArr.forEach((curItem, I) => {
    let li = document.createElement('li');
    let content = document.createTextNode(curItem.content);
    li.appendChild(content);
    li.setAttribute('id', `item${I}`)
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
  //更新Left items
  leftItems.innerText = itemArr.length
}

function addItem(item, I) {
  //显示新添加的item
  let li = document.createElement('li');
  let content = document.createTextNode(item.content);
  li.appendChild(content);
  li.setAttribute('id', `item${I}`)
  ul.appendChild(li);
}

function modifyClearCompleted() {
  //显示或隐藏Clear Completed按钮
}

function addDeleteLine() {
  //给todo事项添加删除线
}

function deleteBtn() {
  //显示todo事项的删除按钮
}