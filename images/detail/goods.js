$(document).ready(function(){
	var union = $("#union").val();
	$('.se_li > a,.se_li_c > a').bind("mouseover",function(){
		if($(this).attr("check") =="false" && $(this).attr("class") != "se_off"){
			$(this).attr("class","hover_a");
		}
	});
	$('.se_li > a,.se_li_c > a').bind("mouseout",function(){
		if($(this).attr("check") =="false" && $(this).attr("class") != "se_off"){
			$(this).attr("class","link_a");
		}
	});

	$('.se_li > a,.se_li_c > a').bind("click",function() {
		if($(this).attr("class")=="se_off"){
			return;
		}
		if($(this).attr("check") =="false"){
			$(this).attr("class","se_on");
			$(this).append("<i id='i'></i>");				

			var sid = $(this).attr("id");
			$(this).parent().children().each(function(){//设置同级按钮
				if($(this).attr("id") != sid){
					if($(this).attr("class") != "se_off"){ //其它按钮为能用的时候
						$(this).attr("class","link_a");
						$(this).attr("check","false");
						$(this).find("#i").remove();
					}
				}else{
					$(this).attr("check","true");
					if(getenable()!=false){//将提示框去掉
						cancelinfo();
					}
				}
			});
			if(union=='1'){
				setenable($(this));//设置"对面"的按钮
			}
		}else{//取消时
			$(this).find("#i").remove();
			$(this).attr("class","link_a");
			$(this).attr("check","false");
			//将对面同级按钮不可用的全亮

			var selfid = $(this).parent().attr("id");
			var otherid = "";
			if(selfid =="slist"){
				otherid = "clist";
			}else{
				otherid = "slist";
			}

			$(this).parents("ul").find("#"+otherid).children().each(function(){
				if($(this).attr("class") == "se_off"){
					$(this).attr("class","link_a");
				}
			});
		}
	});

	$(".ms_li_3").each(function(index,domEle){
		$(domEle).find("input").click(function(){
			var chk = $(domEle).find("input");
			if(chk.attr("sn") == "102917"){
				$("input[sn=102916]").parent().parent().parent().hide();
				$("input[sn=102916]").parent().parent().parent().prev().hide();
			}else if(chk.attr("sn") == "102916"){
				$("input[sn=102917]").parent().parent().parent().hide();
				$("input[sn=102917]").parent().parent().parent().next().hide();
			}
			if(chk.attr("checked")!="checked"){
				if(chk.attr("sn") == "102917" || chk.attr("sn") == "102916"){
					$("input[sn=102916]").parent().parent().parent().show();
					$("input[sn=102917]").parent().parent().parent().next().show();
					$("input[sn=102917]").parent().parent().parent().show();
					$("input[sn=102916]").parent().parent().parent().prev().show();
				}
			}
		});
	});

	$("#btncopy").bind("click",function(){
		var t = $("#fx_input").val();
		if(document.all){
			window.clipboardData.setData("text",t);
			$("#ps").html("商品地址已经复制，您可以粘贴到QQ好友或者邮件发给好友了！");
		}else{
			$("#ps").html("您的浏览器不支持剪贴板操作，请自行复制。");
		}
	});
	$(".cancel").bind("click",function(){
		cancelinfo();
	});
	$("#post_comment").bind("click",function(){
		post_comment();
	});

	$(window).scroll(function(){	
		var _scrtop = $(this).scrollTop();
		//商品页展示导航
		if(_scrtop > $(".gg_er_right").offset().top){
			$(".zw_sp").css("height","35px");
			$("#comment").css({'position':'fixed','top':'0px'});
			$("#comment").offset({left: $(".gg_er_right").offset().left + "px"});
		}else{
			$(".zw_sp").css("height","0px");
			$("#comment").css('position', 'static');
		}
	});

	/*来路统计*/
	var refer_url =  document.referrer ? encodeURIComponent(document.referrer.replace($.domain, "")) : "1"; 
	var self_url =  encodeURIComponent(window.location.href.replace($.domain, ""));
	var img = new Image;
	window["tg"] = img;
	img.src = "/ajax/tj.php?refer_url="+refer_url+"&self_url="+self_url;

	$(".jia_sale_14 > ul > li").bind({
		mouseover:function(){			
			$(this).siblings().removeClass("on");
			$(this).addClass("on");
			if($.trim($(this).text())=='嘉丽壹品'){
				$(".jialiyipin_t_box").show();
				$(".sale_jjg_box").hide();
			}else{
				$(".sale_jjg_box").show();
				$(".jialiyipin_t_box").hide();
			}
		}
	});
});

