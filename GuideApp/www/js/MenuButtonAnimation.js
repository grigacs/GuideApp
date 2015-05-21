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

    $(window).off("swiperight").on("swiperight", function () {
        $('#overlayPanel' + thisPage).panel('open');
        $('.navIconAnimation').addClass('open');
        menuAnimation = true;
    });

    $(window).off("swipeleft").on("swipeleft", function () {
        $('#overlayPanel' + thisPage).panel('close');
        $('.navIconAnimation').removeClass('open');
        menuAnimation = false;
    });

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
});





