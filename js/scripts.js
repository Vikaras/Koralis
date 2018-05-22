$(function () {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
        defaultView: 'month',
        height: 752,
        contentHeight: 702,
        fixedWeekCount: false, //savaiciu kiekis
        header:
            {
                left: 'month,agendaWeek',
                center: 'prev,title,next',
                right: ''
            },
            views:
                {
                    month:
                        {
                        columnHeaderFormat: 'dddd'
                    }
                }

    })
    $(".fc-month-button").html('<i class="fas fa-th"></i>')
    $(".fc-agendaWeek-button").html('<i class="fas fa-bars"></i>')
    $(".fc-prev-button").html('<i class="fas fa-chevron-left"></i>')
    $(".fc-next-button").html('<i class="fas fa-chevron-right"></i>')

});

