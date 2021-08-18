
// get height container 3-article-text
var boxHeight = Math.max(window.innerHeight - 290, 350);
$(".section-article-text .box-style-10 .main-content").height(boxHeight);

if ($("#scroll").length > 0) {
    var pageWidth = $('#scroll').width() + 38;
    // make a button to scroll horizontally in div
    var scrolling = false;
    $('.slideNext').on('click', function (e) {
        e.preventDefault();
        if ($('.main-content').scrollLeft() > $('.main-content')[0].scrollWidth - 1170) return;
        if (scrolling) { return; }        
        scrolling = true;
        $('.main-content').animate({ scrollLeft: '+=' + pageWidth }, 1000, function () { scrolling = false; });
    });
    $('.slidePrev').on('click', function (e) {
        e.preventDefault();
        if (scrolling) { return; }
        scrolling = true;
        $('.main-content').animate({ scrollLeft: '-=' + pageWidth }, 1000, function () { scrolling = false; });
    });

    var imageTotal = $(".main-content img").length;
    var imageCount = 0;
    $(".main-content img").one("load", function () {
        imageCount++;
        if (imageCount >= imageTotal) {
            console.log('Images loaded');
            addColumns();
        }
    }).each(function () {
        if (this.complete) {
            $(this).trigger('load');
        }
    });
    waitForWebfonts(['noto-regular', 'roboto-medium', 'roboto-regular'], function () {
        console.log('Fonts loaded');
        alterSummaryHeight();
        addColumns();
    })
}

function alterSummaryHeight() {
    if ($('.rank-2 > .box-style-9').length == 0) return;
    var boxHeight = Math.max(window.innerHeight - 290, 350);
    var outerHeight = $('.rank-2 > .box-style-9').outerHeight();
    $('.rank-2 > .box-style-9 .story').height($('.rank-2 > .box-style-9').height() - (outerHeight - boxHeight));
    $('.rank-2 > .box-style-9 .story').each(function () {
        var height = $(this).height() - $(this).find('.story__thumb').height() - $(this).find('.story__heading').height() - 20;
        $(this).find('.story__summary').css('max-height', height + 'px');
    });
    shortenText();
    window.setTimeout(function () { shortenText(); }, 2000);
}

function shortenText() {
    $('.shorten').each(function () {
        var i = 0; var h = parseInt($(this).parent().css('max-height').replace('px', ''));
        if (!h) return;
        while (i < 100 && $(this).height() > h) {
            $(this).html($(this).html().replace(/[\s]*[^\s]+[.!?]?$/, ''));
            i++;
        }
        if (i > 0) { $(this).html($(this).html().replace(/[\s]*[^\s]+[.!?]?$/, '') + ' ...'); }
    });
}

function waitForWebfonts(fonts, callback) {
    var loadedFonts = 0;
    for (var i = 0, l = fonts.length; i < l; ++i) {
        (function (font) {
            var node = document.createElement('span');
            // Characters that vary significantly among different fonts
            node.innerHTML = 'giItT1WQy@!-/#';
            // Visible - so we can measure it - but not on the screen
            node.style.position = 'absolute';
            node.style.left = '-10000px';
            node.style.top = '-10000px';
            // Large font size makes even subtle changes obvious
            node.style.fontSize = '300px';
            // Reset any font properties
            node.style.fontFamily = 'sans-serif';
            node.style.fontVariant = 'normal';
            node.style.fontStyle = 'normal';
            node.style.fontWeight = 'normal';
            node.style.letterSpacing = '0';
            document.body.appendChild(node);

            // Remember width with no applied web font
            var width = node.offsetWidth;

            node.style.fontFamily = font + ', sans-serif';

            //var interval;
            function checkFont(_first) {
                // Compare current width with original width
                if (node && node.offsetWidth != width) {
                    ++loadedFonts;
                    node.parentNode.removeChild(node);
                    node = null;
                    //if (interval) { clearInterval(interval); }
                } else if (!_first) {
                    setTimeout(checkFont, 50);
                }

                // If all fonts have been loaded                
                if (loadedFonts >= fonts.length) {
                    callback();
                    return true;
                }
            };

            if (!checkFont(true)) { setTimeout(checkFont, 50); }
        })(fonts[i]);
    }
};

function addColumns() {
    $('.column-miss').remove();
    var rank2 = '';
    if ($('#scroll .rank-2').length > 0) {
        $('<div>').append($('#scroll .rank-2').clone()).html();
        $('#scroll .rank-2').remove();
    }
    var colWidth = ($('#scroll').width() + 38) / 4;
    var widthScroll = $('.main-content')[0].scrollWidth;
    var column = Math.ceil(widthScroll / colWidth);
    var missColumn = (4 - column % 4);
    console.log('missColumn', missColumn);
    if (rank2 != '') {
        $('#scroll .rank-1').after(rank2);
    }
    if (missColumn < 4) {
        $('#scroll .rank-1').after('<div class="column-miss" style="height:' + (missColumn * 100) + '%"></div>');
    }

}

// auto scroll
if (document.querySelector('.section-homepage')) {
    var activeChapter = 1;
    var lastScroll = 0;
    var monitor = true;
    $('.dots, .chevron-wrap').on('click', function (e) {
        e.preventDefault();
        monitor = false;
        $('html, body').animate({ scrollTop: $('#chapter' + $(this).attr('data-link')).offset().top }, 1000, function () { monitor = true; });
    });
    $(window).scroll(function (e) {
        var scroll = $(window).scrollTop();
        var height = $(window).height();

        var chapter = 1;
        $('.chapter').each(function (i) {
            if ($(this).position().top <= scroll + height * 0.5) {
                chapter = parseInt($(this).attr('id').replace('chapter', ''));
            }
        });
        $('.wrap-dots .dots.active').removeClass('active');
        $('.wrap-dots .dots').eq(chapter - 1).addClass('active');
        activeChapter = chapter;

        if (!monitor) { e.preventDefault(); return; }

        var monitorObject;
        if (scroll > lastScroll) {
            //down
            monitorObject = $('#chapterbtn' + activeChapter);
            if (monitorObject.length > 0) {
                if (monitorObject.offset().top > scroll && monitorObject.offset().top < scroll + height * 0.6) {
                    monitorObject.click();
                }
            }
        } else {
            //top
            if (activeChapter > 1) {
                monitorObject = $('#chapter' + activeChapter);
                if (monitorObject.length > 0) {
                    if (monitorObject.offset().top > scroll + height * 0.2) {
                        monitor = false;
                        $('html, body').animate({ scrollTop: $('#chapterbtn' + (activeChapter - 1)).offset().top - height * 0.7 }, 1000, function () { monitor = true; });
                    }
                }
            }

        }
        lastScroll = scroll;

    }).scroll();
}
