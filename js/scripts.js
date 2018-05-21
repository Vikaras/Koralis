$(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
        height: 752,
        contentHeight: 702,
        fixedWeekCount: false, //savaiciu kiekis
        header:
            {
                left: 'month,basicDay',
                center: 'prev,title,next',
                right: ''
            }
    })

});