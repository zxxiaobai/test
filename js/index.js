// $(function () {
// //jq的代码写这里 所有的页面标签加载完后
//     $("#modalbtn").click(function () {
//         //alert("我去哦");
//         //用js编码方式打开模态框
//         $("#modaltest").modal();//参数taggle hide隐藏 show展示
//
//     });
//
// });

$(function () {
    $("#modaltest").on("show.bs.modal",function () {
        alert("刚要显示");
    });

});