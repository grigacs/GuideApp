$(document).ready(function(){
    var menuAnimationClick = false;


    $('#nav-icon1').on("tap",function(){
        $('#overlayPanel').panel('open');
        if(menuAnimationClick==false) {
            $(this).addClass('open');
            menuAnimationClick = true;
        }
        else if (menuAnimationClick == true) {
            $('#overlayPanel').panel('close');
            $(this).removeClass('open');
            menuAnimationClick = false;
        }
    });

    $(window).on("swiperight",function(){
        $('#overlayPanel').panel('open');
        $('#nav-icon1').addClass('open');
    });

    $(window).on("swipeleft",function(){
        $('#overlayPanel').panel('close');
        $('#nav-icon1').removeClass('open');
    });

});

