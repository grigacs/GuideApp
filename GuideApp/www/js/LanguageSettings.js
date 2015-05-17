/**
 * Created by Péter on 2015.05.17..
 */
$(document).ready(function () {



    $("#contentTitle").html("Page header");
    $("#contentBody_English").show();
    $("#contentBody_Hungarian").hide();
    $("#contentBody_Croatian").hide();
    $("#contentBody_Serbian").hide();
    $("#contentFooter").html("Page footer");


});

function changeContent(language) {


    switch (language) {

        case "Serbian":
            $("#contentTitle").html("Glavna Strana");
            $("#contentBody_"+language).show();
            $("#contentBody_Hungarian").hide();
            $("#contentBody_Croatian").hide();
            $("#contentBody_English").hide();
            $("#contentFooter").html("Dno strana");
            break;

        case "Hungarian":
            $("#contentTitle").html("Oldal teteje");
            $("#contentBody_"+language).show();
            $("#contentBody_Serbian").hide();
            $("#contentBody_Croatian").hide();
            $("#contentBody_English").hide();
            $("#contentFooter").html("Oldal alja");
            break;

        case "Croatian":
            $("#contentTitle").html("Glavna Strana");
            $("#contentBody_"+language).show();
            $("#contentBody_Hungarian").hide();
            $("#contentBody_Serbian").hide();
            $("#contentBody_English").hide();
            $("#contentFooter").html("Dno strana");
            break;

        case "English":
            $("#contentTitle").html("Page header");
            $("#contentBody_"+language).show();
            $("#contentBody_Hungarian").hide();
            $("#contentBody_Croatian").hide();
            $("#contentBody_Serbian").hide();
            $("#contentFooter").html("Page footer");
            break;


    }
}