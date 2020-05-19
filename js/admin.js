$(function () {
    $('.collapse_all').on('shown.bs.collapse',function () {
      //var a=$('.collapse_all').prev();//获取当前元素的上一个节点
      var a=$(this).prev();
      var i= a.children();
      i.removeClass('icon-21');
      i.addClass('icon-jianhao');


    });
    $(".collapse_all").on("hidden.bs.collapse",function () {
        var a=$(this).prev();//获取当前元素的上一个节点
        var i= a.children();
        i.removeClass('icon-jianhao');
        i.addClass('icon-21');
    });

});
