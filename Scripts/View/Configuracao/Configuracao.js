$(function () {

    $.ajaxSetup({
        cache: false
    });

    if ($('#IBGEIdUF').val() == "" || $('#IBGEIdUF').val() == "0") {
        $("#IBGECodigoMunicipio").empty();
        $("#IBGECodigoMunicipio").append('<option value="">-- selecione --</option>');
        $("#IBGECodigoMunicipio").attr("disabled", "disabled");
    }

    $('#IBGEIdUF').change(function () {
        CarregarCidades();
    });

    $("#DialogPesquisaBanco").dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        zIndex: 10000,
        resizable: true,
        fluid: true,
        closeOnEscape: true,
        modal: true,
        draggable: true,
        width: 700
    });

    $('#btnSalvar').click(function () {
        if (!ValidarCampos()) {
            MensagemOK('Campos obrigatórios não preenchidos');
            return false;
        }
    });

    $(".search").keyup(function () {
        var rows = $("#tabela_bancos").find("tr").hide();
        var data = this.value.split(" ");
        $.each(data, function (i, v) {
            rows.filter(":contains('" + v + "')").show();
        });
    });

});

function selecionaBanco(id, cod, nome) {
    $('#Banco').val(cod + ' - ' + nome);
    $('#IdBanco').val(id);
    $('#DialogPesquisaBanco').dialog('close');
}

function CarregarCidades() {
    $.ajaxSetup({
        cache: false
    });

    $("#IBGECodigoMunicipio").attr("disabled", "disabled");

    if ($('#IBGEIdUF').val() == "0") {
        $("#IBGECodigoMunicipio").empty();
        $("#IBGECodigoMunicipio").append('<option value="">-- selecione --</option>');
        $("#IBGECodigoMunicipio").attr("disabled", "disabled");
    }
    else {
        $("#IBGECodigoMunicipio").removeAttr("disabled");
        $("#IBGECodigoMunicipio").empty();
        $("#IBGECodigoMunicipio").append('<option value="">carregando...</option>');

        $.get('/configuracao/carregarcidades/' + $('#IBGEIdUF option:selected').val(), function (response) {
            var cidades = $.parseJSON(response);
            $("#IBGECodigoMunicipio").empty();
            $("#IBGECodigoMunicipio").append('<option value="">-- selecione --</option>');
            $.each(cidades, function (i, c) {
                $("#IBGECodigoMunicipio").append('<option value="' + c.Value + '">' + c.Text + '</option>');
            });
        });
    }
}