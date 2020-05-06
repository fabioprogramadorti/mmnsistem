$(function () {

    $(".editor-label").removeClass('editor-label').addClass('label');
    $(".editor-field").removeClass('editor-field').addClass('text');

    $(".numero").keydown(function (event) {
        /* Allow backspace, delete, tab, esc e enter */
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
            /* Allow CTRL+A */
        (event.keyCode == 65 && event.ctrlKey === true) ||
            /* Allow CTRL+C */
        (event.keyCode == 67 && event.ctrlKey === true) ||
            /* Allow CTRL+X */
        (event.keyCode == 88 && event.ctrlKey === true) ||
            /* Allow CTRL+V */
        (event.keyCode == 86 && event.ctrlKey === true) ||
            /* Allow Command+A (Mac) */
        (event.keyCode == 65 && event.metaKey === true) ||
            /* Allow Command+C (Mac) */
        (event.keyCode == 67 && event.metaKey === true) ||
            /* Allow Command+X (Mac) */
        (event.keyCode == 88 && event.metaKey === true) ||
            /* Allow Command+V (Mac) */
        (event.keyCode == 86 && event.metaKey === true) ||
            /* Allow home, end, left e right keys */
        (event.keyCode >= 35 && event.keyCode <= 39)) {
            /* Boo */
            return;
        }
        else {
            /* Stop key press */
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });

    $(".moeda").keydown(function (event) {
        if (event.keyCode == 188 || event.keyCode == 110) {
            if ($(this).val().indexOf(',') > -1)
                event.preventDefault();
        }

        /* Allow backspace, delete, tab, esc e enter */
        if (event.keyCode == 110 || event.keyCode == 188 || event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
            /* Allow CTRL+A */
        (event.keyCode == 65 && event.ctrlKey === true) ||
            /* Allow CTRL+C */
        (event.keyCode == 67 && event.ctrlKey === true) ||
            /* Allow CTRL+X */
        (event.keyCode == 88 && event.ctrlKey === true) ||
            /* Allow CTRL+V */
        (event.keyCode == 86 && event.ctrlKey === true) ||
            /* Allow Command+A (Mac) */
        (event.keyCode == 65 && event.metaKey === true) ||
            /* Allow Command+C (Mac) */
        (event.keyCode == 67 && event.metaKey === true) ||
            /* Allow Command+X (Mac) */
        (event.keyCode == 88 && event.metaKey === true) ||
            /* Allow Command+V (Mac) */
        (event.keyCode == 86 && event.metaKey === true) ||
            /* Allow home, end, left e right keys */
        (event.keyCode >= 35 && event.keyCode <= 39)) {
            /* Boo */
            return;
        }
        else {
            /* Stop key press */
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });

    $('.ctrlv_disable').keydown(function (event) {
        if (event.ctrlKey == true && (event.which == '118' || event.which == '86')) {
            event.preventDefault();
        }
    });

    $("#btnCancelar").click(function () {
        window.location = '/';
        return false;
    });

    $(document).ready(function () {
        $('#btnVoltar').attr('formnovalidate', '');
        $("#btnCancelar").attr('formnovalidate', '');
        $('.form-group input').addClass('form-control');
        $('.form-group select').addClass('form-control');
        $('.form-group password').addClass('form-control');
        $('.campo-obrigatorio').css({ 'border': '1px solid red !important', 'padding': '0 0 0 1em', 'color': 'red' });

        var titulo = $('.titulo-pagina').children('h1').text();
        $('.titulo-pagina').html('<div class="col-lg-12"><h1 class="page-header">' + titulo + '</h1></div>').removeAttr('class').addClass('row');
    });

    $('.date').load(function () {
        $(this).css('backgroundcolor', '#000');
    });

    $('.disable').load(function () {
        $(this).prop('disabled', 'true');
    });

    $('.readonly').load(function () {
        $(this).prop('readonly', 'true');
    });

    $('.idConta').keyup(function () {
        var $this = $(this);
        $this.val(ReplaceUltimo(/[^a-z0-9]+/g, '', $this.val()));
    });

    $(document).ready(function () {
        $('#btnVoltar').attr('formnovalidate', '');
        $("#btnCancelar").attr('formnovalidate', '');
        $('.label').removeClass('label').addClass('form-group');
        $('.text').removeClass('text').addClass('form-group');
        $('.form-group input').addClass('form-control');
        $('.form-group select').addClass('form-control');
        $('.form-group password').addClass('form-control');
        $('.campo-obrigatorio').css({ 'border': '1px solid red !important', 'padding': '0 0 0 1em', 'color': 'red' });

        $('button').not('[class]').addClass('btn btn-primary');
        $('button').children('a').css('color', '#fff');

        var titulo = $('.titulo-pagina').children('h1').text();
        $('.titulo-pagina').html('<div class="col-lg-12"><h1 class="page-header">' + titulo + '</h1></div>').removeAttr('class').addClass('row');
    });

    $(document).tooltip({
        track: false
    });

    $("#dialogProcessando").dialog({
        width: 250,
        modal: true,
        autoOpen: false,
        closeOnEscape: true,
        open: function (event, ui) { $(".ui-dialog-titlebar-close").show(); },
        show: {
            effect: "blind",
            duration: 100
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $(document).submit(function () {
        $("#dialogProcessando").dialog("open");
    });

    $(document).ready(function () {
        $("#dialogProcessando").dialog("close");
    });


    $('input[type=tel]').mask("(99)9999-9999?9").ready(function (event) {
        var target, phone, element;
        target = (event.currentTarget) ? event.currentTarget : event.srcElement;
        phone = target.value.replace(/\D/g, '');
        element = $(target);
        element.unmask();
        if (phone.length > 10) {
            element.mask("(99)99999-999?9");
        } else {
            element.mask("(99)9999-9999?9");
        }
    });
});

function MensagemOK(mensagem) {
    $("#dialogMessage").html(mensagem);
    $("#dialogOK").dialog({
        autoOpen: true,
        show: "blind",
        hide: "explode",
        resizable: false,
        closeOnEscape: false,
        modal: true,
        draggable: false,
        width: 400,
        buttons: {
            Ok: function () {
                $(this).dialog("close");
            }
        }
    });
    $("#dialogOK").dialog("open");
}

function MensagemConfirmacao(mensagem, callback) {
    $("#dialogMessageConfirm").html(mensagem);
    $("#dialogConfirm").dialog({
        resizable: false,
        height: 230,
        width: 430,
        modal: true,
        buttons: {
            "Sim": function () {
                window.location.href = callback;
                $(this).dialog("close");
            },
            "Não": function () {
                doSubmit = false;
                $(this).dialog("close");
            }
        }
    });
    return false;
}

function MascaraData(e) {
    $.datepicker.regional['pt-BR'] = {
        closeText: 'Fechar',
        prevText: '&#x3c;Anterior',
        nextText: 'Pr&oacute;ximo&#x3e;',
        currentText: 'Hoje',
        monthNames: ['Janeiro', 'Fevereiro', 'Mar&ccedil;o', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
        'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        dayNames: ['Domingo', 'Segunda-feira', 'Ter&ccedil;a-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['pt-BR']);
    $(e).datepicker();
}

function MascaraTelefone(e) {
    $(e).mask("(99)9999-9999");
}

function MascaraCelular(e) {
    $(e).mask("(99)99999-9999");
}

function MascaraCPF(e) {
    $(e).mask("999.999.999-99");
}

function MascaraCNPJ(e) {
    $(e).mask("99.999.999/9999-99");
}

function MascaraCEP(e) {
    $(e).mask("99999999");
}

function ValidarCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;

    if (strCPF == "00000000000")
        return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;

    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11)))
        return false;

    return true;
}

function ValidarCNPJ(cnpj) {

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') return false;

    if (cnpj.length != 14)
        return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0, tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
        return false;

    return true;

}

function FecharMensagemSucesso() {
    $('.mensagem-sucesso').hide('blind');
}

function FecharMensagemAlerta() {
    $('.mensagem-alerta').hide('blind');
}

function FecharMensagemInformacao() {
    $('.mensagem-informacao').hide('blind');
}

function ImprimirObjeto(e, t) {
    var divToPrint = document.getElementById(e);
    newWin = window.open(t);
    $('#titulo-pagina').show();
    newWin.document.write('<link href="/App_Themes/default/layout.css" rel="stylesheet" />');
    newWin.document.write('<link href="/App_Themes/default/objects.css" rel="stylesheet" />');
    newWin.document.write('<link href="/App_Themes/default/menu.css" rel="stylesheet" />');
    newWin.document.write('<link href="/App_Themes/default/jquery-ui-1.10.4.custom.min.css" rel="stylesheet" />');
    newWin.document.write('<link href="/App_Themes/default/icon.css" rel="stylesheet" />');
    newWin.document.write('<link href="/App_Themes/default/paginacao.css" rel="stylesheet" />');

    newWin.document.write('<script src="/Scripts/jquery-1.10.2.js"></script>');
    newWin.document.write('<script src="/Scripts/jquery-ui-1.10.4.custom.min.js"></script>');
    newWin.document.write('<script src="/Scripts/jquery.maskedinput.min.js"></script>');
    newWin.document.write('<script src="/Scripts/MultiSis.Common.js"></script>');
    newWin.document.write('<style>th {color: #333 !important;}</style>');
    newWin.document.write('<br/>');
    newWin.document.write('<center><div class="titulo-pagina"><h2 class="margin-bottom">Solicitações de saque pendentes para pagamento</h2></div></center>');
    newWin.document.write(divToPrint.innerHTML);
    newWin.print();
}