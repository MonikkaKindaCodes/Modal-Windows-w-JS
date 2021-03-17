'use strict';
//Using query Selector to retrieve 
const showModalBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

//Defining functions for repetative functions.
const hiddenModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

console.log(showModalBtn);

//For loop to access modals
for (let i = 0; i < showModalBtn.length; i++) {
    showModalBtn[i].addEventListener('click', openModal);
}

closeModalBtn.addEventListener('click', hiddenModal);

overlay.addEventListener('click', hiddenModal);

//Adding a Keypress Event - Creating a Global EventListener

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        hiddenModal();
    }
});