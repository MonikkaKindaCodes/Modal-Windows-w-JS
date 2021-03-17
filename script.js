'use strict';
//Using query Selector to retrieve 
const showModalBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

console.log(showModalBtn);

//For loop to access modals
for (let i = 0; i < showModalBtn.length; i++) {
    showModalBtn[i].addEventListener('click', function
        () {
        console.log('button-clicked');
        //Unhiding Hidden Classes
        modal.classList.remove('hidden'); //This removes the hidden class. Do not use the '.' here as you would in the querySelector
        overlay.classList.remove('hidden');
    });
}