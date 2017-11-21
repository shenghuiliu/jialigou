$(function(){
	$(".introduceRightTop ul li").click(function(){
		$(this).find("span").removeClass("bgColor").addClass("bgColor1").parent().siblings().find("span").removeClass("bgColor1").addClass("bgColor")
		$(".introduceConcent ul li").eq($(this).index()).css({"display":"block"}).siblings().css({"display":"none"})
	})
	
	/*点击添加数量*/
	$(".detailCartNum .reduce").click(function(){
		var num = $(".detailCartNum #num").val()
		num --
		if($(".detailCartNum #num").val()<=1){
			alert("商品数量最小数量为1")
		}else{
			$(".detailCartNum #num").val(num)
		}
	})
	$(".detailCartNum .add").click(function(){
		var num = $(".detailCartNum #num").val()
		num++
		if($(".detailCartNum #num").val()>=999){
			alert("商品数量最大数量为999")
		}else{
			$(".detailCartNum #num").val(num)
		}
	})
	/*商品各种图*/	
	$(".detailMainLeft .SmallCartImg li").click(function(){
		var index = $(this).index()
		$(".detailMainLeft .BigCartImg li").eq(index).css({"z-index":3}).siblings().css({"z-index":1})
	})
})
