var demo = new Object();

$(function() {
//    demo.addHtml('./sales.html', 'main-container');
//    加载订单页面的监听事件
    $(document).on("click", "[data-refresh-page='order']", function() {
        demo.addHtml('./order.html', 'main-container');
    });

    //    加载业绩页面的监听事件
    $(document).on("click", "[data-refresh-page='achievement']", function() {
        demo.addHtml('./achi_fgs.html', 'main-container');
    });

    //    加载销售管理页面的监听事件
    $(document).on("click", "[data-refresh-page='sales']", function() {
        demo.addHtml('./sales.html', 'main-container');
        $('#alert_demo').alert();
    });

    //    加载角色页面的监听事件
    $(document).on("click", "[data-refresh-page='roles']", function() {
        demo.addHtml('./roles.html', 'main-container');
    });
    //    加载角色页面的监听事件
    $(document).on("click", "[data-refresh-page='houtai']", function() {
        demo.addHtml('./modify/modify.html', 'main-container');
    });
    
    //    加载客户页面的监听事件
    $(document).on("click", "[data-refresh-page='kehu']", function() {
        imessenger.error("我想要提示的错误信息");
//        imessenger.success("success message");
//        imessenger.info("info message");
    });

    //加载离职人员客户分配页面的监听事件
    $(document).on("click", "[data-refresh-page='lizhi']", function() {
        demo.addHtml('./fgs_sales.html', 'main-container');
    });
    
    //通过分公司加载其离职的销售
     $(document).on("click", "[data-refresh-item='fgs_sales']", function() {
        demo.addHtml('./lizhirenyuan.html', 'fgs-sales-box');
        //获取分公司的id和名称
//        var gfsId = $(this).data("fgs-value-id");
//        var gfsName = $(this).data("fgs-value-name");
//        
//        //设置分公司id和名称到销售的添加按钮
//        $("#xs_add_icon").data("fgs-value-id",gfsId);
//        $("#xs_add_icon").data("fgs-value-name",gfsName);
    });
    
    //通过离职销售加载其负责的客户
     $(document).on("click", "[data-refresh-item='customer']", function() {
        demo.addHtml('./lizhi_customer.html', 'sales-customer-box');
        //获取分公司的id和名称
//        var gfsId = $(this).data("fgs-value-id");
//        var gfsName = $(this).data("fgs-value-name");
//        
//        //设置分公司id和名称到销售的添加按钮
//        $("#xs_add_icon").data("fgs-value-id",gfsId);
//        $("#xs_add_icon").data("fgs-value-name",gfsName);
    });
    //销售管理中,从分公司加载销售信息的监听事件
    $(document).on("click", "[data-refresh-item='sales']", function() {
        demo.addHtml('./sales_sales.html', 'sales-sales-box');
        
      
        //获取分公司的id和名称
        var gfsId = $(this).data("fgs-value-id");
        var gfsName = $(this).data("fgs-value-name");
        
        //设置分公司id和名称到销售的添加按钮
        $("#xs_add_icon").data("fgs-value-id",gfsId);
        $("#xs_add_icon").data("fgs-value-name",gfsName);
    });

    //--------------------添加后台管理的内容------------------------------------------------    
    //后台管理中,对分公司，销售员，代理人的添加与修改
//    $(document).on("click", '[data-refresh-page="houtai"]', function() {
//        console.log("abc");
//        demo.addHtml('./modify.html', 'main-container');
//    });
   //------------------------------------------------------------------------------------    
    
    //销售管理中,从销售加载代理人信息的监听事件
    $(document).on("click", "[data-refresh-item='act']", function() {
        demo.addHtml('./sales_act.html', 'sales-act-box');
        //获取销售员的id和名称
        var xsId = $(this).data("xs-value-id");             //data-refresh-item="act" data-xs-value-                                                                         id="1" data-xs-value-name="王铁锤"
        var xsName = $(this).data("xs-value-name");
        //将xsId,xsName的值存储在添加按钮里
        $("#dl_add_icon").data("xs-value-id",xsId);
        $("#dl_add_icon").data("xs-value-name",xsName);
    });
    
    //销售管理页面,打开添加分公司模态框的监听事件
    $(document).on('click', '[data-modal="addFgs"]', function() {
        $('#addFgsModal').modal('toggle');
    });
    
    
     //销售管理页面,打开添加销售员模态框的监听事件
    $(document).on('click', '[data-modal="addsale"]', function() {
        var gfsId = $(this).data("fgs-value-id");
        var gfsName = $(this).data("fgs-value-name");
        
        $("#add_xs_modal_fgs_name").val(gfsName);
        $("#add_xs_modal_fgs_id").val(gfsId);
        //console.log('aaaaaaaaaaaaaaaa');
        $('#addsales').modal('toggle');
        
        
//        console.log(gfsId);
//        console.log(gfsName);
    });

    
    
     //销售管理页面,打开添加代理人模态框的监听事件
    $(document).on('click', '[data-modal="adddlr"]', function() {
        //获取添加按钮里的值
        var xsId = $(this).data("xs-value-id");
        var xsName = $(this).data("xs-value-name");
        //存储xsname和xsid
         //console.log('aaaaaaaaaaaaaaaa');
        $("#add-dl-model-xs-name").val(xsName);
        $("#add-dl-model-xs-id").val(xsId);
        // console.log('aaaaaaaaaaaaaaaa');
        $('#adddlr').modal('toggle');
    });
    
    
    
    
    
    
    
    
    //角色管理中,为分公司加载其下销售的方法
    $(document).on("click","[data-refresh-item='fgs']",function(){
        $(this).nextAll(".users-role-inner-dl").first().html('<dd><i class="icon icon-sanjiaoyou users-item-i" data-refresh-item="xs"></i><a>张铁蛋</a><dl class="users-role-inner-dl"></dd><dd><i class="icon icon-sanjiaoyou users-item-i" data-refresh-item="xs"></i><a>张铁蛋1</a><dl class="users-role-inner-dl"></dd>')
        $(this).removeClass('icon-sanjiaoyou').addClass('icon-sanjiaoxia');
    });
    //角色管理中,为销售加载代理人的方法---未完善
    $(document).on("click","[data-refresh-item='xs']",function(){
        $(this).nextAll(".users-role-inner-dl").first().html('<dd><a>代理人2</a></dd><dd><a>代理人2</a></dd>');
        $(this).removeClass('icon-sanjiaoyou').addClass('icon-sanjiaoxia');
    });

});

demo.addHtml = function(sourceUrl, targetId) {
    $.ajax({
        url: sourceUrl,
        type: 'GET',
        data: {
            // _id: user_id
        },
        async: false,
        //- cache: false,
        //- contentType: false,
        //- processData: false,
        success: function(data) {
            //				 console.log(data);
            $("#" + targetId).html(data);
            //				cb(data);
        },
        error: function() {
            console.log('加载页面出错');
        }
    });
}