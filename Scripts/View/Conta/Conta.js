$(function () {
    $("#tabs").tabs();

    $('#btnFiltrar').click(function () {
        FiltrarConta();
    });
});

function FiltrarConta() {
    $("#dialogProcessando").dialog("open");
    $.get('_PartialContaUsuario/?id=' + $('#txtConta').val() + '&nome=' + $('#txtNome').val() + '&cpfcnpj=' + $('#txtCPFCNPJ').val() + '&email=' + $('#txtEmail').val(), function (response) {
        $('#conteudo_pagina').html(response);
    });
    $("#dialogProcessando").dialog("close");
}