$(document).ready(function(){    
    $('[data-toggle="tooltip"]').tooltip()

    $(".ingredientesrojo, .preparacionrojo").dblclick(function(){
        $(this).css({
            "color" : "red"
        })
    })

    $( "#enviarcorreo" ).click( function (event) {
        alert("El correo fue enviado correctamente")
    });

    $(".titulotarjeta").click(function(){
        $(".cuerpotarjeta").toggle();
    });

});