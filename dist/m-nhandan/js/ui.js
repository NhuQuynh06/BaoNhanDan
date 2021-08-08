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
}

$('.chevron-wrap').click(function (e) {
    const $this = $(e.target);
    var id = $this.attr('data-link');
    $('html, body').animate({ scrollTop: $('#' + id).offset().top }, 1000);
});


var nextButton2 = '<span class="slick-next"><img src="../figurations/site/arrow-right2.png" alt=""></span>'
var prevButton2 = '<span class="slick-prev"><img src="../figurations/site/arrow-left2.png" alt=""></span>'


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

// get height container 3-article-text
// var boxHeading = $(".box-style-10 .box-heading").offsetHeight;
// var boxSocial = $(".box-style-10 .box-social").offsetHeight;
// console.log(boxHeading);
// console.log(boxSocial);
var heightWindown = window.innerHeight - 230;
console.log(heightWindown);

$(".section-article-text .box-style-10 .main-content").height(heightWindown);


// make a button to scroll horizontally in div
var widthDevice = $('.section-article-text .box-style-10')[0].offsetWidth + 30;

$('.slideNext').on('click', function (e) {
    $('.main-content').animate({scrollLeft:'+=' + widthDevice},1000);
});

$('.slidePrev').on('click', function (e) {
    $('.main-content').animate({scrollLeft:'-=' + widthDevice},1000);
});
