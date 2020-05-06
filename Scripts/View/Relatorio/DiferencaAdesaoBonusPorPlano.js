$(function () {
    $('#btnFiltrar').click(function () {
        FiltrarPedido();
    });

    MascaraData("#txtDataInicio");
    MascaraData("#txtDataFim");
    $('#IdPlano').width(300);
    $('#IdPlano').css('margin-bottom', '0');
    $('#IdPlano').css('border-radius', '0');
    $('#IdPlano').css('margin-top', '0');
});
function FiltrarPedido() {
    if ($('#IdPlano').val() == "" && $('#TxtConta').val() == "") {
        MensagemOK('Selecione um plano ou informe uma conta para a pesquisa');
        return false;
    }

    if ($('#txtDataInicio').val() == "" && $('#txtDataFim').val() != "") {
        MensagemOK('Informe o período para pesquisa ou deixe as datas em branco para trazer todo período');
        return false;
    }
    else if ($('#txtDataFim').val() == "" && $('#txtDataInicio').val() != "") {
        MensagemOK('Informe o período para pesquisa ou deixe as datas em branco para trazer todo período');
        return false;
    }

    $("#dialogProcessando").dialog("open");
    $.get('_PartialDiferencaValorAdesaoValorGanhoPorPlanoPorPeriodo/?plano=' + $('#IdPlano').val() + '&dataInicio=' + $('#txtDataInicio').val() + '&dataFim=' + $('#txtDataFim').val() + '&conta=' + $('#TxtConta').val(), function (response) {
        $('#conteudo_pagina').html(response);
    });
    $("#dialogProcessando").dialog("close");
}