$(function () {
    $('#tabs').tabs({ disabled: [1, 2] });

    $('#formid').bind("keyup keypress", function (e) {
        var code = e.keyCode || e.which;
        if (code == 13) {
            e.preventDefault();
            return false;
        }
    });

    $('#btnPesquisarConta').click(function () {
        if ($('#IdentificacaoConta').val() != "" || $('#IdentificacaoConta').val() != "")
            PesquisaConta($('#IdentificacaoConta').val(), 1);
        else
            MensagemOK('Informe um ID de conta para a pesquisa');
    });

    $('#btnPesquisarTitular').click(function () {
        if ($('#NomeNovoTitular').val() != "" || $('#NomeNovoTitular').val() != "")
            PesquisaTitular($('#NomeNovoTitular').val(), 1);
        else
            MensagemOK('Informe um nome para a pesquisa');
    });

    $('#btnProximo1').hide();
    $('#btnProximo1').click(function () {
        $("#tabs").tabs('enable', 1).tabs("option", "active", 1).tabs('select', 1);
        $('#NomeNovoTitular').focus();
    });
    $('#btnProximo2').hide();
    $('#btnProximo2').click(function () {
        $("#tabs").tabs('enable', 2).tabs("option", "active", 2).tabs('select', 2);
    });

    $("#processando").dialog({
        width: 250,
        modal: true,
        autoOpen: false,
        closeOnEscape: true,
        open: function (event, ui) { $(".ui-dialog-titlebar-close").hide(); },
        show: {
            effect: "blind",
            duration: 100
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $("#DialogPartialPesquisaConta").dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        resizable: false,
        closeOnEscape: true,
        modal: true,
        draggable: false,
        width: 700
    });

    $("#DialogPartialPesquisaPessoa").dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        resizable: false,
        closeOnEscape: true,
        modal: true,
        draggable: false,
        width: 700
    });

});

function PesquisaConta(e, p) {
    var result = null;
    var scriptUrl = '/trocatitularidade/_partialpesquisaconta/?id=' + $('#IdentificacaoConta').val() + '&pg=' + p;
    $.ajax({
        cache: false,
        url: scriptUrl,
        type: 'get',
        dataType: 'html',
        async: false,
        success: function (data) {
            result = data;
        },
        complete: function () {
            $("#processando").dialog("close");
        },
        beforeSend: function () {
            $("#processando").dialog("open");
        }
    });

    $('#conteudo_pesquisa_contatos').html(result);
    $("#DialogPartialPesquisaConta").dialog('open');
}

function GetConta(c, id) {
    $("#DialogPartialPesquisaConta").dialog('close');
    $('#IdentificacaoConta').val(c);
    $('#IdConta').val(id);
    var scriptUrl = '/trocatitularidade/_partialgetcontatitular/?id=' + id;
    $.ajax({
        cache: false,
        url: scriptUrl,
        type: 'get',
        dataType: 'html',
        async: false,
        success: function (data) {
            $('#conteudo_pagina_conta_pessoa').html(data);
            $('#confirmacao_conteudo_pagina_conta_pessoa').html(data);
            $('#btnProximo1').show();
        },
        complete: function () {
            $("#processando").dialog("close");
        },
        beforeSend: function () {
            $("#processando").dialog("open");
        }
    });
}

function PesquisaTitular(e, p) {
    var result = null;
    var scriptUrl = '/trocatitularidade/_partialpesquisapessoa/?id=' + $('#NomeNovoTitular').val() + '&pg=' + p;
    $.ajax({
        cache: false,
        url: scriptUrl,
        type: 'get',
        dataType: 'html',
        async: false,
        success: function (data) {
            result = data;
        },
        complete: function () {
            $("#processando").dialog("close");
        },
        beforeSend: function () {
            $("#processando").dialog("open");
        }
    });

    $('#conteudo_pesquisa_pessoa').html(result);
    $("#DialogPartialPesquisaPessoa").dialog('open');
}

function GetTitular(c, id) {
    $("#DialogPartialPesquisaPessoa").dialog('close');
    $('#NomeNovoTitular').val(c);
    $('#IdPessoaNovoTitular').val(id);
    var scriptUrl = '/trocatitularidade/_PartialGetPessoa/?id=' + id;
    $.ajax({
        cache: false,
        url: scriptUrl,
        type: 'get',
        dataType: 'html',
        async: false,
        success: function (data) {
            $('#conteudo_pagina_novo_titular').html(data);
            $('#confirmacao_conteudo_pagina_novo_titular').html(data);
            $('#btnProximo2').show();
        },
        complete: function () {
            $("#processando").dialog("close");
        },
        beforeSend: function () {
            $("#processando").dialog("open");
        }
    });
}