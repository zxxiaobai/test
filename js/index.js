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
// $("#modaltest").on("show.bs.modal",function () {
//     alert("刚要显示");
// });
$(function () {
   var winWidth=$(window).width();//获取屏幕宽度
    $("#carousel-qhkt>.carousel-inner>.item").each(function (index,el) {//index 每个item el每个item选择器
        var div=$(el);//获取每个item容器信息
        //console.log(div);//打印控制台日志
        var bgimg=div.data((winWidth<=768)?"xs-img":"lg-img");//判断屏幕宽度小于，则获取小图
        if(winWidth<768){
           div.html('<img src="'+bgimg+'" alt="carousel">');
        }else {
            div.css('background','"'+bgimg+'"');//等于 "background: url('../img/1.jpg')" 字符串拼接
        }


    });


});