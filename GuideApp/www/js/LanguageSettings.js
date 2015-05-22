/**
 * Created by Péter on 2015.05.17..
 */
var storeObject = {
    language:''
};

function changeContent(language) {


    switch (language) {

        case "serbian":
            $(".contentTitle").html("Gradski Muzej");
            $(".contentBody_"+language).show();
            $(".contentBody_hungarian").hide();
            $(".contentBody_german").hide();
            $(".contentBody_english").hide();
            $(".contentBody_croatian").hide();
            $(".contentFooter").html("Muzej Subotica");
            break;

        case "hungarian":
            $(".contentTitle").html("Városi Múzeum");
            $(".contentBody_"+language).show();
            $(".contentBody_serbian").hide();
            $(".contentBody_german").hide();
            $(".contentBody_croatian").hide();
            $(".contentBody_english").hide();
            $(".contentFooter").html("Múzeum Szabadka");
            break;

        case "german":
            $(".contentTitle").html("Stadt Museum");
            $(".contentBody_"+language).show();
            $(".contentBody_hungarian").hide();
            $(".contentBody_serbian").hide();
            $(".contentBody_croatian").hide();
            $(".contentBody_english").hide();
            $(".contentFooter").html("Museum Subotica");
            break;

        case "english":
            $(".contentTitle").html("City Museum");
            $(".contentBody_"+language).show();
            $(".contentBody_hungarian").hide();
            $(".contentBody_german").hide();
            $(".contentBody_serbian").hide();
            $(".contentBody_croatian").hide();
            $(".contentFooter").html("Museum Subotica");
            break;

        case "croatian":
            $(".contentTitle").html("Gradski Muzej");
            $(".contentBody_"+language).show();
            $(".contentBody_hungarian").hide();
            $(".contentBody_german").hide();
            $(".contentBody_english").hide();
            $(".contentBody_serbian").hide();
            $(".contentFooter").html("Muzej Subotica");
            break;

    }
}



$(document).on("tap",".allLanguage li",function(event){
   var name=$(event.target).closest("a").data("name");
    $.session.remove("language");
    $.session.set("language",name);
    changeContent($.session.get("language"));
});


$(document).on("tap","#languages a",function(event){
   var name=$(event.target).closest("a").data("name");
    $.session.set("language",name);
    changeContent($.session.get("language"));
});


