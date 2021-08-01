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
        asNavFor: '.slider-for',
    });

}

$('.chevron-wrap').click(function (e) {
    const $this = $(e.target);
    var id = $this.attr('data-link');
    console.log(id)
    $('html, body').animate({ scrollTop: $('#' + id).offset().top }, 1000);
});

$('.dots').on('click', function() {
    const prefix = 'chapter';
    var id = Number($(this).attr('data-link')) - 1;
    if (id <= 0) {
        $('html, body').animate({ scrollTop: $('.container').offset().top }, 1000);
    } else {
        $('html, body').animate({ scrollTop: $('#' + prefix + id).offset().top }, 1000);
    }
    
});


var nextButton2 = '<span class="slick-next"><img src="../figurations/site/arrow-right2.png" alt=""></span>'
var prevButton2 = '<span class="slick-prev"><img src="../figurations/site/arrow-left2.png" alt=""></span>'

$('.box-style-10 .slide').slick({
    // dots: true,
    infinite: true,
    speed: 500,
    fade: !0,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 8000,
    draggable: false,
    arrows: true,
    nextArrow: nextButton2,
    prevArrow: prevButton2,
});


$('.box-style-10 .wrap-content').slick({

    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
});

//  Add Menu Active Class when scrolling to div
$(window).scroll(function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.chapter').each(function (i) {
            // The number at the end of the next line is how pany pixels you from the top you want it to activate.
            if ($(this).position().top <= windscroll - 0) {
                $('.wrap-dots .dots.active').removeClass('active');
                $('.wrap-dots .dots').eq(i).addClass('active');
            }
        });
    } else {
        $('.wrap-dots .dots.active').removeClass('active');
        $('.wrap-dots .dots:first').addClass('active');
    }
}).scroll();

