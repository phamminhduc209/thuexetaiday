(function ($) {
    "use strict";

    // Slide Carousel
    $(document).ready(function () {
        $(".owl-carousel").each(function (index, el) {
            var config = $(this).data();
            config.navText = ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'];
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

    jQuery.browser = {};
    (function () {
        jQuery.browser.msie = false;
        jQuery.browser.version = 0;
        if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
            jQuery.browser.msie = true;
            jQuery.browser.version = RegExp.$1;
        }
    })();

    $(document).ready(function () {
        if ($.browser.msie && $.browser.version == 6) {
            $('.date, .datetime, .time').bgIframe();
        }
        $('.inDatepicker').datepicker({
            dateFormat: 'dd/mm/yy'
        });
        var monthProduct = 1;
        var date_current = new Date;
        var current = new Date(date_current.getMonth() + 1 + "/" + (date_current.getDate() + 1) + "/" + date_current.getFullYear());
        var maxdate = new Date("12/01/" + (date_current.getFullYear() + 3));

        $("#departured_air-sidebar").datepicker({
            gotoCurrent: !0,
            changeMonth: !0,
            changeYear: !0,
            minDate: current,
            maxDate: maxdate,
            numberOfMonths: monthProduct,
            dateFormat: 'dd/mm/yy',
            onSelect: function (selectedDate) {
                $("#arrival_air-sidebar").datepicker("option", "minDate", selectedDate);
                tinh_ngay_sidebar();
            }
        });

        $("#arrival_air-sidebar").datepicker({
            gotoCurrent: !0,
            changeMonth: !0,
            changeYear: !0,
            minDate: current,
            maxDate: maxdate,
            numberOfMonths: monthProduct,
            dateFormat: 'dd/mm/yy',
            onSelect: function (selectedDate) {
                $("#departured_air-sidebar").datepicker("option", "maxDate", selectedDate);
                tinh_ngay_sidebar();
            }
        });
        $('#departured_air-sidebar').datepicker("setDate", new Date(date_current.getFullYear(), date_current.getMonth(), (date_current.getDate())));
        $('.ui-datepicker-current-day').click();
    });
    function tinh_ngay_sidebar() {
        var departured_date = $("#departured_air-sidebar").val();
        var arrival_date = $("#arrival_air-sidebar").val();
        departured = to_date_sidebar(departured_date);
        arrival = to_date_sidebar(arrival_date);
        result = (arrival - departured) / (60 * 60 * 24 * 1000);
        if (departured.getMonth() == arrival.getMonth()) {
            ++result;
        }
        $('#result_date-sidebar').html('Thời gian sử dụng: <b>' + result + ' Ngày<b>');
        $('#day_air-sidebar').val(result);

    }
    function to_date_sidebar(d) {
        var ds = d.split('/');
        return new Date(ds[2], ds[1], ds[0]);
    }

    $(document).ready(function () {
        $(".bxslider").bxSlider({
            controls: true,
            pagerCustom: '.pro-thumb-img',
            infiniteLoop: false,
            hideControlOnEnd: true,
            mode: 'fade',
            nextText: '›',
            prevText: '‹'
        });
        $(".pro-thumb-img").bxSlider({
            slideMargin: 5,
            maxSlides: 6,
            pager: false,
            controls: true,
            slideWidth: 110,
            infiniteLoop: false,
            nextText: '›',
            prevText: '‹'
        });
    });

})(jQuery); // End of use strict