//= vendors/jquery.min.js
//= vendors/slick/slick.min.js

$(document).ready(function () {
    $('.carousel-section__news').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1269,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }]
    });

    $('.menu-toggle').click(function () {
        $('html').toggleClass('menu-opened');
    });
});

let navMenu = $('.nav-menu');

$(document).mouseup(function (e) {
    if (navMenu.is(e.target) && navMenu.has(e.target).length === 0) {
        $('html').removeClass('menu-opened')
    }
});
