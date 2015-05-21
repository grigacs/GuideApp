/**
 * Created by Péter on 2015.05.17..
 */
var storeObject = {
    language:''
}

function changeContent(language) {


    switch (language) {

        case "Serbian":
            $("#contentTitle").html("Glavna Strana");
            $("#contentBody_"+language).show();
            $("#contentBody_Hungarian").hide();
            $("#contentBody_German").hide();
            $("#contentBody_English").hide();
            $("#contentFooter").html("Dno strana");
            break;

        case "Hungarian":
            $("#contentTitle").html("Oldal teteje");
            $("#contentBody_"+language).show();
            $("#contentBody_Serbian").hide();
            $("#contentBody_German").hide();
            $("#contentBody_English").hide();
            $("#contentFooter").html("Oldal alja");
            break;

        case "German":
            $("#contentTitle").html("Seitenkopf");
            $("#contentBody_"+language).show();
            $("#contentBody_Hungarian").hide();
            $("#contentBody_Serbian").hide();
            $("#contentBody_English").hide();
            $("#contentFooter").html("Fußleiste");
            break;

        case "English":
            $("#contentTitle").html("Page header");
            $("#contentBody_"+language).show();
            $("#contentBody_Hungarian").hide();
            $("#contentBody_German").hide();
            $("#contentBody_Serbian").hide();
            $("#contentFooter").html("Page footer");
            break;


    }
}



$(document).on('pagebeforeshow', '#indexPage', function(){       
    $(document).on('tap', '#english', function(){     
        // store some data
        storeObject.language = 'English';
        //Change page
        $.mobile.changePage("#languagePage");
    });    
});

$(document).on('pagebeforeshow', '#indexPage', function(){       
    $(document).on('tap', '#hungarian', function(){     
        // store some data
        storeObject.language = 'Hungarian';
        //Change page
        $.mobile.changePage("#languagePage");
    });    
});

$(document).on('pagebeforeshow', '#indexPage', function(){       
    $(document).on('tap', '#german', function(){     
        // store some data
        storeObject.language = 'German';
        //Change page
        $.mobile.changePage("#languagePage");
    });    
});

$(document).on('pagebeforeshow', '#indexPage', function(){       
    $(document).on('tap', '#serbian', function(){     
        // store some data
        storeObject.language = 'Serbian';
        //Change page
        $.mobile.changePage("#languagePage");
    });    
});


$(document).on('pagebeforeshow','#languagePage',function(){

    $.session.set("language",storeObject.language);

});



$(document).on("pageshow","#languagePage",function(){
   changeContent($.session.get("language"));
});






