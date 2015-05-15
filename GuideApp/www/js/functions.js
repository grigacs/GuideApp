$(document).ready(function(){

    $('#nav-icon1').on("tap",function(){
        $('#revealPanel').panel("open");
        $(this).addClass('open');
    });

    $(window).on("swipe",function(){
        $('#revealPanel').panel("close");
        $('#nav-icon1').removeClass('open');
    });
});

