$(document).ready(function() {

    // speed of fade in ms (higher is slower)
    var speed = 1000;

    // delay of text staying visible in ms
    var delay = 800;

        function fadeDown() {
            $(".blink").delay(delay).animate({opacity:0},speed,"linear");
            fadeUp();
        }

        function fadeUp() {
            $(".blink").animate({opacity:1},speed,"linear");
            fadeDown();
        }

    fadeDown();

});