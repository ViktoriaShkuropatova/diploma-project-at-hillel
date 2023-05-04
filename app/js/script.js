const menu__btn = document.querySelector('.js-mobile-btn');
const menu__list = document.querySelector('.js-mobile-menu');

menu__btn.addEventListener('click', function(){
    menu__list.classList.toggle('menu__list_open');
    menu__btn.classList.toggle('menu__btn_active');
})

$('.js-team-slider').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dots: true,
    dotsClass: 'team__dots'
});

$('.js-achievements-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    dotsClass: 'achievements__dots',
    responsive: [
        {
            breakpoint: 678,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }
    ]
});
