$(document).ready(function () {
    var menuAnimation = false;

    $('#nav-icon1').on("tap", function () {
        $('#overlayPanel').panel('open');
        if (menuAnimation == false) {
            $(this).addClass('open');
            menuAnimation = true;
        }
        else{
            $('#overlayPanel').panel('close');
            $(this).removeClass('open');
            menuAnimation = false;
        }
    });



    $(window).on("swiperight", function () {
        $('#overlayPanel').panel('open');
        $('#nav-icon1').addClass('open');
        menuAnimation = true;
    });

    $(window).on("swipeleft", function () {
        $('#overlayPanel').panel('close');
        $('#nav-icon1').removeClass('open');
        menuAnimation = false;
    });

});

