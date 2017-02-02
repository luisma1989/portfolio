//LOADER/SPINNER
$(window).bind('load', function() {
    'use strict';
    $('.spn_hol').fadeOut(1500);
});

$(document).ready(function() {
    $('.modal-fullscreen').on('show.bs.modal', function () {
        setTimeout( function() {
            $('.modal-backdrop').addClass('modal-backdrop-fullscreen');
        }, 0);
    });
    $('.modal-fullscreen').on('hidden.bs.modal', function () {
        $('.modal-backdrop').addClass('modal-backdrop-fullscreen');
    });
});
//MENU APPEAR AND HIDE
$(document).ready(function() {
    'use strict';
    $(window).scroll(function() {
        'use strict';
        if ($(window).scrollTop() > 80) {
            $('.navbar').css({
                'margin-top': '0px',
                'opacity': '1'
            })
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
            })
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
});

// MENU SECTION ACTIVE
$(document).ready(function() {
    $('.navbar-nav li a').click(function() {
        $('.navbar-nav li a').parent().removeClass('active');
        $(this).parent().addClass('active');
    });
});

// Hilight MENU on SCROLl
$(document).ready(function() {
    'use strict';
    $(window).scroll(function() {
        'use strict';
        $('.page').each(function() {
            'use strict';
            var bb = $(this).attr('id');
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            if ($(window).scrollTop() > grttop - 1 && $(window).scrollTop() < grttop + hei - 1) {
                var uu = $('.navbar-nav li a[href=#' + bb + ']').parent().addClass('active');
            } else {
                var uu = $('.navbar-nav li a[href=#' + bb + ']').parent().removeClass('active');
            }
        });
    });
});

//SMOOTH MENU SCROOL
$(function() {
    'use strict';
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
});

// FIX HOME SCREEN HEIGHT
$(document).ready(function() {
    'use strict';
    setInterval(function() {
        'use strict';
        var widnowHeight = $(window).height();
        var containerHeight = $('.home-container').height();
        var padTop = widnowHeight - containerHeight;
        $('.home-container').css({
            'padding-top': Math.round(padTop / 2) + 'px',
            'padding-bottom': Math.round(padTop / 2) + 'px'
        });
    }, 10);
});

//WOW JS
$(document).ready(function() {
    'use strict';
    new WOW().init();
});