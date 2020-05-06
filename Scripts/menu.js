$(function () {

    $('#botao_menu').prop('title', 'Menu');

    $('#botao_menu').click(function () {
        $('.menu_lateral').toggle('slide');
        $('#botao_menu').toggleClass('width_200', 350);
        $('.logo').toggleClass('margin_left_200', 350);
    });

    $("#menu ul li h3").click(function () {
        $("#menu ul ul").slideUp();
        //slide down the link list below the h3 clicked - only if its closed
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
        }
    });

});