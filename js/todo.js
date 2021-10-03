'use strict';

const inputForm = document.querySelector('#input__form');
const list = document.querySelector('.list__item');

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
    const UNCHECKED = 'unchecked';
    displayTodo(id, text, UNCHECKED);
}

inputForm.addEventListener('submit', (e) => {
    const inputText = document.querySelector('.input__text');
    addTodo(inputText.value);
    e.preventDefault();
});
