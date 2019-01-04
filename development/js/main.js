(function($){
	"use strict";
	
	$('.block-header .menubar').on('click', function() {
		$(this).toggleClass('menu_open');
		$(this).parents('body').toggleClass('menu_open');
	});

	// Zoom Web on in all browser
    function Zoom() {
        var winHeight = $(window).height();
        var zoom = 1;
        var bodyMaxHeight = 1080;
        zoom = winHeight/bodyMaxHeight;
        /* Firefox */
        var winWidth = $(window).width();
        var widthFirefox = winWidth/zoom;
        if(navigator.userAgent.indexOf("Firefox") != -1) {
            $('#Zoom').css({
                '-moz-transform': 'scale('+zoom+')',  /* Firefox */
                'transform-origin': '0 0',
                'width': widthFirefox,
            });
        } else {
            $('#Zoom').css({
                'zoom': zoom,
            });
        }
    }
    Zoom();
    $(window).on('load resize', function() {
        Zoom();
    });

})(jQuery); // End of use strict