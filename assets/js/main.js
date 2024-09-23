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

    
})