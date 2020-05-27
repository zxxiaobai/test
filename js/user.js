$(function () {
    $(".form_datetime").datetimepicker({
        format:'yyyy-mm-dd hh:ii:ss',
        autoclose:true,
        todayBtn:true,
        language:'zh-CN'
    });

});
function chkall() {
//$('.chkall');
    $(".chkone").prop("checked",$(".chkall").prop("checked"))

}
function chkone() {
    var flag=true;//旗子
    $(".chkone").each(function (index,el) {
        var chk=$(el);
        if (chk.prop("checked")==false){
            flag=false;
        }
    });
    if (flag){
        $(".chkall").prop("checked",true);
    }else {
        $(".chkall").prop("checked",false);
    }

}