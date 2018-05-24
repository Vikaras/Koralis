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

    $(".fc-month-button").html('<i class="fas fa-th active-btn-color"></i>')
    $(".fc-agendaWeek-button").html('<i class="fas fa-bars passive-btn-color"></i>')
    $(".fc-prev-button").html('<i class="fas fa-chevron-left"></i>')
    $(".fc-next-button").html('<i class="fas fa-chevron-right"></i>')

    // $('.fc-day').on('mousein', function() {
    //     $(this).addClass('on-hover');
    // }).on('mouseout', function() {
    //     $(this).removeClass('on-hover');
    // });

    $(".fc-agendaWeek-button").on('click',function () {
        $(this).find('i').removeClass('passive-btn-color').addClass('active-btn-color')
        $(".fc-month-button").find('i').removeClass('active-btn-color').addClass('passive-btn-color')
    })

    $(".fc-month-button").on('click',function () {
        $(this).find('i').removeClass('passive-btn-color').addClass('active-btn-color')
        $(".fc-agendaWeek-button").find('i').removeClass('active-btn-color').addClass('passive-btn-color')
    })




});

