$(document).ready(function(){
    function mostrar(valor) {
        $('#resultado').html(valor);
    }
    $('#Nombre').on('keyup', function() {
        mostrar($(this).val());
    });
    
    function emailRegistro(valor) {
        $('#resultadoEmail').html(valor);
    }
    $('#Email').on('keyup', function() {
        emailRegistro($(this).val());
    });
    
    function MensajeRegistro(valor) {
        $('#resultadoTextArea').html(valor);
    }
    $('#floatingTextarea').on('keyup', function() {
        MensajeRegistro($(this).val());
    });
})