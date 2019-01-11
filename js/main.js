var state = 'all';
var listStore = localStorage.getItem('todoList');
var todoList = listStore === null ? new TodoList([]) : new TodoList(JSON.parse(listStore));
var ul = document.getElementById('todoList');
var leftItems = document.getElementById('leftItems');
var input = document.getElementById('todoInput');
var clearBtn = document.getElementById('clear');

displayClearCompleted(todoList.getActive());

clickAll()