const iconMenu = document.querySelector('.icon-menu');
const closeIconMenu = document.querySelector('.close-icon-menu');
const menuBody = document.querySelector('.menu__body');
const button = document.querySelector('.header__button');

iconMenu.addEventListener('click', function () {

    // let aaa = 0

    // if (aaa == 0) {
    //     menuBody.classList.remove('animOpen');
    //     menuBody.classList.add('animOpen');
    //     console.log('animOpen');        
    //     aaa = aaa + 1
    // } 
    
    // if (aaa !== 0) {        
    //     menuBody.classList.add('animClose');   
    //     console.log('animanimClose');
        
    //     aaa = aaa - 1
    //     console.log('CLOSE', aaa);       
        
    // }

   
    button.classList.toggle('active-button');
    iconMenu.classList.toggle('icon-menu');
    iconMenu.classList.toggle('close-icon-menu');
    menuBody.classList.toggle('active');

    if (closeIconMenu.classList.contains('close-icon-menu')) {
        menuBody.classList.toggle('animClose');
    }


        
        
    
    
    
})