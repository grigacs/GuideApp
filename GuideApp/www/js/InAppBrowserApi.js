/**
 * Created by Gergely on 5/26/2015.
 */

function openApiBrowser() {

    $('.introLink').on("tap", function (e) {
        e.preventDefault();
        var ref = window.open('http://192.168.0.7/museum_server/embed_video.html', '_blank');
        ref.addEventListener('loadstart', function () {
            alert('start: ' + event.url);
        });
        ref.addEventListener('loadstop', function () {
            alert('stop: ' + event.url);
        });
        ref.addEventListener('exit', function () {
            alert(event.type);
        });
    });
}

$(document).on("pagecreate", "#menuPage", function() {
    openApiBrowser();
});