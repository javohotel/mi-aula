$(document).ready(function() {

    //Navegacion interna
    $('#menuPrincipal').on('click', 'a', function(e) {
        e.preventDefault();
        if( $(this).attr('id') == 'colpaseMenu' ) return;
        $('iframe').attr('src', $(this).attr('href'));
    } )

    //Abrir el menu colapsado solo en desktop
    $(document).ready(function(){
        var windowWidth = $(window).width();
        if(windowWidth >= 1024) {
           $('#menuAccordion button').click()
        }
      });
    
    $('#colpaseMenu').on('click', function() {
        colapseMenu();
    });

    //Filtros
    $('#filtros-btn-action').on('click', function() {
        $('#filtros-display').toggle();
    })

    function colapseMenu() {
        $('.hideMenu').toggleClass('menu-hide');
        $('#mainSidebar').toggleClass('colapsado');
        $('#main').toggleClass('colapsado');
        $('#colapseText').toggle();
        $('#colapseIcon').toggleClass('bi-arrow-bar-left').toggleClass('bi-arrow-bar-right');
    }


    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
      locale:'es',
      firstDay:1,
      buttonText:{
        today:    'Hoy',
        month:    'Mes',
        week:     'Semana',
        day:      'Día',
        list:     'Lista'
      },
      height: 'parent',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listWeek'
      },
      defaultView: 'dayGridMonth',
      defaultDate: '2024-11-11',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events,
      allDayText: 'Todo el día',
      noEventsMessage: 'Sin eventos',
      events: [
        {
          title: 'Todo el dia',
          start: '2024-11-12',
        },
        {
          title: 'Long Event',
          start: '2024-11-09',
          end: '2024-11-11'
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2024-11-27T16:00:00'
        },
      ]
    });

    calendar.render();
})