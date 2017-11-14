$(function(){
	/*页面顶部移入移出*/
	$(".topAll .topAllCenter a").hover(function(){
		$(this).css({"color":"#e91456","text-decoration":"underline"})
	},function(){
		$(this).css({"color":"#333","text-decoration":"none"})
	})
	
	$(".topAll .topAllRight a").hover(function(){
		$(this).css({"color":"#e91456","text-decoration":"underline"})
	},function(){
		$(this).css({"color":"#333","text-decoration":"none"})
	})
	
	/*页面轮播图*/
	$.getJSON("json/index1.json",function(data){
		$.each(data, function(index,value) {
			$(".bannerImg").append("<li><a href='#'><img src='"+value.img+"'/></a></li>")
		}); 
	})
	var index = 0
	$(".bannerNum li").mouseenter(function(){
		clearInterval($timer)
		$(".bannerNum li").click(function(){
			index = $(this).index()
			$(".bannerImg li").eq(index)
							  .fadeIn(500)
							  .siblings()
							  .fadeOut(500)
			$(this).addClass("current").siblings().removeClass("current").addClass("block")
		})
	}).mouseleave(function(){
		$.timer()
	})
	$.extend({
		timer : function(){
			$timer = setInterval(function(){
				index ++ 
				if(index == 5){
					index = 0
				}
				$(".bannerNum li").eq(index).addClass("current").siblings().removeClass("current").addClass("block")
				$(".bannerImg li").eq(index).fadeIn(500).siblings().fadeOut(500)
			},3000)
		}
	})
	$.timer();
	
	
	
})
