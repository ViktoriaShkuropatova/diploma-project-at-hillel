const menu__btn = document.querySelector('.js-mobile-btn');
const menu__list = document.querySelector('.js-mobile-menu');

menu__btn.addEventListener('click', function(){
    menu__list.classList.toggle('menu__list_open');
    menu__btn.classList.toggle('menu__btn_active');
})
