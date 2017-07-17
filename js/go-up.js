const MAX_HEIGHT = 120;
const TIME_SCROL = 1000;

$(window).scroll(function() {
    if ($(this).scrollTop() > MAX_HEIGHT) {
        $('.scroll-up').fadeIn();
    }
    else {
        $('.scroll-up').fadeOut();
    }
});

$('.scroll-up').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, TIME_SCROL);
    return false;
});