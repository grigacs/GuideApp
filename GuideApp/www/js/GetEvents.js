var titles = [];
var contents = [];
var intro, picture;

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

    $.getJSON("http://192.168.1.13/museum_server/index.php?language=" + lang).done(function (result) {
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
}


function getIntro(pageName) {

    $.getJSON("http://192.168.1.13/museum_server/index.php?pageName=" + pageName).done( function (result) {
        $.each(result, function (i, data) {
            // all data is Object (result[Object object])
            console.log(data);
            for (var j = 0; j < data.length; j++) {

                intro = data[j]['intro'];
                picture = data[j]['picture'];
                var address = "http://192.168.1.13/museum_server/videos/" + intro;
                var pictureAddress = "http://192.168.1.13/museum_server/images/" + picture;

                var screenHeight = $('.ui-content').innerHeight();
                var screenWidth = $('body').innerWidth();

                screenHeight = screenHeight/2.5;
                screenWidth = screenWidth/1.1;


                $('.loading_image').hide();
                $('.intro').show();
                $('.intro').html('<video width="'+ screenWidth + '" height="'+ screenHeight  +'" controls poster="'+ pictureAddress + '"><source src="' + address + '" type="video/mp4"> Your browser does not support the video tag.</video>');
            }
        });

    });
}



$(document).off('pageshow', '#eventPage').on('pageshow', '#eventPage', function () {
    needRefresh = false;
    getDataFromJson();
});

$(document).on('pagecreate', '#introPage', function () {
    getIntro('#introPage');
});

