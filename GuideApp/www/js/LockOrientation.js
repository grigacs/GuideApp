$( window ).on( "orientationchange", function( event ) {
    if(window.orientation==0)
    {
        alert("portrait");
    }
    else
        jQuery.mobile.orientationChangeEnabled = false;
});


$( window ).orientationchange();