function cancelinfo(){
	$("#no_xz").attr("class","");
	$("#hxz").css("display","none");
}

//选择时设置"对面"可用的规格或颜色
function setenable(obj){
	var selfpname = obj.parent().attr("id");
	var selfid = obj.attr("id");
	var pid = obj.parents("div").attr("id");
	var otherid = "";
	if(selfpname =="slist"){
		otherid = "clist";
	}else{
		otherid = "slist";
	}
	var otherlist = jQuery.makeArray(eval(otherid+"_"+pid)[selfid]);//对面可用的列表
	obj.parents("ul").find("#"+otherid).children().each(function(){//对面同级按钮
		var singleobj = $(this);
		var c_s_id = singleobj.attr("id");
		//100301-1098-1802 
		if(selfpname =="slist"){
			s = pid+"-"+c_s_id+"-"+selfid;
		}else{
			s = pid+"-"+selfid+"-"+c_s_id;
		}

		if(jQuery.inArray(c_s_id,otherlist) == -1 || stock_arr[s] ==null){ //当这个规格不能用
			singleobj.attr("class","se_off");
			singleobj.attr("title","缺货");
			singleobj.find("#i").remove();	
		}else{
			if(singleobj.attr("check") =="false"){//可用但是没选中
				singleobj.attr("title","");
				singleobj.find("#i").remove();
				singleobj.attr("class","link_a");
			}
		}
	});
}

function closeParentDiv(){
	try{
	$("#toshare").hide();
	$("#favo").hide();
	$("#add2cart").hide();
	}catch(e){}
}

function set_view_items(){
	var get_val=getCookie("ladygood_goods");
	var add_val = url+'~'+imgurl+'~'+gid+'~'+title+'~'+price;
	if(get_val!=null)
	{
		var insert=true;
		var link=get_val.split("||");
		for(var i=0;i<5;i++)
		{
			if(typeof(link[i])!='undefined')
			{
				if(link[i].indexOf(gid+'~')!=-1)
				{
					insert=false; 
					break;
				}
			}
		}
		if(insert)
		{
			var new_info = "";
			if(typeof(link[4])!='undefined')
			{
				new_info =  add_val+"||"+link[0]+"||"+link[1]+"||"+link[2]+"||"+link[3];
			}
			else
			{
				new_info = add_val+"||"+get_val;
			}
			addCookie("ladygood_goods",new_info);	
		}		
	}
	else
	{
		addCookie("ladygood_goods",add_val);
	}
}

function get_view_items(){
	var info = getCookie("ladygood_goods");//alert(info);
	//var content = "<dt>您最近浏览过的商品</dt>";
	var content = "";
	if(info){
		var history_arg=info.split("||");
		var i;
		for(i=0;i<5;i++){
			if(typeof(history_arg[i])!='undefined'&&history_arg[i]!="*"){
				var info_arg = history_arg[i].split("~");
				content += "<li><a href=\""+info_arg[0]+"\" target=\"_blank\"><img src=\""+info_arg[1]+"\"/></a><span><a href=\""+info_arg[0]+"\" target=\"_blank\">"+info_arg[3]+"</a><em>嘉丽价：￥"+info_arg[4]+"</em></span></li>";
			}
		}
		$("#showhistory").html(content);
	}
}

