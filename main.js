$(document).ready(function(){
    $(".opciones").click(function(){
        var menu_pesto = $(this).attr("data-menu"); 
        $(".navcomidas .opciones").removeClass("activo");
        $(this).addClass("activo");
        $(".comidas").removeClass("activo");
        $("#"+menu_pesto).addClass("activo");
    });

});