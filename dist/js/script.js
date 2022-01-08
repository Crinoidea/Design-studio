'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // Animation
    new WOW().init();

    //Modal
    const modalBtn = document.querySelector('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalClose = document.querySelector('.modal__close');
    
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalBtn.addEventListener('click', openModal);
    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

});