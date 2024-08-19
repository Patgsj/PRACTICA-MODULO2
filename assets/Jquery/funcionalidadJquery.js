$(document).ready(function() {
    function actualizarResultado(selector, valor) {
        $(selector).html(valor);
    }

    $('.input-monitoreo').on('input', function() {
        const valor = $(this).val();
        const target = $(this).data('target');
        actualizarResultado(target, valor);
    });
});
