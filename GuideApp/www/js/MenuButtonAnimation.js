function menuAnimation(thisPage) {

    var menuAnimation = false;
    var toggleOpen = false;

    $(document).off("tap", '.navIconAnimation').on("tap", '.navIconAnimation', function () {
        $('#overlayPanel' + thisPage).panel('open');
        if (menuAnimation == false) {
            $(this).addClass('open');
            menuAnimation = true;
        }
        else {
            $('#overlayPanel' + thisPage).panel('close');
            $(this).removeClass('open');
            menuAnimation = false;
        }
    });


    $(document).off("panelbeforeclose", '#overlayPanel' + thisPage).on("panelbeforeclose", '#overlayPanel' + thisPage, function () {
        $('.navIconAnimation').removeClass('open');
        $('.showLanguage').removeClass('openToggle');
        $('.allLanguage').hide();
        menuAnimation = false;
        toggleOpen = false;
    });

    /*$(window).off("swiperight").on("swiperight", function () {
        $('#overlayPanel' + thisPage).panel('open');
        $('.navIconAnimation').addClass('open');
        menuAnimation = true;
    });

    $(window).off("swipeleft").on("swipeleft", function () {
        $('#overlayPanel' + thisPage).panel('close');
        $('.navIconAnimation').removeClass('open');
        menuAnimation = false;
    });*/

    $( "body" ).off("touchstart").on( "touchstart", function( e ) {
        if( e.originalEvent.touches.length == 1 ) { // one finger touch
// Remember start location.
            var touch = e.originalEvent.touches[ 0 ];
            startLoc = { x : touch.pageX, y : touch.pageY };
        }
    } );

    $( "body").off("touchmove").on( "touchmove", function( e ) {
// Only check first move after the touchstart.
        if( startLoc ) {
            var touch = e.originalEvent.touches[ 0 ];
// Check if the horizontal movement is bigger than the vertical movement.
            if( Math.abs( startLoc.x - touch.pageX ) >
                Math.abs( startLoc.y - touch.pageY ) &&
                Math.abs(startLoc.x) < Math.abs(touch.pageX)) {
                $('#overlayPanel' + thisPage).panel('open');
                $('.navIconAnimation').addClass('open');
                menuAnimation = true;
// Prevent default, like scrolling.
                e.preventDefault();
            }else if( Math.abs( startLoc.x - touch.pageX ) >
                Math.abs( startLoc.y - touch.pageY ) &&
                Math.abs(startLoc.x) > Math.abs(touch.pageX)){
                $('#overlayPanel' + thisPage).panel('close');
                $('.navIconAnimation').removeClass('open');
                menuAnimation = false;
                e.preventDefault();
            }
            startLoc = null;
        }
    } );



    $(document).off("tap", '.resetMenuAnimation').on("tap", '.resetMenuAnimation', function () {
        $('.navIconAnimation').removeClass('open');
        $('#overlayPanel' + thisPage).panel('close');
        menuAnimation = false;
    });

    $(document).off("tap",'.showLanguage').on("tap", '.showLanguage', function(e){
        e.preventDefault();
        $('.allLanguage').fadeToggle('down').slow;
        if(toggleOpen == false){
            $(this).addClass('openToggle');
            toggleOpen = true;
        }else{
            $(this).removeClass('openToggle');
            toggleOpen = false;
        }
    });

}


$(document).on('pageshow', function () {
    var PageID = $.mobile.activePage.attr('id');
    menuAnimation(PageID);

    var screen = $.mobile.getScreenHeight();


    /* content div has padding of 1em = 16px (32px top+bottom). This step
     can be skipped by subtracting 32px from content var directly. */
    var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height();
    var content = screen - 42 - 42 - contentCurrent;

    $(".ui-content").height(content);

    var TileHeight = content/3;
    var TextMargin = TileHeight/2-13;



    $('.title').css('margin-top', TextMargin+'px');

    $(".tile").height(TileHeight);



});





