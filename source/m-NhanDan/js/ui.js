
$('.chevron-wrap').click(function (e) {
    const $this = $(e.target);
    var id = $this.attr('data-link');
    $('html, body').animate({ scrollTop: $('#' + id).offset().top }, 1000);
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

// toggle sub-menu
$('.menu-toggle a').click(function (event) {
    event.preventDefault();
    $('.menu-toggle .sub-menu').removeClass('active');
    $(this).siblings('.sub-menu').addClass('active');
    $('.menu-toggle a').siblings('.sub-menu').not('.active').hide();
    $(this).siblings(".sub-menu").slideToggle("slow");
})

