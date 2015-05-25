/**
 * Created by Péter on 2015.05.17..
 */
var storeObject = {
    language:''
};

function changeContent(language) {

    if(language=="" || language==undefined)
    language=localStorage.getItem(Mylanguage);

    switch (language) {

        case "serbian":
            $(".contentTitle").html("Gradski Muzej");
            $(".contentBody_"+language).show();
            $(".contentBody_hungarian").hide();
            $(".contentBody_german").hide();
            $(".contentBody_english").hide();
            $(".contentBody_croatian").hide();
            $(".contentFooter").html("Muzej Subotica");
            $(".menuContentLang").html("Meni");
            $(".menuContentLangall").html("Jezici");
            $(".menuContentSerbian").html("Srpski");
            $(".menuContentLangHun").html("Mađarski");
            $(".menuContentLangCro").html("Hrvatski");
            $(".menuContentEng").html("Engleski");
            $(".menuContentLangGr").html("Nemački");
            $(".menuContentLangAbout").html("Oko");
            break;

        case "hungarian":
            $(".contentTitle").html("Városi Múzeum");
            $(".contentBody_"+language).show();
            $(".contentBody_serbian").hide();
            $(".contentBody_german").hide();
            $(".contentBody_croatian").hide();
            $(".contentBody_english").hide();
            $(".contentFooter").html("Múzeum Szabadka");
            $(".menuContentLang").html("Menü");
            $(".menuContentLangall").html("Nyelvek");
            $(".menuContentSerbian").html("Szerb");
            $(".menuContentLangHun").html("Magyar");
            $(".menuContentLangCro").html("Horvát");
            $(".menuContentEng").html("Angol");
            $(".menuContentLangGr").html("Német");
            $(".menuContentLangAbout").html("Rólunk");
            break;

        case "german":
            $(".contentTitle").html("Stadt Museum");
            $(".contentBody_"+language).show();
            $(".contentBody_hungarian").hide();
            $(".contentBody_serbian").hide();
            $(".contentBody_croatian").hide();
            $(".contentBody_english").hide();
            $(".contentFooter").html("Museum Subotica");
            $(".menuContentLang").html("Menü");
            $(".menuContentLangall").html("Sprache");
            $(".menuContentSerbian").html("Serbisch");
            $(".menuContentLangHun").html("Ungarisch");
            $(".menuContentLangCro").html("Kroatisch");
            $(".menuContentEng").html("Englisch");
            $(".menuContentLangGr").html("Deutsch");
            $(".menuContentLangAbout").html("Über");
            break;

        case "english":
            $(".contentTitle").html("City Museum");
            $(".contentBody_"+language).show();
            $(".contentBody_hungarian").hide();
            $(".contentBody_german").hide();
            $(".contentBody_serbian").hide();
            $(".contentBody_croatian").hide();
            $(".contentFooter").html("Museum Subotica");
            $(".menuContentLang").html("Menu");
            $(".menuContentLangall").html("Languages");
            $(".menuContentSerbian").html("Serbian");
            $(".menuContentLangHun").html("Hungarian");
            $(".menuContentLangCro").html("Croatian");
            $(".menuContentEng").html("English");
            $(".menuContentLangGr").html("German");
            $(".menuContentLangAbout").html("About");
            break;

        case "croatian":
            $(".contentTitle").html("Gradski Muzej");
            $(".contentBody_"+language).show();
            $(".contentBody_hungarian").hide();
            $(".contentBody_german").hide();
            $(".contentBody_english").hide();
            $(".contentBody_serbian").hide();
            $(".contentFooter").html("Muzej Subotica");
            $(".menuContentLang").html("Meni");
            $(".menuContentLangall").html("Jezici");
            $(".menuContentSerbian").html("Srpski");
            $(".menuContentLangHun").html("Hungarian");
            $(".menuContentLangCro").html("Mađarski");
            $(".menuContentEng").html("Engleski");
            $(".menuContentLangGr").html("Njemački");
            $(".menuContentLangAbout").html("O");
            break;

    }
}

$(document).on('pageinit', '#menuPage',function() {

    var MyLanguage = localStorage.getItem("Mylanguage");
    if (MyLanguage != "undefined" || MyLanguage != null) {
        changeContent(MyLanguage);
    }
});

    $(document).on("tap", ".allLanguage li", function (event) {
        var name = $(event.target).closest("a").data("name");
        $.session.remove("language");
        $.session.set("language", name);
        localStorage.setItem("Mylanguage", name);
        changeContent($.session.get("language"));
        

    });


    $(document).on("tap", "#languages a", function (event) {
        var name = $(event.target).closest("a").data("name");
        $.session.set("language", name);
        localStorage.setItem("Mylanguage", name);
        changeContent($.session.get("language"));
    });

