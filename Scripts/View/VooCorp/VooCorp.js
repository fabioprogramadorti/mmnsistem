$(function () {

    $.ajaxSetup({
        cache: false
    });

    $('#IdUF').change(function () {
        CarregarCidades();
    });

    $('.latlon').click(function () {
        getLocation();
    });

});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else { x.innerHTML = "Seu browser não da a suporte Geolocalização."; }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    $('#Latitude').val(lat.replace('.', ','));
    $('#Longitude').val(lon.replace('.', ','));
}

function showError(error) {
    if (error.code == 1) {
        x.innerHTML = "User denied the request for Geolocation."
    }
    else if (err.code == 2) {
        x.innerHTML = "Location information is unavailable."
    }
    else if (err.code == 3) {
        x.innerHTML = "The request to get user location timed out."
    }
    else {
        x.innerHTML = "An unknown error occurred."
    }
}

function CarregarUFs() {
    $.ajaxSetup({
        cache: false
    });

    var idPais = $('#IdPais').val();
    if ($('#IdPais').val() == "" || $('#IdPais').val() == "0") {
        $("#IdUF").empty();
        $("#IdUF").append('<option value="">-- selecione --</option>');
        $("#IdUF").attr("disabled", "disabled");
        $("#IBGECodigoMunicipio").empty();
        $("#IBGECodigoMunicipio").append('<option value="">-- selecione --</option>');
        $("#IBGECodigoMunicipio").attr("disabled", "disabled");
    }
    else {
        $("#IdUF").removeAttr("disabled");
        $("#IdUF").empty();
        $("#IdUF").append('<option value="0">carregando...</option>');

        $.get('/voocorp/carregarufs/' + $('#IdPais').val(), function (response) {
            var UFs = $.parseJSON(response);
            $("#IdUF").empty();
            $("#IdUF").append('<option value="">-- selecione --</option>');
            $.each(UFs, function (i, c) {
                $("#IdUF").append('<option value="' + c.Value + '">' + c.Text + '</option>');
            });
        });
    }
}

function CarregarCidades() {
    $.ajaxSetup({
        cache: false
    });

    var idPais = $('#IdPais').val();
    if ($('#IdUF').val() == "" || $('#IdUF').val() == "0") {
        $("#IBGECodigoMunicipio").empty();
        $("#IBGECodigoMunicipio").append('<option value="">-- selecione --</option>');
        $("#IBGECodigoMunicipio").attr("disabled", "disabled");
    }
    else {
        $("#IBGECodigoMunicipio").removeAttr("disabled");
        $("#IBGECodigoMunicipio").empty();
        $("#IBGECodigoMunicipio").append('<option value="">carregando...</option>');

        $.get('/voocorp/carregarcidades/' + $('#IdUF option:selected').text(), function (response) {
            var cidades = $.parseJSON(response);
            $("#IBGECodigoMunicipio").empty();
            $("#IBGECodigoMunicipio").append('<option value="">-- selecione --</option>');
            $.each(cidades, function (i, c) {
                $("#IBGECodigoMunicipio").append('<option value="' + c.Value + '">' + c.Text + '</option>');
            });
        });
    }
}