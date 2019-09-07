
 
var navTop=$('.nav-top').offset().Top;
$(window).scroll(function(){
   //滚动条的滚动距离
   var scrTop=$(window).scrollTop();
   if(scrTop>=navTop){
       $('.nav-top').addClass('.site-header-fixed')
   }else{
       $('.nav-top').removeClass('.site-header-fixed')
   }
   
})

