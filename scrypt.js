let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let menuHeader = document.querySelector('.menu__list');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    menuHeader.classList.toggle('_none');
})