var stock_arr ="";
//库存信息
function getstock(){
	var gstr = "";
	$.each(goodslist, function(i, n){
	  gstr +="product["+n+"]&";
	});

	$.getJSON("/ajax/goods.php?act=stock&"+gstr+"gid="+gid , function(data){
		if(data.errid != 0){
			stock_arr = data['stocks'];
			var pro_num = 0;//实际得到的商品数
			$.each(data['goods'], function(i, n){
				  pro_num++; 
			});
			var i = $(".sp_selection .bk").length;//本身包含的商品
			if(i!=pro_num){
				enabledBuy();
			}else{
				enabledBuy();
			}

			temk = data.compkey;
			if(temk){
				compitem();
			}
		}else{
			temk = data.compkey;
			compitem();
			disableBuy();
		}
	});
}

function enabledBuy(){
	$(".goumai_a").css('display','block');
	$(".gwc_a").css('display','block');
}

function disableBuy(){
	$("#stock_enable").html("<div class='pay_no'>商品缺货</div>");
}

//异步对比
function compitem(){
	$.getJSON("/ajax/goods.php", { 'act': "comp", 'sc': sc, 'mp' : mp, 'gp' : gp, 'temk' : temk, 'gd' : gd, 'price' : price, 'ep' : ep, 'url' : url, 'qtylist' : qtylist }, function(data){});
}
var load_consult=false;
function showbox(id){
	if(id == 4) {
		$.ajax({
		   type: "GET",
		   url: '/comment/getProductComments/?gid='+gid,
		   dataType: 'html',
		   success: function(data){
			  $('#comments').html(data);
		   }
		});
	}else if(id==5){
//		if(load_consult==false){
//			$.getScript($.includePath+"/js/consult.js");
//			load_consult=true;
//		}
	}
	for(var i=1;i<=6;i++){
		if($("#box"+i)){
			if(i == id){				
				$("#box"+i).show();
				$("#b"+i).attr("class","ter_on");
				
				// if($("#comment").css("position") != "static"){
					if($.browser.msie || $.browser.mozilla){
						$("html").animate({scrollTop:$(".gg_er_right").offset().top}, "normal");
					}else{	
						$("body").animate({scrollTop:$(".gg_er_right").offset().top}, "normal");
					}	
				// }	
			}else{
				$("#box"+i).hide();
				$("#b"+i).attr("class","");
			}
		}
	}
}

function getList(url,id) {
	$.ajax({
	   type: "GET",
	   url: url,
	   dataType: 'html',
	   success: function(data){
		  $('#'+id).html(data);
	   }
	});
}
//获取已经被选择的组合
function getenable(){
	var productlist = "";
	var union = $("#union").val();
	var j=0,k=0,m=0,n=0;
//	if(gid == '108239'){
//		$(".sp_selection .bk").each(function(){
//			$(this).find(".se_li_c").children().each(function (){
//				if($(this).attr("check")=="true"){
//					productlist += "&product[108239][108148-]&product["+$(this).attr("id")+"]["+$(this).attr("pid")+"-]&num["+$(this).attr("id")+"]="+$("#num").val();
//				}
//			});
//		});			
//	}else if(gid == '113166'){
//		$(".sp_selection .bk").each(function(){
//			$(this).find(".se_li_c").children().each(function (){
//				if($(this).attr("check")=="true"){
//					productlist += "&product[113166][112742-]&product["+$(this).attr("id")+"]["+$(this).attr("pid")+"-]&num["+$(this).attr("id")+"]="+$("#num").val();
//				}
//			});
//		});			
//	}else if(gid != '108239' && gid != '113166' && union=='0'){
//		$(".sp_selection .bk").each(function(i){
//			m += $(this).find(".se_li_c").length;
//			var productid = $(this).attr("id");
//			if($.trim($(this).find(".se_li_c").html())==''){
//				productlist += "&product["+gid+"]["+productid+"-]";
//			}
//			$(this).find(".se_li_c").children().each(function (){
//				if($(this).attr("check")=="true"){
//					productlist += "&product["+$(this).attr("id")+"]["+$(this).attr("pid")+"-]&num["+$(this).attr("id")+"]="+$("#num").val();
//					j++;
//				}
//			});
//		});
//		if(m != j){
//			return false;
//		}	
//	}else{
		$(".sp_selection .bk").each(function(){
			var productid = $(this).attr("id");
			m += $(this).find(".se_li_c").length;
			n += $(this).find(".se_li").length;
			productlist += "&product["+gid+"]["+productid+"-";
			$(this).find(".se_li_c").children().each(function (){
				if($(this).attr("check")=="true"){
					productlist += $(this).attr("id");
					k++;
				}
			});
			productlist += "-";
			$(this).find(".se_li").children().each(function (){
				if($(this).attr("check")=="true"){
					productlist += $(this).attr("id");
					j++;
				}
			});
			productlist += "]";
		});

		if(m+n != (j+k)){
			return false;
		}		
	//}
	return productlist;
}

