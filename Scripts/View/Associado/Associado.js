$(function () {

    $.ajaxSetup({
        cache: false
    });

    //Limpando os campos
    if ($('#Pessoa_IdPais').val() == "" || $('#Pessoa_IdPais').val() == "0") {
        $("#Pessoa_IdUF").empty();
        $("#Pessoa_IdUF").append('<option value="">-- selecione --</option>');
        $("#Pessoa_IdUF").attr("disabled", "disabled");
    }
    if ($('#Pessoa_IdUF').val() == "" || $('#Pessoa_IdUF').val() == "0") {
        $("#Pessoa_IBGECodigoMunicipio").empty();
        $("#Pessoa_IBGECodigoMunicipio").append('<option value="">-- selecione --</option>');
        $("#Pessoa_IBGECodigoMunicipio").attr("disabled", "disabled");
    }

    $('#btnSalvar').click(function () {

        if ($('#Email').val() != "")
            if ($('#Email').val() != $('#txtConfirmacaoEmail').val()) {
                MensagemOK('E-mail e confirmação de e-mail estão diferentes');
                return false;
            }

        if (!ValidarCampos()) {
            MensagemOK('Campos obrigatórios não preenchidos');
            return false;
        }
        else {
            if ($('#CPFCNPJ').val().length > 14) {
                var cnpj = $('#CPFCNPJ').val().replace('.', '');
                cnpj = cnpj.replace('.', '');
                cnpj = cnpj.replace('/', '');
                cnpj = cnpj.replace('-', '');
                if (!ValidarCNPJ(cnpj)) {
                    MensagemOK('CNPJ inválido');
                    return false;
                }
            }
            else {
                var cpf = $('#CPFCNPJ').val().replace('.', '');
                cpf = cpf.replace('.', '');
                cpf = cpf.replace('-', '');
                if (!ValidarCPF(cpf)) {
                    MensagemOK('CPF inválido');
                    return false;
                }
            }
        }

        if (VerificarCPFCNPJExiste()) {
            MensagemOK('CPF ou CNPJ já cadastrado na base!');
            return false;
        }
    });

    $('#btnAlterar').click(function () {
        if (!ValidarCamposAlterar()) {
            MensagemOK('Campos obrigatórios não preenchidos');
            return false;
        }
        else {
            if ($('#CPFCNPJ').val().length > 14) {
                var cnpj = $('#CPFCNPJ').val().replace('.', '');
                cnpj = cnpj.replace('.', '');
                cnpj = cnpj.replace('/', '');
                cnpj = cnpj.replace('-', '');
                if (!ValidarCNPJ(cnpj)) {
                    MensagemOK('CNPJ inválido');
                    return false;
                }
            }
            else {
                var cpf = $('#CPFCNPJ').val().replace('.', '');
                cpf = cpf.replace('.', '');
                cpf = cpf.replace('-', '');
                if (!ValidarCPF(cpf)) {
                    MensagemOK('CPF inválido');
                    return false;
                }
            }
        }
    });

    $("#IdPlanoNegocio").change(function () {
        if ($(this).val() != "") {
            $.get('../CarregarValorPlanoNegocio/' + $(this).val(), function (response) {
                $('#valor-plano').show('fade');
                $("#ValorPlanoNegocio").text(response);
            });
        }
        else {
            $('#valor-plano').hide('fade');
            $("#ValorPlanoNegocio").text('R$ 0,00');
        }
    });

    $("#SeuID").blur(function () {
        if ($(this).val() != "") {
            $.get("../VerificarUsuarioExiste/?login=" + $('#SeuID').val(), function (response) {
                if (response == 1) {
                    $('#valida-nickname').show();
                    $('#tipo-mensagem-nickname').removeAttr('class');
                    $('#tipo-mensagem-nickname').attr('class', 'ui-state-error ui-corner-all');
                    $('#icone-nickname').removeAttr('class');
                    $('#icone-nickname').attr('class', 'ui-icon ui-icon-alert');
                    $("#mensagem-nickname").text("O nome de usuário: '" + $('#SeuID').val() + "' já está sendo usado por outro associado.\nFavor escolha outro nome de usuário.");
                    $('#SeuID').val('');
                }
                else if (response == 0) {
                    $('#valida-nickname').hide();
                }
                else if (response == -1) {
                    $('#valida-nickname').show();
                    $('#tipo-mensagem-nickname').removeAttr('class');
                    $('#tipo-mensagem-nickname').attr('class', 'ui-state-error ui-corner-all');
                    $('#icone-nickname').removeAttr('class');
                    $('#icone-nickname').attr('class', 'ui-icon ui-icon-alert');
                    $("#mensagem-nickname").text('Erro ao verificar autenticidade do usuário.\nFavor entrar em contato com o suporte.');
                }
            });
        }
        else {
            $('#valida-nickname').hide();
            $("#mensagem-nickname").text('');
        }
    });

    $("#IDPatrocinador").blur(function () {
        if ($(this).val() != "" && $(this).val() != '@ViewBag.Usuario') {
            $.get("../CarregarPatrocinador/?nickName=" + $(this).val(), function (response) {
                var obj = $.parseJSON(response);
                if (obj == null) {
                    $('#informcoes-patrocinador').hide();
                    $('#valida-IDPatrocinador').show();
                    $('#IDPatrocinador').val('');
                }
                else {
                    $('#label-patrocinador').text("Nome: '" + obj.Nome + "' / Email: '" + obj.Email + "'");
                    $('#valida-IDPatrocinador').hide();
                    $('#informcoes-patrocinador').show();
                }
            });
        }
        else {
            $('#valida-nickname').hide();
            $("#mensagem-nickname").text('');
        }
    });

    $('#IDPatrocinador').focus(function () {
        $('#ifmPatrocinado').show('fade');
    });

    $('#IDPatrocinador').blur(function () {
        $('#ifmPatrocinado').hide('fade');
    });

    MascaraData("#DataNascimento");
    MascaraCEP("#CEP");

    $('#IdTipoPessoa').change(function () {
        if ($('#IdTipoPessoa').val() == '1')
            MascaraCPF("#CPFCNPJ");
        else
            MascaraCNPJ("#CPFCNPJ");
    });

    $('#Pessoa_IdPais').change(function () {
        CarregarUFs();
    });

    $('#Pessoa_IdUF').change(function () {
        CarregarCidades();
    });


});

