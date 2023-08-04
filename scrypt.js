function showBurger() {
    const iconMenu = document.querySelector('.icon-menu');
    const menuBody = document.querySelector('.menu__body');
    const button = document.querySelector('.header__button');

    iconMenu.addEventListener('click', function () {
        button.classList.toggle('active-button');
        iconMenu.classList.toggle('icon-menu');
        iconMenu.classList.toggle('close-icon-menu');
        menuBody.classList.toggle('active');
        menuBody.classList.toggle('animOpen');
        // menuBody.classList.toggle('animClose');

    })
}

showBurger()

const arr = document.querySelector('.carousel-item');

let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
function goToSlide(index) {
    if (index === 0) {
        index = carouselItems.length - 1;
    } else if (index === carouselItems.length) {
        index = 0;
    }
    currentIndex = index;
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 34}%)`;
}
function goToNextSlide() {
    goToSlide(currentIndex + 1);
}
function goToPrevSlide() {
    goToSlide(currentIndex - 1);
}
setInterval(goToNextSlide, 3000);



arr.addEventListener('click', function () {
    goToPrevSlide()
    console.log(carouselItems);
})