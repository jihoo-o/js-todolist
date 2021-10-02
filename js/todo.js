'use strict';

const inputForm = document.querySelector('#input__form');
const list = document.querySelector('.list__item');

function addTodo(text) {
    const newItem = document.createElement('li');
    newItem.setAttribute('class', 'list__item-box');
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

inputForm.addEventListener('submit', (e) => {
    const inputText = document.querySelector('.input__text');
    addTodo(inputText.value);
    e.preventDefault();
});
