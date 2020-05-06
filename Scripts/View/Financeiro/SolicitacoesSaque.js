$(function () {
    $('#btnFiltrar').click(function () {
        FiltrarPedido();
    });

    MascaraData("#txtDataInicio");
    MascaraData("#txtDataFim");
});
function FiltrarPedido() {
    $("#dialogProcessando").dialog("open");
    $.get('_PartialSolicitacoesSaqueAbertas/?dataInicio=' + $('#txtDataInicio').val() + '&dataFim=' + $('#txtDataFim').val(), function (response) {
        $('#conteudo_pagina').html(response);
    });
    $("#dialogProcessando").dialog("close");
}