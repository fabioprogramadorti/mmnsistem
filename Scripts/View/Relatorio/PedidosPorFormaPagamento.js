$(function () {
    $('#btnFiltrar').click(function () {
        FiltrarPedidos();
    });

    MascaraData("#txtDataInicio");
    MascaraData("#txtDataFim");
});

function FiltrarPedidos() {

    if ($('#txtDataInicio').val() == "" && $('#txtDataFim').val() != "") {
        MensagemOK('Informe o período para pesquisa ou deixe as datas em branco para trazer todo período');
        return false;
    }
    else if ($('#txtDataFim').val() == "" && $('#txtDataInicio').val() != "") {
        MensagemOK('Informe o período para pesquisa ou deixe as datas em branco para trazer todo período');
        return false;
    }

    var contas = false;
    if ($('#chkContas').is(':checked'))
        contas = true;
    var upgrades = false;
    if ($('#chkUpgrades').is(':checked'))
        upgrades = true;
    var vouchers = false;
    if ($('#chkVoucher').is(':checked'))
        vouchers = true;
    var idProduto = 0;
    if ($('#Produtos option:selected').val() != "")
        idProduto = $('#Produtos option:selected').val();

    var di = $('#txtDataInicio').val();
    var df = $('#txtDataFim').val();

    $("#dialogProcessando").dialog("open");
    $.get('/relatorios/_partialpedidosporformapagamento/?idFormaPagamento=' + $('#FormasPagamento option:selected').val() +
                                                       '&di=' + di + 
                                                       '&df=' + df + 
                                                       '&pedidoConta=' + contas +
                                                       '&pedidoUpgrade=' + upgrades +
                                                       '&idProduto=' + idProduto +
                                                       '&pedidoVoucher=' + vouchers, function (response) {
        $('#conteudo_pagina').html(response);
    });
    $("#dialogProcessando").dialog("close");
}