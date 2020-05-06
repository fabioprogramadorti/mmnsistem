$(function () {
    $('#btnFiltrar').click(function () {
        FiltrarPedido();
    });

    MascaraData($('#txtDataInicio'));
    MascaraData($('#txtDataFim'));
});

function FiltrarPedido(p) {
    $("#dialogProcessando").dialog("open");
    if (p == null) {
        $.ajax({
            url: '/financeiro/_partialfiltrarpedidos/?numeroPedido=' + $('#txtNumeroPedido').val() + '&nossoNumeroBoleto=' + $('#txtNossoNumeroBoleto').val() + '&nomeAssociado=' + $('#txtNomeAssociado').val() + '&conta=' + $('#txtConta').val() + '&dataInicio=' + $('#txtDataInicio').val() + '&dataFim=' + $('#txtDataFim').val() + '&pedidosabertos=' + $('#PedidosAbertos').val() + '&idStatus=' + $('#IdStatusPedido').val(),
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
    else
    {
        $.ajax({
            url: '/financeiro/_partialfiltrarpedidos/?pg=' + p + '&numeroPedido=' + $('#txtNumeroPedido').val() + '&nossoNumeroBoleto=' + $('#txtNossoNumeroBoleto').val() + '&nomeAssociado=' + $('#txtNomeAssociado').val() + '&conta=' + $('#txtConta').val() + '&dataInicio=' + $('#txtDataInicio').val() + '&dataFim=' + $('#txtDataFim').val() + '&pedidosabertos=' + $('#PedidosAbertos').val() + '&idStatus=' + $('#IdStatusPedido').val(),
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
}