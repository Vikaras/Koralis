$(function () {
    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyCMVvHVZIaSlpzCxQ14z_6E28CTPnH5sJg',
        events: {
            googleCalendarId: 'en.lithuanian#holiday@group.v.calendar.google.com',
            className: 'gcal-event',
            textColor: '#f3333e',
            backgroundColor: '#f8f9fb',
            borderColor: '#f3333e'
        },
        defaultView: 'month',
        height: 752,
        contentHeight: 702,
        fixedWeekCount: false, //savaiciu kiekis
        selectable: true,
        selectHelper: true,
        editable: true,
        eventLimit: true,
        header:
            {
                left: 'month,agendaWeek',
                center: 'prev,title,next',
                right: ''
            },
        buttonIcons : {
            prev : 'fas fas fa-chevron-left',
            next : 'fas fas fa-chevron-right'
        },
        views:
            {
                month:
                    {
                        columnHeaderFormat: 'dddd'
                    }
            }
    });

    $(".fc-month-button").html('<span class="oi active-btn-color" data-glyph="grid-three-up"></span>')
    $(".fc-agendaWeek-button").html('<span class="oi passive-btn-color" data-glyph="menu"></span>')

    $(".fc-agendaWeek-button").on('click',function () {
        $(this).find('span').removeClass('passive-btn-color').addClass('active-btn-color')
        $(".fc-month-button").find('span').removeClass('active-btn-color').addClass('passive-btn-color')
    })

    $(".fc-month-button").on('click',function () {
        $(this).find('span').removeClass('passive-btn-color').addClass('active-btn-color')
        $(".fc-agendaWeek-button").find('span').removeClass('active-btn-color').addClass('passive-btn-color')
    })
});


