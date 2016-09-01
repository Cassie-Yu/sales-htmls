var content=null;
console.log(content);
$(document).on("keyup", "#search", function() {
    if($(this).val() != ""){
        $("#sheet").css("display","block");
    }
    else if($(this).val() == ""){
        $("#sheet").css("display","none");
        $("[data-change-button='btn']").attr("disabled","disabled");
    }
    return false;
})

$(document).on("click", "td", function() {
    content = $(this).html();
    $("#search").val(content);
    $("#sheet").css("display","none");
    $("[data-change-button='btn']").removeAttr("disabled");
    return false;
})

var success = function(){
    imessenger.success("操作成功！");
    $("#search").val("");
}

var fail = function(){
    imessenger.error("操作失败！");
}

var arr_salesmen =[
        				['选择对应销售'],
        				['北京张三','北京李四','北京王五','北京小明','北京小红','北京小白'],
                        ['苏州张三','苏州李四','苏州王五','苏州小明','苏州小红','苏州小白'],
        				['上海张三','上海李四','上海王五','上海小明','上海小红','上海小白'],
        				['浙江张三','浙江李四','浙江王五','浙江小明','浙江小红','浙江小白'],
        				['大庆张三','大庆李四','大庆王五','大庆小明','大庆小红','大庆小白'],
                  ];

$(function(){
    $(document).on("change","#companys1",function(){
        var selectedOption = $(this).val();
        change1(selectedOption);
    })
})

var change1 = function(a){
    var options = "";
    for(var i=0;i<arr_salesmen[a].length;i++){
        options +="<option>"+arr_salesmen[a][i]+"</option>"
    }
    $("#salesmen1").html(options);
}

$(function(){
    $(document).on("change","#companys2",function(){
        var selectedOption = $(this).val();
        change2(selectedOption);
    })
})

var change2 = function(a){
    var options = "";
    for(var i=0;i<arr_salesmen[a].length;i++){
        options +="<option>"+arr_salesmen[a][i]+"</option>"
    }
    $("#salesmen2").html(options);
}

var dlr=["代理人1","代理人2","代理人3","代理人4","代理人5","代理人6"];

$(function(){
    $(document).on("change","#sales",function(){
        var selectedOption = $(this).val();
        change_kehu();
    })
})

var change_kehu = function(){
    var options = "";
    for(var i=0;i<dlr.length;i++){
        options +="<option>"+dlr[i]+"</option>"
    }
    $("#dali").html(options);
}

//资金状况模块

$(window).resize(function(){
    var height = $(".fund-content").height()+50;
    $(".fund-content-container").css("height",height);
})

$(document).on("click","[data-fund-flex='down']",function(){
    $(this).addClass("on").siblings().removeClass("on");
    $(".fund-content-container").animate({height:$(".fund-content").height()+50});
    $(".data-select").css("display","inline-block");
})

$(document).on("click","[data-fund-flex='up']",function(){
    $(this).addClass("on").siblings().removeClass("on");
    $(".fund-content-container").animate({height:"0"},function(){
        $(".data-select").css("display","none");
    });
})