function ValidarCampos() {
    var campos = false;

    if ($('#IdTipoPessoa').val() == "" || $('#IdTipoPessoa').val() == undefined)
        campos = true;

    if ($('#EmailPatrocinador').val() == "")
        campos = true;

    if ($('#Nome').val() == "")
        campos = true;

    if ($('#NumeroCelular').val() == "")
        campos = true;

    if ($('#CPFCNPJ').val() == "")
        campos = true;

    if (campos == true)
        return false;
    else
        return true;
}

function ValidarCamposAlterar() {
    var campos = false;

    //if ($('#Pessoa_IdTipoPessoa').val() == "" || $('#IdTipoPessoa').val() == undefined)
    //    campos = true;

    if ($('#Nome').val() == "")
        campos = true;

    if ($('#DataNascimento').val() == "")
        campos = true;

    //if ($('#Pessoa_IdSexo').val() == "")
    //    campos = true;

    if ($('#Email').val() == "")
        campos = true;

    if ($('#CPFCNPJ').val() == "")
        campos = true;

    //if ($('#Pessoa_IdUF').val() == "")
    //    campos = true;

    //if ($('#Endereco').val() == "")
    //    campos = true;

    //if ($('#Numero').val() == "")
    //    campos = true;

    //if ($('#CEP').val() == "")
    //    campos = true;

    //if ($('#Cidade').val() == "")
    //    campos = true;

    //if ($('#Bairro').val() == "")
    //    campos = true;

    if ($('#CelularPrincipal').val() == "")
        campos = true;

    if (campos == true)
        return false;
    else
        return true;
}

