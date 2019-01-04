(function ($) {
    "use strict";

    // Script initialization
    $(window).load(function () {
    /* Page loader */;
        $('#loading').delay(600).fadeOut(1000);
    });

    // Slide Carousel
    $(document).ready(function () {
        $(".owl-carousel").each(function (index, el) {
            var config = $(this).data();
            config.navText = ['<i class="icofont icofont-thin-left"></i>', '<i class="icofont icofont-thin-right"></i>'];
            config.smartSpeed = "800";

            if ($(this).hasClass('owl-style2')) {
                config.animateOut = "fadeOut";
                config.animateIn = "fadeIn";
            }

            if ($(this).hasClass('dotsData')) {
                config.dotsData = "true";
            }

            $(this).owlCarousel(config);
        });

    });

    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) {
            $('#return-to-top').addClass('td-scroll-up-visible');
        } else {
            $('#return-to-top').removeClass('td-scroll-up-visible');
        }
    });
    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
    });

    // ===== Scroll to Top 2 ==== 
    $('#return-to-top2').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
    });

    /*  [ Main Menu ]
    - - - - - - - - - - - - - - - - - - - - */
    $(".navbar-toggle").on('click', function () {
        $(this).toggleClass('has-open');
        $("header .menu").toggleClass("has-open");
        $("body").toggleClass("menu-open");
    });

    $("[data-action='toggle-head']").on('click', function () {
        $(this).toggleClass('has-open');
        $(".header-content").toggleClass("has-open");
    });

    $(".menu-icon .fa-bars").on('click', function () {
        $(this).toggleClass('has-open');
        $(".nav-left-bar").toggleClass("has-open");
        $("body").toggleClass("menu-open");
    });

    $(".icon-close i.icofont-close-line").on('click', function () {
        $(this).removeClass('has-open');
        $(".nav-left-bar .icon-close i.icofont-close-line").scrollTop = 0;
        $(".nav-left-bar").removeClass("has-open");
        $(".sidebar-op5").removeClass("has-open");
        $(".icon-bars-op5").removeClass("has-open")
        $("body").removeClass("menu-open");
    });

    // Menu Page op5
    $(".icon-bars-op5 .fa-bars").on('click', function () {
        $(this).toggleClass('has-open');
        $(this).parent().toggleClass('has-open');
        $(".sidebar-op5").toggleClass("has-open");
        $("body").toggleClass("menu-open");
    });

    // ===== Show Form Search ==== 
    $(document).on('click', '.icon-search-icon', function () {
        $(this).parent().parent().toggleClass('active-form');
    });

    /*  [ Sticky Menu ] */
    $('.mid-header ').sticky({ topSpacing: 0 });

    /** COUNT DOWN **/
    $('[data-countdown]').each(function () {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            var fomat = '<i class="icofont icofont-clock-time"></i> <span>%D</span> days . <span>%H</span> hours . <span>%M</span> mins . <span>%S</span> secs';
            $this.html(event.strftime(fomat));
        });
    });

    /** Sales Off **/
    if ($('.countdown-lastest').length > 0) {
        var labels = ['Years', 'Months', 'Weeks', 'Days', 'Hrs', 'Mins', 'Secs'];
        var layout = '<span class="box-count"><span class="number">{dnn}</span> <span class="text">Days</span></span><span class="dot">:</span><span class="box-count"><span class="number">{hnn}</span> <span class="text">Hrs</span></span><span class="dot">:</span><span class="box-count"><span class="number">{mnn}</span> <span class="text">Mins</span></span><span class="dot">:</span><span class="box-count"><span class="number">{snn}</span> <span class="text">Secs</span></span>';
        $('.countdown-lastest').each(function () {
            var austDay = new Date($(this).data('y'), $(this).data('m') - 1, $(this).data('d'), $(this).data('h'), $(this).data('i'), $(this).data('s'));
            $(this).countdown({
                until: austDay,
                labels: labels,
                layout: layout
            });
        });
    }

    $(".fieldset #firstname").blur(function (evt) {
        if ($(this).hasClass('error')) {
            $(".field label", $(this).parent()).hide();
        }
    });

    /** Block SideBar Category **/
    $('.block-sidebar .list-category li.has-child a').click(function () {
        $(this).next().slideToggle();
        $(this).parent().toggleClass('open');
        return false;
    });

    /** Menu, Menu Mega Responsive **/
    $(document).ready(function () {
        $('.menu ul li.parent').append('<span class="plus"></span>');
        $('.menu ul li.parent .plus').click(function () {
            $(this).toggleClass('open').siblings('.submenu, .product-menu').slideToggle();
        });
    });

    /*  [Mobile categori ]
    - - - - - - - - - - - - - - - - - - - - */
    $(".block-nav-categori .block-title").on('click', function () {
        $('.block-nav-categori').find('.block-content .ui-categori').slideToggle('400');
        return false;
    });

    /*  [ All Categorie Sticky]
    - - - - - - - - - - - - - - - - - - - - */
    $(document).on('click', '.nav-toggle-cat', function () {
        $('.is-sticky .nav-top-menu4 ').find('.block-nav-categori .ui-categori').slideToggle();
        return false;
    });

})(jQuery); // End of use strict