//获取组合商品
function getgrouppid(){
	var groupproductidlist = "";
	var groupgid = $("#groupgid").val();
	$("#groupproduceidlist > li").each(function(){
		var grouppid = $(this).val();
		groupproductidlist += "&product["+groupgid+"]["+grouppid+"--]";
	});
	return groupproductidlist;
}
//获取加价购商品
function getaddpro(){
	var addprolist = "";
	var pronumlist = "";
	$(".ms_li_3").each(function(){
		var chk = $(this).find("input");
		if(chk.attr("checked")=="checked"){
			addprolist += "&product["+chk.attr("sn")+"]["+chk.attr("pn")+"--]";
			pronumlist += "&num["+chk.attr("sn")+"]=1";
		}
	});
	return addprolist+pronumlist;
}

//直接购买
function toCart(){
	var selvar = getenable();
	var num = $("#num").val();
	var union = $("#union").val();
	if(selvar==false){
		$("#no_xz").attr("class","no_xz");
		$("#hxz").css("display","");
		return;
	}
	//if(gid=='107063' || gid=='107064' || gid=='107065' || gid=='107066'){
//		if(num<2){
//			alert("本商品购买数量必须大于1件！");
//			return;
//		}
//	}
//	if(gid=='107062' || gid=='105823' || gid=='105824'){
//		if(num<3){
//			alert("本商品3件起售！");
//			return;
//		}
//	}
	var sdata = "/cart/cart_accept.php?act=getitemstock&union="+union+selvar+"&num["+gid+"]="+num+"&ret_url=/order/";
	$.getJSON(sdata, function(data){
		if(data.errid == -1){//未登录
			alert("订单商品为空");
		}else if(data.errid == 1){//有货
			if(data.is_login==1){				
				window.location.href = "/order/";
			}else{
				$("#ceng").css("display","block");
				$("#login").html(data.html);
			}
		}else{
			if(confirm("商品已无货，是否需要货到通知？")){
				window.location.href = "/order/book.php?act=book"+selvar;
			}
		}
	});
}

//组合购买
function toCartUnion(){
	var selvar = getenable();
	var num = $("#num").val();
	var addpro = getaddpro();
	if(selvar==false){
		$("#no_xz").attr("class","no_xz");
		$("#hxz").css("display","");
		var off = $("#no_xz").offset();
		if($.browser.msie || $.browser.mozilla)
			$("html").animate({scrollTop:off.top}, "normal");
		else	
			$("body").animate({scrollTop:off.top}, "normal");
		return;
	}
	if(gid=='107063' || gid=='107064' || gid=='107065' || gid=='107066'){
		if(num<2){
			alert("本商品购买数量必须大于1件！");
			return;
		}
	}
	if(gid=='107062' || gid=='105823' || gid=='105824'){
		if(num<3){
			alert("本商品3件起售！");
			return;
		}
	}
	var sdata = "/cart/cart_accept.php?act=getitemstock&union=0"+selvar+addpro;
	sdata += "&num["+gid+"]="+num+"&ret_url=/order/";
	$.getJSON(sdata, function(data){
		if(data.errid == -1){//未登录
			alert("订单商品为空");
		}else if(data.errid == 1){//有货
			if(data.is_login==1){				
				window.location.href = "/order/";
			}else{
				$("#ceng").css("display","block");
				$("#login").html(data.html);
			}
		}else{
			for(var a in data['stock']){
				if(data['stock'][a]['errid'] == '0'){
					if(confirm(data['stock'][a]['gname']+"已无货，是否需要货到通知？")){
						window.location.href = "/order/book.php?act=book&product["+data['stock'][a]['gid']+"]";
					}
				}
			}
		}
	});
}

