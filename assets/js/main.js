$(document).ready(function() {
    
    $('#colpaseMenu').on('click', function() {
        $('#menuPrincipal').toggle();
        $('#mainSidebar').toggleClass('col-md-3 col-lg-3').toggleClass('col-md-1 col-lg-1');
        $('#main').toggleClass('col-md-9 ms-sm-auto col-lg-9').toggleClass('col-md-11 ms-sm-auto col-lg-11');
        $('.colapseText').toggle();
        $('#colapseIcon').toggleClass('bi-arrow-bar-left').toggleClass('bi-arrow-bar-right');
    })

    
})