$(function () {
    $('#btnFiltrar').click(function () {
        FiltrarPedido();
    });
});

function FiltrarPedido() {

    if ($('#txtConta').val() == "" && $('#txtNome').val() == "" && $('#txtCPFCNPJ').val() != "" && $('#txtEmail').val()) {
        MensagemOK('Informe ao menos um filtro');
        return false;
    }

    $.ajax({
        url: '_PartialAssociado/?id=' + $('#txtConta').val() + '&nome=' + $('#txtNome').val() + '&cpfcnpj=' + $('#txtCPFCNPJ').val() + '&email=' + $('#txtEmail').val() + '&docaprovacao=' + $('#possuidocumentoaprovacao').val(),
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