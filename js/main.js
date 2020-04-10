'use strict';

let modal = document.querySelector('.modal'),
 button = document.querySelector('.button-second'),
 closeBtn = document.querySelector('.close'),
 btnCancel = document.querySelector('.button-cancel');

button.addEventListener('click', (event) => {
    let target = event.target;
    if(target) {
        modal.style.display = 'flex';
    }
});

modal.addEventListener("click", (event) => {
  let target = event.target;

  if (target.matches('.modal') || target.matches('.close') || target.matches('.button-cancel')) {
    modal.style.display = "none";
  }
});

new WOW().init();
