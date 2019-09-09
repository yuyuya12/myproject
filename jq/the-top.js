$('#the-top').hide();
//网页首屏高度
var frist=$(window).height();
$(window).scroll(function(){
    //第一屏不显示按钮
    if($(window).scrollTop()>frist){
        $('#the-top').fadeIn()
    }else{
        $('#the-top').fadeOut();
    }
});
$('#the-top').on('click',function(){
    $('html,body').animate({
        scrollTop:0
    },500);
    return false;
});