var ret_url = document.URL;

function addCart(packtype){
	var selvar = getenable();
	var num = $("#num").val();
	if(packtype=='1001' || packtype=='1002' || !packtype){
		var mark='1';
	}else{
		var mark='2';
	}
	if(selvar==false){
		$("#no_xz").attr("class","no_xz");
		$("#hxz").css("display","");
		return;
	}
	if(gid=='107063' || gid=='107064' || gid=='107065' || gid=='107066'){
		if(num<2){
			alert("本商品购买数量必须大于1件！");
			return;
		}
	}
	if(gid=='107062' || gid=='105823' || gid=='105824'){
		if(num<3){
			alert("本商品3件起售！");
			return;
		}
	}
	var sdata = "/cart/cart_accept.php?act=getitemstock"+selvar+"&num["+gid+"]="+num+"&ret_url=/cart/cart.php?cart="+mark;
	$.getJSON(sdata, function(data){
		if(data.errid == -1){//未登录
			alert("订单商品为空");
		}else if(data.errid == 1){//有货
			if(data.is_login==1){
				$.getJSON("/cart/cart_accept.php?act=add&gid="+gid+selvar+"&num="+num, function(data){
					if(data.errid == 1){
						window.location.href = "/cart/cart.php?cart="+mark;
					}else{
						alert(data.errmsg);
					}
				});
			}else{
				$("#ceng").css("display","block");
				$.getJSON("/cart/cart_accept.php?act=add&gid="+gid+selvar+"&num="+num, function(data){});
				$("#login").html(data.html);
			}
		}else{
			if(confirm("商品已无货，是否需要货到通知？")){
				window.location.href = "/order/book.php?act=book"+selvar;
			}
		}
	});
}

function varyp (path,pid,obj){
	var bimg = path + 's0_' + pid + '.jpg';
	$('#g_pic').attr('src',path + 's1_' + pid + '.jpg');
	$('#g_pic').parent().attr('href',bimg);

	$("a[id=ag_pic]").unbind();
	$("img[id=g_pic]").unbind();
	$("a[id=ag_pic]").attr("href",bimg).jlzoom(options);

	$(".imgList_box li").attr("class","track");
	$(obj).attr('class',"on_track");
}

function addFavorite(showid,gid){
	//var thisdiv = $("#"+showid);
	$.getJSON('/ajax/goods.php',{"act":"favorite","gid":gid},function(data){
		if(data.errid==1){
			$("#msgFav").html("<strong style='font-size:18px; color:#090;'>&radic; </strong>收藏成功！");
		}else if(data.errid==0) {
			$("#msgFav").html("<strong style='font-size:18px; color:#090;'>&time; </strong>收藏失败！");
		}else if(data.errid==2){
			$("#msgFav").html("收藏商品已存在！");
		}else{
			$("#msgFav").html("请您先<a style=\"color:#09f\" href=\"/user/home/\" target=\"_blank\">登录</a>");
		}
		$("#favo").show();
	});
}

function closeFav(){
	$("#favo").hide();
}

function closeDiv(showid){
	$("#favo").hide();
	$("#toshare").hide();
	$("#add2cart").hide();
	var thisdiv = $("#"+showid);
	thisdiv.fadeOut("fast");
}

