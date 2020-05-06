$(function () {
    $('#btnFiltrar').click(function () {
        FiltrarConta();
    });
});

function FiltrarConta() {
    $("#dialogProcessando").dialog("open");
    $.get('/financeiro/_partialfiltrarconta/?id=' + $('#txtIdentificacao').val() + '&nome=' + $('#txtNome').val(), function (response) {
        $('#conteudo_pagina').html(response);
    });
    $("#dialogProcessando").dialog("close");
}