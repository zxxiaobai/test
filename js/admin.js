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
    $(".collapse_all >li >a").click(function (el) {
        el.preventDefault();//禁用当前元素原本功能
        //$(this) 当前对象
        var $this=$(this);
        $(".collapse_all >li >a").removeClass("navactive");//去掉所有之前加过点击的样式
        $this.addClass("navactive");
        $("#iframe-contant").attr('src',$this.data('iframesrc'));
        //此处需要关注的点，1，修改属性，2，获取自定义事件值
        //自定义事件，获取属性添加
        var text=$this.text();//获取点击中的按钮名
        var mnav= $this.parent().parent().prev().text();//父节点的父节点的兄弟节点 text节点的文字
        $("#path_nav>.breadcrumb >li:last-child").html(text);
        $("#path_nav>.breadcrumb >li:last-child").prev().html(mnav);//prev 同层级上面的兄弟元素
    });

});
