//楼层效果

$(".floor-u").children(".floor-l").click(function(){
  
    var index = $(this).index();

    // 根据li的索引获取对应的div的距离顶部的位置
    var t = $(".floor").eq(index)[0].offsetTop;
console.log(3)
    // 将这个位置，通过动画，设置给根元素html的滚动距离
    $("html").animate({
        scrollTop:t
    })
});