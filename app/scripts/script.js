//LOADER/SPINNER
$(window).bind('load', function() {
    'use strict';
    $('.spn_hol').fadeOut(1500);
});

$(document).ready(function() {
    'use strict';
    //MENU APPEAR AND HIDE
    $(window).scroll(function() {
        if ($(window).scrollTop() > 80) {
            $('.navbar').css({
                'margin-top': '0px',
                'opacity': '1'
            });
            $('.navbar-nav>li>a').css({
                'padding-top': '15px'
            });
            $('.navbar-brand img').css({
                'height': '35px'
            });
            $('.navbar-brand img').css({
                'padding-top': '0px'
            });
            $('.navbar-default').css({
                'background-color': 'rgba(59, 59, 59, 0.7)'
            });
        } else {
            $('.navbar').css({
                'margin-top': '-100px',
                'opacity': '0'
            });
            $('.navbar-nav>li>a').css({
                'padding-top': '45px'
            });
            $('.navbar-brand img').css({
                'height': '45px'
            });
            $('.navbar-brand img').css({
                'padding-top': '20px'
            });
            $('.navbar-default').css({
                'background-color': 'rgba(59, 59, 59, 0)'
            });
        }
    });
    // MENU SECTION ACTIVE
    $('.navbar-nav li a').click(function() {
        $('.navbar-nav li a').parent().removeClass('active');
        $(this).parent().addClass('active');
    });
    // Hilight MENU on SCROLl
    $(window).scroll(function() {
        $('.page').each(function() {
            var bb = $(this).attr('id');
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            var uu = $('.navbar-nav li a[href=#' + bb + ']').parent().removeClass('active');
            if ($(window).scrollTop() > grttop - 1 && $(window).scrollTop() < grttop + hei - 1) {
                uu = $('.navbar-nav li a[href=#' + bb + ']').parent().addClass('active');
            }
        });
    });
    //SMOOTH MENU SCROOL
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    // FIX HOME SCREEN HEIGHT
    setInterval(function() {
        var widnowHeight = $(window).height();
        var containerHeight = $('.home-container').height();
        var padTop = widnowHeight - containerHeight;
        $('.home-container').css({
            'padding-top': Math.round(padTop / 2) + 'px',
            'padding-bottom': Math.round(padTop / 2) + 'px'
        });
    }, 10);
    //WOW JS
    new WOW().init();
});