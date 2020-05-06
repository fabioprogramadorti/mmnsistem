$(function () {
    $('#btnFiltrar').click(function () {
        FiltrarPessoa();
    });
});

function FiltrarPessoa() {
    $.ajax({
        url: '/relatorios/_partialfiltrarpessoas/?nome=' + $('#txtNome').val() + '&email=' + $('#txtEmail').val() + '&docaprovacao=' + $('#documentosaprovados').val() + '&di=' + $('#txtDataInicio').val() + '&df=' + $('#txtDataFim').val(),
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