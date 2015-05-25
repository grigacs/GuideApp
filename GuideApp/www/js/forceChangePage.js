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



$(document).on('pagebeforeshow', '#menuPage', function(event){
    var changedLanguage = localStorage.getItem("changedLanguage");
    if(changedLanguage =="yes"){
        $.mobile.changePage("#eventPage", {
            allowSamePageTransition: true,
            transition: 'none',
            showLoadMsg:true
        });
        localStorage.setItem("changedLanguage","no");
    }

});
