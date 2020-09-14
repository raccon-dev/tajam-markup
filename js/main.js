let swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
});


const btnBurger = document.querySelector('.btn-burger');
const burgerLines = document.querySelectorAll('.burger-line')
const menu = document.querySelector('.menu');
const body = document.body;
btnBurger.addEventListener('click', e => {
    menu.classList.toggle('menu-active');
    body.classList.toggle('disable-scroll')
    for (let burgerLine of burgerLines) {
        burgerLine.classList.toggle('line-active')
    }
});