$(function() {
    $('header').mouseover(function () {
        $('#header_bg').css('background','var(--white)');
        $('.navi_wrap>li>a').css('color', 'var(--base_fc)');
        $('#logo_2').addClass('on');
        $('#logo').removeClass('on');
        $('#menubtn').css('background','url(../images/menu_btn.svg');
    }).mouseout(function () {
        $('#header_bg').css('background','transparent');
        $('.navi_wrap>li>a').css('color', 'var(--white)');
        $('#logo').addClass('on');
        $('#logo_2').removeClass('on');
        $('#menubtn').css('background','url(../images/menu_btn_W.svg');
    });
    $('#menubtn').click(function () {
        $('.navi2').css('display','block')
        $('#menu_bg').css('display','block')
    });
    $('#menubtn2').click(function () {
        $('.navi2').css('display','block')
        $('#menu_bg').css('display','block')
    })
    $('#cancelbtn').click(function () {
        $('.navi2').css('display','none')
        $('#menu_bg').css('display','none')
    })
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
       
});