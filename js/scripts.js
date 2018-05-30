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
        eventSources: [

            {
                events: [
                    {
                        title  : 'Call with Sam',
                        start  : '2018-05-09T15:15:00',
                    },
                    {
                        title  : 'Secodment',
                        start  : '2018-05-11',
                        end    : '2018-05-13',
                    },
                    {
                        title  : 'Design review',
                        start  : '2018-05-15T08:55:00',
                    },
                    {
                        title  : 'QA',
                        start  : '2018-05-15T16:10:00',
                    },
                    {
                        title  : 'Vocation',
                        start  : '2018-05-23',
                        end    : '2018-05-26',
                    },
                    {
                        title  : 'Call with Dave',
                        start  : '2018-05-26T13:30:00',
                    },
                    {
                        title  : 'Meet with Dave',
                        start  : '2018-05-28T17:00:00',
                    }
                ],

                // backgroundColor:'#ffe53b'
                // color: 'black',     // an option!
                // textColor: 'yellow' // an option!
            }
        ],

        eventRender: function(event, element) {
            var title = event.title
            var time = moment(event.start).format('h:mm a')
            if(event.start.diff(event.end, 'days') < -1) {
                element.addClass('multi-event')
                element.find('span').addClass('multi-event-text')
            } else {
                element.html("<div class='calendar-event-wrap'>"+ "<div class='calendar-event-light'></div>"+
                  "<span class='calendar-event-name'>" + title + "</span>" +
                    "<div class='calendar-event-time-wrap'>" + "<span class='far fa-clock calendar-event-clock'></span>" +
                    "<span class='calendar-event-time'>" + time + "</span>" +"</div>"+ "</div>")
            }

            // console.log(event.start.diff(event.end, 'days'))
            console.log(event, element);
            // console.log(event.start);
            // console.log(event.end);
        },

        // dayRender: function (date, cell) {
        //     cell.css("position","relative");
        // },

        defaultView: 'month',
        height: 752,
        contentHeight: 702,
        fixedWeekCount: false,
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
    //Custom icons for next and prev
    $(".fc-month-button").html('<span class="oi active-btn-color" data-glyph="grid-three-up"></span>')
    $(".fc-agendaWeek-button").html('<span class="oi passive-btn-color" data-glyph="menu"></span>')

    // View btn color change
    $(".fc-agendaWeek-button").on('click',function () {
        $(this).find('span').removeClass('passive-btn-color').addClass('active-btn-color')
        $(".fc-month-button").find('span').removeClass('active-btn-color').addClass('passive-btn-color')
    })

    $(".fc-month-button").on('click',function () {
        $(this).find('span').removeClass('passive-btn-color').addClass('active-btn-color')
        $(".fc-agendaWeek-button").find('span').removeClass('active-btn-color').addClass('passive-btn-color')
    })


    //Hover on a cell
    $(".fc-day-top").hover(function() {
        var col = $(this).index();

        $(this).closest('.fc-row').find('.fc-bg td:eq(' + col + ')').css('background', '#ffffff').css('box-shadow','0 2px 73px 0 #ccccdc');
    }, function() {
        var col = $(this).index();

        $(this).closest('.fc-row').find('.fc-bg td:eq(' + col + ')').css('background', 'none').css('box-shadow','none');
    });


    $(".fc-day").hover(function() {
        var col = $(this).index();

        $(this).closest('.fc-row').find('.fc-bg td:eq(' + col + ')').css('background', '#ffffff').css('box-shadow','0 2px 73px 0 #ccccdc');
    }, function() {
        var col = $(this).index();

        $(this).closest('.fc-row').find('.fc-bg td:eq(' + col + ')').css('background', 'none').css('box-shadow','none');
    });
});

