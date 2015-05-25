
var titles=[];
var contents=[];



function getDataFromJson(){


        var lang = localStorage.getItem("Mylanguage");

        $.getJSON("http://192.168.0.3/GuideApp/index.php?language=" + lang, function (result) {
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
                $(d).appendTo($('.event-content'));
                $(d).append("<div class='texts'><p>" + contents[j] + "</p></div>");

            }

        });



    $(document).on('tap','#clickMe',function(e){
        e.preventDefault();
        alert('Work')
    });



}








$(document).on('pageshow','#eventPage', function()
{
    getDataFromJson();

});

