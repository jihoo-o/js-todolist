'use strict';

const inputForm = document.querySelector('#input__form');
const list = document.querySelector('.list__item');
const todoList = [];
const TODO_KEY = 'todolist';
const UNCHECKED = 'unchecked';
const CHECKED = 'checked';

function loadTodo() {
    const parsedTodo = JSON.parse(localStorage.getItem(TODO_KEY));
    parsedTodo.forEach((todo) => {
        todoList.push(todo);
        displayTodo(todo.id, todo.text, todo.state);
    });
}

function saveTodo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todoList));
}

function displayTodo(id, text, state) {
    const newItem = document.createElement('li');
    newItem.setAttribute('class', 'list__item-box');
    newItem.dataset.id = id;
    newItem.dataset.state = state;
    newItem.innerHTML = `
    <h3 class="list__item__text">${text}</h3>
    <button class="list__item__btn-check">
    <i class="far fa-check-circle"></i>
    </button>
    <button class="list__item__btn-delete">
    <i class="far fa-trash-alt"></i>
    </button>
    `;
    list.prepend(newItem);
}

function addTodo(text) {
    const id = Date.now() * Math.floor(Math.random() * 100);
    todoList.push({
        id: id,
        text: text,
        state: UNCHECKED,
    });
    displayTodo(id, text, UNCHECKED);
    saveTodo();
}

inputForm.addEventListener('submit', (e) => {
    const inputText = document.querySelector('.input__text');
    addTodo(inputText.value);
    inputText.value = '';
    e.preventDefault();
});

loadTodo();
