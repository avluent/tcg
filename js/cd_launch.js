$(document).ready(function() {

// Programming the Timer
var launchDate = 'Mar 8, 2019 19:30:00';
var countDownDate = new Date(launchDate).getTime();

//Setup the function
var x = setInterval(function() {
   // Today
   var now = new Date().getTime();
   // The distance from now until the launch date
   var distance = countDownDate - now;
   // Calculation of days, hours, minutes and seconds
   var days = Math.floor(distance / (1000*60*60*24));
   var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
   var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
   var seconds = Math.floor((distance % (1000*60)) / 1000);

   $('#launchtimer').html(days + ' Tag(e) ' + hours + ' Stunde(n) ' + minutes + ' Minute(n) ' + seconds + ' Sekunde(n)');

   // If there is still time
   if (distance > 0) {
      $(".container").addClass("slick-arrow");
      $('.launch').css({visibility:'inherit'});
      $('body').css("overflow-y","hidden");
   }
   // If time is up
   if (distance < 0) {
      clearInterval(x);
      $('.launch').hide();
      $('body').css("overflow-y", "scroll");
      $('.container').hide().removeClass('slick-arrow').fadeIn(1000);
   }

},0);

});