var iDay;
var yesterday;

//对Date的扩展，将 Date 转化为指定格式的String
//月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
//年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
//例子：
//(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
//(new Date()).Format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function(fmt) { // author: meizz
	var o = {
		"M+" : this.getMonth() + 1, // 月份
		"d+" : this.getDate(), // 日
		"h+" : this.getHours(), // 小时
		"m+" : this.getMinutes(), // 分
		"s+" : this.getSeconds(), // 秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
		"S" : this.getMilliseconds()
	// 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
					: (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}


/**
 * 设定时间选择器的点击方式
 */
$('.form_datetime').datepicker({
	format: "yyyy-mm-dd",
	language: 'zh-CN',
	weekStart: 7, //一周从那一天开始
	todayBtn: 0,
	autoclose: 1,
	todayHighlight: 1,
	startView: 'month',
	minView: 2,
	forceParse: 0,
	initialDate: iDay
//	datatime:now()
});

//$(document).ready(function() {
//    
//    
//});

/**
 * 设定时间选择器(昨天)的点击方式
 */
$('.form_datetime_yesterday').datepicker({
	format: "yyyy-mm-dd",
	language: 'zh-CN',
	weekStart: 7, //一周从那一天开始
	todayBtn: 0,
	autoclose: 1,
	todayHighlight: 1,
	startView: 'month',
	minView: 2,
	forceParse: 0,
	initialDate: iDay
//	datatime:now()
});

/**
 * 为时间选择器设定默认值
 */
$(document).ready(function() {
	var dateNow = new Date();
	dateNow = dateNow.valueOf();
	dateNow = dateNow - ( 24 * 60 * 60 * 1000);
	dateNow = new Date(dateNow);
	yesterday =  dateNow.Format("yyyy-MM-dd");
	$('.form_datetime_yesterday').each(function(index,ele){
		$(ele).val(yesterday);//设定时间为昨天
	});
    
    
    var dateNow = new Date();
	iDay =  dateNow.Format("yyyy-MM-dd");
	$('.form_datetime').each(function(index,ele){
//        console.log(iDay);
		$(ele).val(iDay);
	});
});


/*
 * 激活图标提示标签的触发效果
 */
$(function () {
  $('[data-toggle="icon-tag"]').tooltip()
});



//$(function(){
//    var demo=$('[data-form-valid="valid"]').Validform({
//        tiptype:3,
//        label:".label",
//        showAllError:true,
//        btnSubmit:"[data-form-valid='submit']",
//        datatype:{
//            "zh1-6":/^[\u4E00-\u9FA5\uf900-\ufa2d]{1,6}$/
//        },
//        ajaxPost:true
//    });
//})
