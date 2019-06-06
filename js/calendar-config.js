$(document).ready(function(){

    $('#calendar').fullCalendar({
        defaultView: 'month',
        eventLimit: true,
        locale: 'de',
        eventMouseover: function(calEvent, jsEvent) {
            // Create the proper time notation for the tooltip
            var start_ts = new Date(calEvent.start); 
            var end_ts = new Date(calEvent.end); 
            var start_time = start_ts.getHours() + ':' + (start_ts.getMinutes()<10?'0':'') + start_ts.getMinutes();
            var end_time = end_ts.getHours() + ':' + (end_ts.getMinutes()<10?'0':'') + end_ts.getMinutes();
            // Create the tooltip
            var tooltip = '<div class="tooltipevent tooltip shadow"><strong>' + start_time + ' - ' + end_time + '</strong> ' + calEvent.title + '</div>';
            var $tooltip = $(tooltip).appendTo('body');
        
            $(this).mouseover(function(e) {
                $(this).css('z-index', 10000);
                $tooltip;
            }).mousemove(function(e) {
                $tooltip.css('top', e.pageY + 10);
                $tooltip.css('left', e.pageX + 20);
            });
        },
        eventMouseout: function(calEvent, jsEvent) {
            $(this).css('z-index', 8);
            $('.tooltipevent').remove();
        },
        eventSources: [
            {
              url: '../json/wirtschaftskalender.json',
              color: 'green',
              textColor: 'white'
            },
            {
                url: '../json/vereinstermine.json',
                color: '#035E7B',
                textColor: 'white'
            }
          ]
      });
});