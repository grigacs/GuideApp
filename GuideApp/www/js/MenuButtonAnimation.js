function menuAnimation(thisPage) {

    var menuAnimation = false;
        $('.navIconAnimation').on("tap", function (e) {
            e.preventDefault();
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

        $(window).on("swiperight", function () {
            $('#overlayPanel' + thisPage).panel('open');
            $('.navIconAnimation').addClass('open');
            menuAnimation = true;
        });

        $(window).on("swipeleft", function () {
            $('#overlayPanel' + thisPage).panel('close');
            $('.navIconAnimation').removeClass('open');
            menuAnimation = false;
        });

        $('.resetMenuAnimation').on("tap", function () {
            $('#overlayPanel' + thisPage).panel('close');
            $('.navIconAnimation').removeClass('open');
            menuAnimation = false;
        });


}





$(document).on('pageshow', function () {
       var PageID = $.mobile.activePage.attr('id');
        menuAnimation(PageID);

});








