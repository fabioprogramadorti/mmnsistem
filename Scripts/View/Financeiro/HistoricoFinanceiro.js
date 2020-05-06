$(function () {
    $('#btnFiltrar').click(function () {
        FiltrarConta();
    });
});

function FiltrarConta() {
    $.get('/financeiro/_partialfiltrarconta/?id=' + $('#txtIdentificacao').val() + '&nome=' + $('#txtNome').val(), function (response) {
        $('#conteudo_pagina').html(response);
    });
}