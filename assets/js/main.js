$(document).ready(function() {
    
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