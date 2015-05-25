function getDataFromJson(){
    $.getJSON("http://192.168.1.13/museum_server/index.php", function(result){
        $.each(result, function(i, data){
            // all data is Object (result[Object object])
            for(var j=0;j<data.length;j++) {
                $(".result").append(data[j]['fname'] + " " + data[j]['lname'] + "<br />");
            }
            // you can see data structure at console log
            console.log(data)
        });
        // test for events
        $(".result").append("<a id='clickMe' href='http://192.168.1.13/museum_server/index.php'>FROM</a><br/><a id='clickMe2' href='http://192.168.1.13/museum_server/index.php'>FROM</a>");

        // end
    });

    // test code how can add event handler at appended elements
    $(document).on('tap','#clickMe',function(e){
        e.preventDefault();
        alert('Work')
    });

    $(document).on('tap','#clickMe2',function(){
        alert('Work');
    });
    // test code end
}




$(document).on('pagecreate','#indexPage', function()
{
    getDataFromJson();
});






