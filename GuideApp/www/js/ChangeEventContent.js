//$(function(){
//
//
//    $(document).on("tap",".load-content",function(e){ // click event for load more
//        $('.loading_image').show();
//        e.preventDefault();
//        $(".oneEvent:hidden").slice(0, 3).show(); // select next 3 hidden events and show them
//        $('.loading_image').hide();
//        if($(".oneEvent:hidden").length == 0) {
//            alert("no more events");
//            $(".load-content").hide();
//        }
//    });
//});
function loadMoreEvents() {

        var current=parseInt(localStorage.getItem("events_length"));
        var next=current+3;
        for (var j = current; j < next; j++) {
                $(".event-content").children().eq(j).show();
        }
        localStorage.setItem("events_length",next);

}

