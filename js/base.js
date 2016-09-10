$(function() {
    //    左侧栏目点击后样式改变
    $(document).on("click", ".menus .item-a", function() {
        var menusParent = $(this).parents(".menus").first();
        //        console.log();
        menusParent.find(".items .item .item-a").each(function(index, ele) {
            //            console.log(ele);
            $(ele).removeClass("checked-menu");
        });
        //        console.log($(menusParent))
        $(this).addClass("checked-menu");
    })

    //    分页点击后,样式改变
    $(document).on("click", ".pagination li .page-num", function() {
        var pageParent = $(this).parents(".pagination").first();
        pageParent.find("li .page-num").each(function(index, ele) {
            $(ele).removeClass("page-checked-a");
        })
        $(this).addClass("page-checked-a");
    });

    //    销售提成页面,切换标签的效果
    $(document).on("click", "#commission-nav-box li", function() {
        var navUl = $(this).parents("#commission-nav-box").first();
        //        console.log(navUl.first());
        navUl.find("li").each(function(index, ele) {
            //            console.log(ele);
            $(ele).removeClass("active");
        });
        $(this).addClass("active");
    });

    //    提成率页面,改变提成率的可编辑状态----从不可编辑变为可编辑
    $(document).on("dblclick", '[data-commission="point"]', function() {
        //                console.log("aaa");
        $(this).attr('readonly', false);
    });
    //    提成率页面,改变提成率的可编辑状态----从可编辑变为不可编辑
    $(document).on("blur", '[data-commission="point"]', function() {
        //                console.log("aaa");
        $(this).attr('readonly', true);
    });

//    提成页面,代理人切换后的点击效果
    $(document).on('click', '#commission-dlr-box dl dd', function() {
        //                console.log(this);
        var commissionBox = $(this).parents('#commission-dlr-box').first();
        commissionBox.find('dd').each(function(index, ele) {
            $(ele).removeClass("comminssion-dlr-checked");
        });
        $(this).addClass("comminssion-dlr-checked")
    });
    //后台管理模态框清空按钮
     $("#clear").click(function(){
        $("#hide").val("");
    });
})

//    预入职销售管理页面js
$(document).on("click","[ data-form='form_pre']",function(){
    if($(".sales",$(this)).is(":checked")){
        $(".add_sales_box").removeClass("hide");
        $(".add_dlr_box").addClass("hide");
    }else if($(".dlr",$(this)).is(":checked")){
        $(".add_sales_box").addClass("hide");
        $(".add_dlr_box").removeClass("hide");
    }
})

$(document).on("click","[data-change-oksales='oksales']",function(){
    $(".handle-button:disabled").removeClass("hide").siblings().addClass("hide");
})