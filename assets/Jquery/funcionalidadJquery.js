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
        event.preventDefault(); // Evita el envío del formulario
        
        // Obtener Valores
        var nombre = $('#Nombre').val();
        var email = $('#Email').val();
        var mensaje = $('#floatingTextarea').val();
        
        // Captar los elemnetos del de los Inputs
        $('#resultado').text(nombre);
        $('#resultadoEmail').text(email);
        $('#resultadoTextArea').text(mensaje);
    });
});