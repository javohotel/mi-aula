$(document).ready(function() {

    //Navegacion interna
    $('#navegacion-interna').on('click', 'a', function(e) {
        e.preventDefault();
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

    function colapseMenu() {
        $('.hideMenu').toggleClass('menu-hide');
        $('#mainSidebar').toggleClass('colapsado');
        $('#main').toggleClass('colapsado');
        $('#colapseText').toggle();
        $('#colapseIcon').toggleClass('bi-arrow-bar-left').toggleClass('bi-arrow-bar-right');
    }

    
})