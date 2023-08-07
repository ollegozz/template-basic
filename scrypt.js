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

const carouselArrows = document.querySelectorAll('.carousel__arrow');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function goToSlide(index) {
    if (index === 0) {
        index = carouselItems.length - 1;
    } else if (index === carouselItems.length) {
        index = 0;
    }
    currentIndex = index;
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}
function goToNextSlide() {
    goToSlide(currentIndex + 1);
}
function goToPrevSlide() {
    if (currentIndex === 0 ) {
        currentIndex = carouselItems.length
    } 
    goToSlide(currentIndex - 1);
}

function initArrows() {
    carouselArrows.forEach(arrow => {
        arrow.addEventListener("click", function () {
            if (arrow.dataset.dir === 'left') {
                goToPrevSlide()
                console.log(currentIndex);
            } else {
                goToNextSlide()
            }
        })
    })
}

initArrows()