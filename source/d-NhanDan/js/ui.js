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


$('.slideNext').on('click', function (e) {
    $('.main-content').animate({ scrollLeft: '+=1160' }, 1000);
});

$('.slidePrev').on('click', function (e) {
    $('.main-content').animate({ scrollLeft: '-=1160' }, 1000);
});

// auto scroll
if (document.querySelector('.section-homepage')) {
    $(window).scroll(function () {
        var windscroll = $(window).scrollTop();
        if (isInViewport(document.querySelector('.chevron1'))) {
            element = document.querySelector('.chevron1');
            domRect = element.getBoundingClientRect();
            var spaceBelow = window.innerHeight - domRect.bottom;
            if (spaceBelow >= 350) {
                $('html, body').animate({ scrollTop: $('.chapter1').offset().top }, 1000);
                element = document.querySelector('.chevron2');
                domRect = element.getBoundingClientRect();
            }
        }
    
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
    
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    
        );
    }
}



