  //相册切换
  var enter_timer = 0;
  $('.product-other-images a').on('mouseenter',function(e,tout){
      var oli = $(this).closest('li'),middle_src = $(this).attr('data-middlesrc'),big_src=$(this).prop('href'),id='id-'+$(this).data('id');
      if(!middle_src)return;
      clearTimeout(enter_timer);
      enter_timer = setTimeout(function(){
          $('.product-main-image a img').prop('src',middle_src);
          if($('.'+id).length < 1){
              $('.product-main-image a').prop('href',big_src).parent().zoom({
                  url:big_src,
                  callback:function(){
                      $(this).addClass(id);
                  }
              });
          }else{
              $('.'+id).appendTo($('.product-main-image a').parent());
          }
          $('.product-other-images li').removeClass('current');
          oli.addClass('current');
      },tout||500);
  });
  $('.product-other-images a').on('click',function(e){
      clearTimeout(enter_timer);
      $(this).trigger('mouseenter',[1]);
      return false;
  });
  $('.product-main-image a').parent().zoom({
      url:$('.product-main-image a').prop('href'),
      callback:function(){
          $(this).addClass('id-'+$('.product-main-image a').data('id'));
      }
  });