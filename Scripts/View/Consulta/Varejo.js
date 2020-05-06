$(function () {
    $('#btnFiltrar').click(function () {
        FiltrarPedido();
    });

    MascaraData($('#txtDataInicio'));
    MascaraData($('#txtDataFim'));
});

function FiltrarPedido() {

    if ($('#txtNome').val() == "" && $('#txtCPFCNPJ').val() != "" && $('#txtEmail').val()) {
        MensagemOK('Informe ao menos um filtro');
        return false;
    }

    $.ajax({
        url: '/associado/_partialpesquisaassociadovarejo/?nome=' + $('#txtNome').val() + '&cpfcnpj=' + $('#txtCPFCNPJ').val() + '&email=' + $('#txtEmail').val() + '&docaprovacao=' + $('#possuidocumentoaprovacao').val() + '&di=' + $('#txtDataInicio').val() + '&df=' + $('#txtDataFim').val(),
        type: 'GET',
        beforeSend: function () {
            $("#dialogProcessando").dialog("open");
        },
        complete: function () {
            $("#dialogProcessando").dialog("close");
        },
        success: function (response) {
            $('#conteudo_pagina').html(response);
        }
    });
}