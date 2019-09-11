$(function(){
    $('.nav-top .l1').mouseenter(function(){
    $(this).find('.item').addClass('item-show');
});
$('.nav-top .l1').mouseleave(function(){
    $('.nav-top .l1').find('.item').removeClass('item-show');
})})();