$(function () {
 $("#cllbtn").click(function () {
     //$("#clp4").collapse(); 不加参数 第一次展开后再次点击不会关闭
     //$("#clp4").collapse("toggle");重复点击会打开关闭
     $("#clp4").collapse({
         parent:$("#pg"),//获取该父类赋值parent

     }).collapse("toggle");
     //下面是绑定事件的操作，调用on方法
     $("#clp4").on("show.bs.collapse",function () {//给这个事件绑定个函数
         alert("我去哦");
     });
     $("#clp4").on("shown.bs.collapse",function () {//给这个事件绑定个函数
         alert("我去哦,,展开完毕");
     });
     $("#clp4").on("hide.bs.collapse",function () {//给这个事件绑定个函数
         alert("我去哦,关闭前");
     });
     $("#clp4").on("hidden.bs.collapse",function () {//给这个事件绑定个函数
         alert("我去哦,关闭后");
     });
 });
});