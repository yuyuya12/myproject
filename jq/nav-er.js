$('.nav-top .l1').mousemove(function(){
    $(this).find('.item').addClass('item-show');
});
$('.nav-top .l1').mouseout(function(){
    $('.nav-top .l1').find('.item').removeClass('item-show');
});