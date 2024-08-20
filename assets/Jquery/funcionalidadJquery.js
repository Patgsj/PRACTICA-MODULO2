/* $(document).ready(function() {
    function actualizarResultado(selector, valor) {
        $(selector).html(valor);
    }

    $('.input-monitoreo').on('input', function() {
        const valor = $(this).val();
        const target = $(this).data('target');
        actualizarResultado(target, valor);
    });
}); */


$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault(); 
        
        
        var nombre = $('#Nombre').val().trim(); 
        var email = $('#Email').val().trim();
        var mensaje = $('#floatingTextarea').val().trim();
        
        
        if (nombre === '' || email === '' || mensaje === '') {
            
            Swal.fire({
                title: "Te faltan datos",
                text: "Termina de completarlos",
                icon: "warning",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                },
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Aceptar"
            });
        } else {
            // Captar los elementos de los Inputs
            $('#resultado').text(nombre);
            $('#resultadoEmail').text(email);
            $('#resultadoTextArea').text(mensaje);
        }
    });
});
