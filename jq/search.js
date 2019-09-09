$(".searchimg").on('click',function(event){
  event.stopPropagation();
  $('.nav .u1').fadeOut(600);
  $('.search').fadeIn(600)
  .hover(function(){ 
             $(".search-content").show();  
         },function (){  
             $(".search-content").hide();  
         })
});
//X关闭
$('.close').on('click',function(){
 searchShow();
  return false;
});
function searchShow(){
  $('.search').fadeOut(300);
  $('nav .l1').fadeIn(1000);
};