         //类别评论
         
         $('.col-xs-4').hover(function () {
             var satisShow = $(this).find('.text-left').find('.satis-show').html();
             if (satisShow == "" || satisShow == null) {
                 $(this).find('.wrapper').hide();
             } else {
                 $(this).find('.wrapper').stop().slideDown("slow");
             }
         }, function () {
             $(' .col-xs-4').find('.wrapper').stop().slideUp("500");
         });
         $('.text-left').find('.satis-show').map(function () {
             var satisShow = $(this).html();
         })
 
         
   
 
 $('.text-left').find('.satis-show').map(function(){
     var satisShow=$(this).html();
 })
 $('.text-left').find('.satisfaction').map(function(){
     var nums=parseInt($(this).attr("data-commen"));
     if(nums==" " || nums==null){
         $(this).hide();
     }
     if(nums==1.0||nums==1.5){
         $(this).css({"background-position":'-126px 0'});
     }
     if(nums==2.0 || nums==2.5){
         $(this).css({"background-position":'-94px 0'});
     }
     if(nums==3.0 || nums==3.5){
         $(this).css({"background-position":'-60px 0'});
     }
     if(nums==4.0 || nums==4.5){
         $(this).css({"background-position":'-30px 0'});
     }
     if(nums==5.0){
         $(this).css({"background-position":"0 0"});
     }
 });
