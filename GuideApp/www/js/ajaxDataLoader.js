//function getDataFromJson(){
//    $.getJSON("http://192.168.1.8/ajaxProbaJson/index.php", function(result){
//        $.each(result, function(i, data){
//            // all data is Object (result[Object object])
//            for(var j=0;j<data.length;j++) {
//                $(".result").append(data[j]['fname'] + " " + data[j]['lname'] + "<br />");
//            }
//            // you can see data structure at console log
//            console.log(data)
//        });
//        // test for events
//        $(".result").append("<a id='clickMe' href='http://192.168.1.8/ajaxProbaJson/index.php'>FROM</a><br/><a id='clickMe2' href='http://192.168.1.8/ajaxProbaJson/index.php'>FROM</a>");
//
//        // end
//    });
//
//    // test code how can add event handler at appended elements
//    $(document).on('tap','#clickMe',function(e){
//        e.preventDefault();
//        alert('Work')
//    });
//
//    $(document).on('tap','#clickMe2',function(){
//        alert('Work');
//    });
//    // test code end
//}
//
//
//
//
//$(document).on('pagecreate','#indexPage', function()
//{
//    getDataFromJson();
//});
//



document.addEventListener("backbutton", function() {
    if ( $('.ui-page-active').attr('id') == 'menuPage' || $('.ui-page-active').attr('id') == 'indexPage') {
        exitAppPopup();
    } else {
        history.back();
    }
}, false);

function exitAppPopup() {

    var language=localStorage.getItem("Mylanguage");
    var msg="";
    var accept="";
    var decline="";
    var exit="";
    switch(language){
        case "english":
                msg="are you sure you want to exit?";
                accept="yes";
                decline="no";
                exit="Exit";
            break;
        case "hungarian":
                msg="biztos benne, hogy ki akar lépni?";
            accept="igen";
            decline="nem";
            exit="Kilépés";
            break;
        case "serbian":
                msg="da li ste sigurni da želite da izađete?";
            accept="da";
            decline="ne";
            exit="Izlaz";
            break;
        case "croatian":
                msg="Jeste li sigurni da želite izaći?";
            accept="da";
            decline="ne";
            exit="Izlaz";
            break;
        case "german":
                msg="Sie sind sicher, dass Sie beenden wollen?";
            accept="ja";
            decline="nein";
            exit="Ausgang";
            break;
    }



    navigator.notification.confirm(
        msg
        , function(button) {
            if (button == 2) {
                localStorage.removeItem("changedLanguage");
                navigator.app.exitApp();
            }
        }
        , exit
        , accept+','+decline
    );
    return false;
}

function setCookie(c_name,value,exdays){var exdate=new Date();exdate.setDate(exdate.getDate() + exdays);var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());document.cookie=c_name + "=" + c_value;}
function getCookie(c_name){var c_value = document.cookie;var c_start = c_value.indexOf(" " + c_name + "=");if (c_start == -1){c_start = c_value.indexOf(c_name + "=");}if (c_start == -1){c_value = null;}else{c_start = c_value.indexOf("=", c_start) + 1;var c_end = c_value.indexOf(";", c_start);if (c_end == -1){c_end = c_value.length;}c_value = unescape(c_value.substring(c_start,c_end));}return c_value;}
function delCookie(name){document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';}