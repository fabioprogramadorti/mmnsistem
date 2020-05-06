$(function () {
    $('#btnFiltrar').click(function () {
        FiltrarPedido();
    });

    MascaraData("#txtDataInicio");
    MascaraData("#txtDataFim");
});

function FiltrarPedido() {

    if ($('#txtDataInicio').val() == "" && $('#txtDataFim').val() != "") {
        MensagemOK('Informe o período para pesquisa ou deixe as datas em branco para trazer todo período');
        return false;
    }
    else if ($('#txtDataFim').val() == "" && $('#txtDataInicio').val() != "") {
        MensagemOK('Informe o período para pesquisa ou deixe as datas em branco para trazer todo período');
        return false;
    }

    $("#dialogProcessando").dialog("open");
    $.get('_PartialContasAtivasPorPlanoPorPeriodo/?dataInicio=' + $('#txtDataInicio').val() + '&dataFim=' + $('#txtDataFim').val(), function (response) {
        $('#conteudo_pagina').html(response);
    });
    $("#dialogProcessando").dialog("close");
}