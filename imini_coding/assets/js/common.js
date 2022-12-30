$(document).ready(function () {
    /* Youtube Lightbox */
    'use strict';
    $('.js-tvcm').flashy({
        prevShowClass: 'fx-bounceInLeft',
        nextShowClass: 'fx-bounceInRight',
        prevHideClass: 'fx-bounceOutRight',
        nextHideClass: 'fx-bounceOutLeft'
    });

    /* Accordion */

    $(".accor-ttl").click(function () {
        var dropDown = $(this).closest('.accordion-item').find('.accor-content');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.acc').find('.accor-ttl.active').removeClass('active');
            $(this).addClass('active');

        }
        dropDown.stop(false, true).slideToggle();
    });

});