const iconMenu = document.querySelector('.icon-menu');
const closeIconMenu = document.querySelector('.close-icon-menu');
const menuBody = document.querySelector('.menu__body');
const button = document.querySelector('.header__button');

iconMenu.addEventListener('click', function () {

   
    button.classList.toggle('active-button');
    iconMenu.classList.toggle('icon-menu');
    iconMenu.classList.toggle('close-icon-menu');
    menuBody.classList.toggle('active');

    if (closeIconMenu.classList.contains('close-icon-menu')) {
        menuBody.classList.toggle('animClose');
    }
    
        
    
    
    
})