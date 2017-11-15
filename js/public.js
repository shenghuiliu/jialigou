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
	
	/*页面底部鼠标移入移出*/
	$(".serviceList a").hover(function(){
		$(this).css({"color":"#e91456","text-decoration":"underline"})
	},function(){
		$(this).css({"color":"#333","text-decoration":"none"})
	})
	
	$(".BottomNav p:first-child a").hover(function(){
		$(this).css({"color":"#e91456","text-decoration":"underline"})
	},function(){
		$(this).css({"color":"#333","text-decoration":"none"})
	})
	
	$(".BottomCompany .beihao a").hover(function(){
		$(this).css({"text-decoration":"underline"})
	},function(){
		$(this).css({"text-decoration":"none"})
	})
})
