let iconMenu = document.querySelector('.icon-menu');
let menuBody = document.querySelector('.menu__body');

iconMenu.addEventListener('click', function () {
    iconMenu.classList.toggle('icon-menu');
    iconMenu.classList.toggle('close-icon-menu');
    menuBody.classList.toggle('active');
})

