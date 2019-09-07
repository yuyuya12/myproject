// *搜索框
// */
$('nav .searchimg').on('click',function(event){
  event.stopPropagation();
  $('.nav .l1,').fadeOut(600);
  $('.search').fadeIn(600).find("ul").addClass("mymove");
});
//X关闭
$('.search-close').on('click',function(){
 searchShow();
  return false;
});
 //阻止文本框的冒泡
$('.inputSearch').on('click',function(event){
  event.stopPropagation();
})
//任意元素关闭
$(document).on('click',function(event){
  searchShow();
});
function searchShow(){
  $('.search').fadeOut(300);
  $('nav .l1').fadeIn(1000);
};
//获取文本框搜索文字
function mySearch(){
  var keyword =$('input[name="keyword"]').val();
  var href = $(this).closest('form').attr('action');
  href += (href.indexOf('?')>-1 ? '&' :'?')+'keyword='+keyword;
  location.href=href;
}
//文本框回车事件
$('.inputSearch').keyup(function(e){
    if(e.keyCode==13){
      mySearch();
    }
});
//搜索按钮事件
$('.search-search').on('click',function(){
  mySearch();
});
//搜索栏默认地址跳转
$('#animateUl li').click(function(){
  var keyword=$(this).text();
  var href=$(this).closest('form').attr('action');
  href+=(href.indexOf('?')>-1 ? '&' : '?')+'keyword='+keyword;
  location.href=href;
});