/**
 * Created by Gergely on 5/26/2015.
 */
var screenHeight = $('.ui-content').innerHeight();
var screenWidth = $('body').innerWidth();

screenHeight = screenHeight / 2.5;
screenWidth = screenWidth / 1.1;

$(document).ready(function () {

    $('.intro').html('<video id="myVideo"  controls><source src="videos/intro_video.mp4" type="video/mp4"> Your browser does not support the video tag.</video>');
    var video = document.getElementById("myVideo");
    video.play();

});