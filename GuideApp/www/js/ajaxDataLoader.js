$(document).ready(function()
{

    $.getJSON("http://192.168.1.7/ajaxProbaJson/index.php", function(result){
        $.each(result, function(i, data){
                // all data is Object (result[Object object])
                for(var j=0;j<data.length;j++) {
                    $("#result").append(data[j]['fname'] + " " + data[j]['lname'] + "<br />");
                }
                // you can see data structure at console log
                console.log(data)
        });
        // test for events
        $("#result").append("<a id='clickMe' href='http://192.168.1.7/ajaxProbaJson/index.php'>FROM</a>");

        // end
    });

    // test code how can add event handler at appended elements
    $(document).on('tap','#clickMe',function(e){
        e.preventDefault();
        alert('Work');
    });
    // test code end

});