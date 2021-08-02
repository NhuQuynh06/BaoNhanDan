const $sliderContent = document.querySelector('.section-homepage')
if ($sliderContent) {
    $('.box-style-1 .wrap-slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
    });
    var nextButton = '<span class="slick-next"><img src="../figurations/site/arrow-right.png" alt=""></span>'
    var prevButton = '<span class="slick-prev"><img src="../figurations/site/arrow-left.png" alt=""></span>'

    $('.box-style-6 .box-content').slick({
        // centerPadding: '0',
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        nextArrow: nextButton,
        prevArrow: prevButton,
        centerPadding: '90px',
    });
}

$('.chevron-wrap').click(function (e) {
    const $this = $(e.target);
    var id = $this.attr('data-link');
    $('html, body').animate({ scrollTop: $('#' + id).offset().top }, 1000);
});


var nextButton2 = '<span class="slick-next"><img src="../figurations/site/arrow-right2.png" alt=""></span>'
var prevButton2 = '<span class="slick-prev"><img src="../figurations/site/arrow-left2.png" alt=""></span>'

// $('.hero').slick({
//     // dots: true,
//     infinite: true,
//     speed: 500,
//     fade: !0,
//     cssEase: 'linear',
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // autoplay: true,
//     autoplaySpeed: 8000,
//     draggable: false,
//     arrows: true,
//     nextArrow: nextButton2,
//     prevArrow: prevButton2,
// });


$('.box-style-10 .wrap-content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
});


// > show / hide elements
$("button.bars").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("is-active");
    $('.mobile-menu').toggleClass("show");
});

// hamburger-menu
$('.hamburger').on('click', function () {
    $('.hamburger').toggleClass('animation');
    $('.menu-toggle').toggleClass('open');
})


