$(document).ready(function () {

    /* Menu JS */
    $('.menu-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.toggle-nav').fadeToggle();
    });

    /* Header Height   */
    $headerHeight = $('.header .header-inner').outerHeight();
    $nav = $('.toggle-nav');
    function setHeight() {
        $content = $('.mv-sec');
        $content.css('margin-top', $headerHeight);
        if (window.matchMedia('(max-width: 750.9px)').matches) {
            var navheight = window.innerHeight - $headerHeight;
            $nav.css('height', navheight);
        } else {
            $nav.css('height', 'inherit');
        }
    }
    setHeight();
    $(window).resize(function () {
        setHeight();
    });

});

$(document).ready(function () {
    /* Youtube Lightbox */
    'use strict';
    $('.js-movie').flashy({
        prevShowClass: 'fx-bounceInLeft',
        nextShowClass: 'fx-bounceInRight',
        prevHideClass: 'fx-bounceOutRight',
        nextHideClass: 'fx-bounceOutLeft'
    });

    /* Smooth Scroll */
    $('.anchor-list a').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - $headerHeight
        }, 900);
    });
});

//Smooth scrolling from one page to a specific section in self page and another page
$(document).ready(function () {
    if (window.matchMedia('(max-width: 750.9px)').matches) {
        setTimeout(function () {
            if (location.hash) {
                window.scrollTo(0, 0);
                target = location.hash.split('#');
                smoothScrollTo($('#' + target[1]));
            }
        }, 1);

        $('.anchor-list li a[href*="#"]:not([href="#"])').click(function () {
            $('.menu-toggle').toggleClass('active');
            $('.toggle-nav').fadeToggle('is-show');
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname) {
                smoothScrollTo($(this.hash));
                return false;
            }
        });

        function smoothScrollTo(target) {
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - $headerHeight
                }, 900);
            }
        }
    } else {
        $('.toggle-nav').show();
    }
});

$(document).ready(function () {
    $(".slick-js").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        cssEase: "linear",
        autoplaySpeed: 1000,
        variableWidth: false
    });
});