function VerificarCPFCNPJExiste() {
    $.ajaxSetup({
        cache: false
    });
    var result = null;
    var scriptUrl = "VerificarCPFCNPJCadastradoBase/?e=" + $('#CPFCNPJ').val();
    $.ajax({
        url: scriptUrl,
        type: 'get',
        dataType: 'html',
        async: false,
        success: function (data) {
            result = data;
        }
    });

    if (result == 1)
        return true;
    else
        return false;
}

function SelecionarDireto() {
    $.ajaxSetup({
        cache: false
    });

    var result = null;
    var scriptUrl = "SelecionarDireto/?e=" + $('#Equipe').val();
    $.ajax({
        url: scriptUrl,
        type: 'get',
        dataType: 'html',
        async: false,
        success: function (data) {
            $('#IDDireto').val(data);
        }
    });

    return result;
}

function CarregarUFs() {
    $.ajaxSetup({
        cache: false
    });

    var Pessoa_IdPais = $('#Pessoa_IdPais').val();
    if ($('#Pessoa_IdPais').val() == "" || $('#Pessoa_IdPais').val() == "0") {
        $("#Pessoa_IdUF").empty();
        $("#Pessoa_IdUF").append('<option value="">-- selecione --</option>');
        $("#Pessoa_IdUF").attr("disabled", "disabled");
        $("#Pessoa_IBGECodigoMunicipio").empty();
        $("#Pessoa_IBGECodigoMunicipio").append('<option value="">-- selecione --</option>');
        $("#Pessoa_IBGECodigoMunicipio").attr("disabled", "disabled");
    }
    else {
        $("#Pessoa_IdUF").removeAttr("disabled");
        $("#Pessoa_IdUF").empty();
        $("#Pessoa_IdUF").append('<option value="0">carregando...</option>');
        $("#Pessoa_IBGECodigoMunicipio").empty();
        $("#Pessoa_IBGECodigoMunicipio").append('<option value="">-- selecione --</option>');
        $("#Pessoa_IBGECodigoMunicipio").attr("disabled", "disabled");

        $.get('/associado/CarregarUFs/' + $('#Pessoa_IdPais').val(), function (response) {
            var UFs = $.parseJSON(response);
            $("#Pessoa_IdUF").empty();
            $("#Pessoa_IdUF").append('<option value="">-- selecione --</option>');
            $.each(UFs, function (i, c) {
                $("#Pessoa_IdUF").append('<option value="' + c.Value + '">' + c.Text + '</option>');
            });
        });
    }
}

function CarregarCidades() {
    $.ajaxSetup({
        cache: false
    });

    var Pessoa_IdPais = $('#Pessoa_IdPais').val();
    if ($('#Pessoa_IdUF').val() == "" || $('#Pessoa_IdUF').val() == "0") {
        $("#Pessoa_IBGECodigoMunicipio").empty();
        $("#Pessoa_IBGECodigoMunicipio").append('<option value="">-- selecione --</option>');
        $("#Pessoa_IBGECodigoMunicipio").attr("disabled", "disabled");
    }
    else {
        $("#Pessoa_IBGECodigoMunicipio").removeAttr("disabled");
        $("#Pessoa_IBGECodigoMunicipio").empty();
        $("#Pessoa_IBGECodigoMunicipio").append('<option value="">carregando...</option>');

        $.get('/associado/CarregarCidades/' + $('#Pessoa_IdUF option:selected').text(), function (response) {
            var cidades = $.parseJSON(response);
            $("#Pessoa_IBGECodigoMunicipio").empty();
            $("#Pessoa_IBGECodigoMunicipio").append('<option value="">-- selecione --</option>');
            $.each(cidades, function (i, c) {
                $("#Pessoa_IBGECodigoMunicipio").append('<option value="' + c.Value + '">' + c.Text + '</option>');
            });
        });
    }
}