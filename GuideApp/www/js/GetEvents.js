var titles = [];
var contents = [];
var lists=[];
var info_titles=[];
var info_contents=[];
var kontakt_titles=[];
var kontakt_contents=[];

function getDataFromJson() {
    $('.loading_image').show();
    titles = [];
    contents = [];

    var lang = localStorage.getItem("Mylanguage");
    var myHref = location.href;

    if(myHref.indexOf("#eventPage") >= 0 && needRefresh == true){

        $.mobile.changePage("#eventPage", {
            allowSamePageTransition: false,
            transition: 'none'
        });

    }

    $.getJSON("http://192.168.1.5/museum_server/index.php?language=" + lang).done(function (result) {
        $.each(result, function (i, data) {
            // all data is Object (result[Object object])

            for (var j = 0; j < data.length; j++) {
                titles.push(data[j]['title']);
                contents.push(data[j]['content']);
            }
            titles = $.grep(titles, function (n) {
                return (n)
            });
            contents = $.grep(contents, function (n) {
                return (n)
            });

        });
        listEvents();
    });
}


function listEvents() {
    $('.event-content').html("");
    for (var j = 0; j < titles.length; j++) {
        var d = document.createElement('div');
        $(d).addClass("oneEvent");
        $(d).html("<div class='main-title'>" + titles[j] + "</div>");
        $(d).append("<div class='texts'><p>" + contents[j] + "</p></div>");
        $(d).appendTo($('.event-content'));
    }

    $('.loading_image').hide();
    $('.event-content').show();
    for(j=0;j<3;j++)
        $(".event-content").children().eq(j).show();
    localStorage.setItem("events_length",3);

    var lang = localStorage.getItem("Mylanguage");
    var text="";

    switch(lang){
        case "english":
            text="Previous events";

            break;
        case "serbian":
            text="Prethodni događaji";

            break;
        case "hungarian":
            text="Korábbi események";

            break;
        case "croatian":
            text="Prethodni događaji";

            break;
        case "german":
            text="früheren Veranstaltungen";

            break;
    }
    $(".load-content").html(text);
    $(".load-content").show();

    setInterval(function(){
        var length = $(".event-content").children().size();
        var current=parseInt(localStorage.getItem("events_length"));
        if(current >= length) {
            $(".load-content").hide();
        }
    },200);
}


function listMapInformation() {
    $('.map-content').html("");
    for (var j = 0; j < lists.length; j++) {
        var d = document.createElement('div');
        $(d).addClass("oneEvent");
        $(d).html("<pre>" + lists[j] + "</pre>");
        $(d).appendTo($('.map-content'));
    }

    $('.loading_image').hide();
    $('.map-content').show();
}


function listInformation() {
    $('.info-content').html("");
    for (var j = 0; j < info_titles.length; j++) {

        var d = document.createElement('div');
        $(d).addClass("oneEvent");
        $(d).html("<div class='main-title'>" + info_titles[j] + "</div>");
        $(d).append("<pre class='texts'>" + info_contents[j] + "</pre>");
        $(d).append("<div class='main-title'>"+kontakt_titles[j]+ "</div>");
        $(d).append("<pre class='texts'>"+kontakt_contents[j]+"</pre>");
        $(d).appendTo($('.info-content'));
    }

    $('.loading_image').hide();
    $('.info-content').show();
}




function getMapInformation() {
    $('.loading_image').show();
    lists=[];

    var lang = localStorage.getItem("Mylanguage");
    var myHref = location.href;

    if(myHref.indexOf("#mapPage") >= 0 && needRefresh == true){

        $.mobile.changePage("#mapPage", {
            allowSamePageTransition: false,
            transition: 'none'
        });

    }

    $.getJSON("http://192.168.1.5/museum_server/index.php?language=" + lang).done(function (result) {
        $.each(result, function (i, data) {
            // all data is Object (result[Object object])
            console.log(result);
            for (var j = 0; j < data.length; j++) {
                lists.push(data[j]['list']);

            }
            lists = $.grep(lists, function (n) {
                return (n)
            });


        });
        listMapInformation();
    });
}



function getInformation() {
    $('.loading_image').show();
    info_contents=[];
    info_titles=[];
    kontakt_contents=[];
    kontakt_titles=[];

    var lang = localStorage.getItem("Mylanguage");
    var myHref = location.href;

    if(myHref.indexOf("#infoPage") >= 0 && needRefresh == true){

        $.mobile.changePage("#infoPage", {
            allowSamePageTransition: false,
            transition: 'none'
        });

    }

    $.getJSON("http://192.168.1.5/museum_server/index.php?language=" + lang).done(function (result) {
        $.each(result, function (i, data) {
            // all data is Object (result[Object object])

            for (var j = 0; j < data.length; j++) {
                info_contents.push(data[j]['info_content']);
                info_titles.push(data[j]['info_title']);
                kontakt_contents.push(data[j]['kontakt_content']);
                kontakt_titles.push(data[j]['kontakt_title']);

            }
            info_contents = $.grep(info_contents, function (n) {
                return (n)
            });
            info_titles = $.grep(info_titles, function (n) {
                return (n)
            });
            kontakt_titles = $.grep(kontakt_titles, function (n) {
                return (n)
            });
            kontakt_contents = $.grep(kontakt_contents, function (n) {
                return (n)
            });


        });
        listInformation();
    });
}




$(document).off('pageshow', '#eventPage').on('pageshow', '#eventPage', function () {
    needRefresh = false;
    getDataFromJson();
});

$(document).off('pageshow', '#mapPage').on('pageshow', '#mapPage', function () {
    needRefresh = false;
    getMapInformation();
});

$(document).off('pageshow', '#infoPage').on('pageshow', '#infoPage', function () {
    needRefresh = false;
    getInformation();
});


$(document).on("tap",".load-content",function(){
    loadMoreEvents();
});