function openParentDiv(){
	$("#favo").hide();
	$("#add2cart").hide();
	var offset = $(".fx_a").offset();
	var h = offset.top+$(".fx_a").height();
	var w = offset.left;
	$("#toshare").css({"top":h,"left":w});
	$("#toshare").fadeIn("fast");
}

function delFavorite(gid){
	$.getJSON('/ajax/goods.php',{"act":"delfavo","gid":gid},function(data){
		if(data.errid==1){
			window.location.href = "/user/favorite/";
		}
	});
}

function post_comment(){
	$.getJSON('/comment/postmsg/',{"gid":gid},function(data){
		if(data.errid == 1){
			window.location.href = "/comment/postmsg/";
		} else if(data.errid == -1) {
			window.location.href = "/comment/postmsg/";
		}
	});
}

var yxstr = '';
function hideyx(){
	yxstr = $('#cf_dd5').html();
	$('#cf_dd5').html(''); 
	$('#cf_dd5').hide(); 
}

function showyx(){
	if(yxstr!=''){
		$('#cf_dd5').html(yxstr); 
	}
	$('#cf_dd5').show(); 
}

/* 设置加价购信息 - 购物车 */
function set_addinfo(obj,self,price) {
	var totalNum = 0;
	var inpt = obj.find("input");
	var chk = inpt.prop('checked');
	if(chk == false) {
		if(self.prop('tagName') == 'DIV') {
			inpt.prop('checked',true);
			//addNum++;
			//addTot += parseFloat(inpt.val());
			//addNum = 1;
			addTot = parseFloat(inpt.val());
		} else {
			//addNum--;
			//addTot -= parseFloat(inpt.val());
			//addNum = 0;
			addTot = 0.00;
		}
	} else {
		if(self.prop('tagName') == 'DIV') {
			inpt.prop('checked',false);
			//addNum--;
			//addTot -= parseFloat(inpt.val());
			//addNum = 0;
			addTot = 0.00;
		} else {
			//addNum++;
			//addTot += parseFloat(inpt.val());
			//addNum = 1;
			addTot = parseFloat(inpt.val());
		}
	}
	$("#add_price").html("￥"+addTot.toFixed(2));
	$('#total_price').html((price + addTot).toFixed(2));
}

function ptab(obj,str){
	$(obj).parent().siblings().attr("class","mall");
	$(obj).parent("div").attr("class","mall on");
	$("#zd_pic > img").attr("src",str);
	try{
		jwplayer("zd_video").remove();
	}catch(e){}
	$("#zd_pic").show();
}

function vtab(obj,f)
{
	$(obj).parent().siblings().attr("class","mall");
	$(obj).parent("div").attr("class","mall on");
	$("#zd_pic").hide();

	jwplayerObj = {
			'width': 400,
			'height': 400,
			'bufferlength': '2',		
			'autostart': 'true',
			'smoothing': 'true',
			'modes': [{
				type: 'flash',
				src: 'http://s.jialigou.cn/flash/tv_player.swf',
				config: {
					file: "http://i1.jialigou.cn/video/"+f+".flv"
				}
			}]
		};
	jwplayer("zd_video").setup(jwplayerObj);
	$("#zd_video_wrapper").addClass("zd_pic bk_color");
	$("#zd_video_wrapper").append("<div class='video_h'>专线订购：<b>400-630-0077</b>货号：20"+ gid +"</div>");
} 

function toshare(shareto){
	var sdata = "/ajax/share.php?gid="+gid+"&shareto="+shareto+"&ret_url="+url;
	$.getJSON(sdata, function(data){
		if(data.is_login==1){				
			$("#share"+shareto).attr("href",data.html);
			$("#share"+shareto).attr("onclick","");
			$("#share"+shareto).attr("target","_blank");
			$("#toshare"+shareto).click();
		}else{
			$("#ceng").css("display","block");
			$("#login").html(data.html);
		}
	});
}