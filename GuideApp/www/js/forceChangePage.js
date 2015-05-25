/**
 * Created by Gergely on 5/22/2015.
 */

$(document).on('pagebeforeshow', '#indexPage', function(){
    var yourLanguage = localStorage.getItem("Mylanguage");
    if(yourLanguage != 'undefined' && yourLanguage != null) {
        $.mobile.changePage("#menuPage", {
                allowSamePageTransition: true,
                transition: 'none'
            });

    }
});
