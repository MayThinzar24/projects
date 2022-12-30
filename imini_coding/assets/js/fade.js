// Fade Animation
$(window).on('load scroll resize', function () {
    const windowHeight = $(window).height();
    const yScroll = $(window).scrollTop();
    $('.js-fadein').each(function () {
        const targetPosition = $(this).offset().top;
        if (yScroll > targetPosition - windowHeight + 100) {
            $(this).addClass("is-fadein");
        }
    });

    $('.js-fadeup').each(function () {
        const targetPosition = $(this).offset().top;
        if (yScroll > targetPosition - windowHeight + 100) {
            $(this).addClass("is-fadeup");
        }
    });

    $('.js-fadedown').each(function () {
        const targetPosition = $(this).offset().top;
        if (yScroll > targetPosition - windowHeight + 100) {
            $(this).addClass("is-fadedown");
        }
    });

    $('.js-fadeleft ').each(function () {
        const targetPosition = $(this).offset().top;
        if (yScroll > targetPosition - windowHeight + 100) {
            $(this).addClass("is-fadeleft");
            $('.profile-rightblk').addClass('delay');
        }
    });

    $('.js-faderight ').each(function () {
        const targetPosition = $(this).offset().top;
        if (yScroll > targetPosition - windowHeight + 100) {
            $(this).addClass("is-faderight");
        }
    });

    $('.js-slideup ').each(function () {
        const targetPosition = $(this).offset().top;
        if (yScroll > targetPosition - windowHeight + 100) {
            $(this).addClass("is-slideup");
        }
    });

    $('.js-slidedown ').each(function () {
        const targetPosition = $(this).offset().top;
        if (yScroll > targetPosition - windowHeight + 100) {
            $(this).addClass("is-slidedown");
        }
    });

    $('.js-upAnime').each(function () {
        const targetPosition = $(this).offset().top;
        if (yScroll > targetPosition - windowHeight + 100) {
            $(this).addClass("slideAnimeUpDown");
            $(this).children().addClass("slideAnimeDownUp");
        }
    });

    const sensitivePosition = $('.sensitive-sec').offset().top;
    if (yScroll > sensitivePosition - windowHeight + 100){
        $('.drop-blk, .serum-content').addClass('is-fadein');
    }

});

/* SmartPhone */
$(window).on('load resize', function () {
    var myWindowWidth = $(window).width();
    $('.drop-bg, .serum-bg').css('opacity', '0');

    if (myWindowWidth < 767.9) {
        $('.drop-bg').removeClass('js-slideup is-slideup');
        $('.serum-bg').removeClass('js-slidedown is-slidedown');

        $(window).scroll(function () {
            var yScroll = window.pageYOffset;
            var sensitiveTop = $('.sensitive-sec').offset().top - 100;
            if (yScroll > sensitiveTop) {
                $('.drop-bg').addClass('is-faderight');
                $('.serum-bg').addClass('is-fadeleft');
                $('.drop-blk, .serum-content').addClass('delay');
            }
        });

    }
});