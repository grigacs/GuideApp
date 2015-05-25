
var titles=[];
var contents=[];
var intro;

function getDataFromJson(){

    var lang=localStorage.getItem("Mylanguage");

    $.getJSON("http://192.168.1.13/museum_server/index.php?language="+lang,function(result){
            console.log(result);
        $.each(result, function(i, data){
            // all data is Object (result[Object object])

            for(var j=0;j<data.length;j++) {
                    titles.push(data[j]['title']);
                  contents.push(data[j]['content']);
            }
            titles= $.grep(titles,function(n){return(n)});
            contents= $.grep(contents,function(n){return(n)});

        });

    });


    $(document).on('tap','#clickMe',function(e){
        e.preventDefault();
        alert('Work')
    });
}




function listEvents(){
    for(var j=0;j<titles.length;j++)
    {
        var d=document.createElement('div');
        $(d).addClass("oneEvent");
        $(d).html("<div class='main-title'>" + titles[j] + "</div>");
        $(d).appendTo($('.event-content'));
        $(d).append("<div class='texts'><p>" +contents[j] + "</p></div>");

    }
}


function getIntro(pageName){

    $.getJSON("http://192.168.1.13/museum_server/index.php?pageName="+pageName,function(result){
        console.log(result);
        $.each(result, function(i, data){
            // all data is Object (result[Object object])

            for(var j=0;j<data.length;j++) {

                intro = data[j]['intro'];
                var address = "http://192.168.1.13/" + intro;
                console.log(intro);

                $('.intro').html('<div><video width="320" height="240" controls><source src="'+address+'" type="video/mp4"></video></div>');
            }

        });

    });

}



$(document).on('pageshow','#eventPage', function()
{
    getDataFromJson();
    listEvents();
});

$(document).on('pageshow','#introPage',function(){
    getIntro('#introPage');
});

