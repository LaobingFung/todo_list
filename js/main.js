var localStorage = window.localStorage;
var state = 'all';
var listStore = localStorage.getItem('todoList');
var todoList = listStore === null ? new TodoList([]) : new TodoList(JSON.parse(listStore));
var ul = document.getElementById('todoList');
var leftItems = document.getElementById('leftItems');
var clear = document.getElementById('clear');
var input = document.getElementById('todoInput')

clickAll()