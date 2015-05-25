function getInformation() {

    var lang = localStorage.getItem("Mylanguage");

    $.getJSON("http://192.168.0.3/GuideApp/index.php?lang=" + lang, function (result) {


        console.log(result);
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
        for (var j = 0; j < titles.length; j++) {

            var d = document.createElement('div');
            $(d).addClass("oneEvent");
            $(d).html("<div class='main-title'>" + titles[j] + "</div>");
            $(d).appendTo($('.info-content'));
            $(d).append("<pre class='texts'>" + contents[j] + "</pre>");

        }

    });


}



$(document).on('pageshow','#infoPage',function(){
    getInformation();
});