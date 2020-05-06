function SelecionarPessoa(e, p) {
    var result = null;
    var scriptUrl = '/campanha/ajaxselecionarpessoa/?id=' + p;
    $.ajax({
        cache: false,
        url: scriptUrl,
        type: 'get',
        dataType: 'html',
        async: true,
        success: function (data) {
            result = data;
        },
        complete: function () {
            //$("#processando").dialog("close");
        },
        beforeSend: function () {
            //$("#processando").dialog("open");
        }
    });   
}

function PaginacaoSemFiltro(p) {
    var result = null;
    var scriptUrl = '/campanha/_partialassociado/?pg=' + p;
    $("#processando").dialog("open");
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
        }
    });
    $('#conteudo').html(result);
}