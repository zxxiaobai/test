$(function () {
    $("#ddbtn").mouseenter(function () {
        $(this).dropdown('toggle');//鼠标放上下拉菜单打开
    }).mouseleave(function () {
        $(this).dropdown('toggle');
    });
    $("#ddmm").mouseenter(function () {
        $("#ddbtn").dropdown('toggle');//鼠标放上下拉菜单打开
    }).mouseleave(function () {
        $("#ddbtn").dropdown('toggle');
    });


});