const $sliderContent = document.querySelector('.section-homepage')
if ($sliderContent) {
    var nextButton = '<span class="slick-next"><img src="../figurations/site/arrow-right.png" alt=""></span>'
    var prevButton = '<span class="slick-prev"><img src="../figurations/site/arrow-left.png" alt=""></span>'

    $('.box-style-6 .slider-for').slick({
        centerPadding: '0',
        centerMode: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        // autoplay: true,
        nextArrow: nextButton,
        prevArrow: prevButton,
        asNavFor: '.slider-nav',
    });
    $('.box-style-6 .slider-nav').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 500,
        fade: !0,
        cssEase: 'linear',
        autoplaySpeed: 8000,
        draggable: false,
        asNavFor: '.slider-for',
    });

}

$('.chevron-wrap').click(function (e) {
    const $this = $(e.target);
    var id = $this.attr('data-link');
    $('html, body').animate({ scrollTop: $('#' + id).offset().top }, 1000);
});

$('.dots').on('click', function () {
    const prefix = 'chapter';
    var id = Number($(this).attr('data-link')) - 1;
    if (id <= 0) {
        $('html, body').animate({ scrollTop: $('.box-style-1').offset().top }, 1000);
    } else {
        $('html, body').animate({ scrollTop: $('#' + prefix + id).offset().top }, 1000);
    }

});


var nextButton2 = '<span class="slick-next"><img src="../figurations/site/arrow-right2.png" alt=""></span>'
var prevButton2 = '<span class="slick-prev"><img src="../figurations/site/arrow-left2.png" alt=""></span>'


// get height container 3-article-text
var heightWindown = window.innerHeight - 230;
$(".section-article-text .box-style-10 .main-content").height(heightWindown);


// make a button to scroll horizontally in div


$('#slideNext').on('click', function (e) {
    $('.main-content').animate({scrollLeft:'+=1160'},1000);
});

$('#slidePrev').on('click', function (e) {
    $('.main-content').animate({scrollLeft:'-=1160'},1000);
});



