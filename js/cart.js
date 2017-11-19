$(function(){
	/*第一页*/
	var str = ""
	$.ajax("json/cart/cart.json")
	.then(function(res){
		for(var i = 0;i<16;i++){
			str += `<li>
									<a href="#">
										<img src=${res[i].img} style="width:218px;height:218px;"/>
									</a>
									<div class="InformationCart">
										<p class="NameCart">
											<a href="#">${res[i].name}</a>
										</p>
										<p class="PriceCart">${res[i].price}</p>
										<p class="NumCart">${res[i].num}</p>
										<div class="Chance clearfix">
											<a href="#" style="margin-right: 10px;">加入购物车</a>
											<a href="#">收藏</a>
										</div>
									</div>
								</li>`
		}
		$(".CartMainInformation .cart-list1").html(str)
	})
	/*第二页*/
	var str1 = ""
	$.ajax("json/cart/cart.json")
	.then(function(res){
		for(var i = 16;i<32;i++){
			str1 += `<li>
									<a href="#">
										<img src=${res[i].img} style="width:218px;height:218px;"/>
									</a>
									<div class="InformationCart">
										<p class="NameCart">
											<a href="#">${res[i].name}</a>
										</p>
										<p class="PriceCart">${res[i].price}</p>
										<p class="NumCart">${res[i].num}</p>
										<div class="Chance clearfix">
											<a href="#" style="margin-right: 10px;">加入购物车</a>
											<a href="#">收藏</a>
										</div>
									</div>
								</li>`
		}
		$(".CartMainInformation .cart-list2").html(str1)
	})
	
	/*第三页*/
	var str2 = ""
	$.ajax("json/cart/cart.json")
	.then(function(res){
		for(var i = 32;i<43;i++){
			str2 += `<li>
									<a href="#">
										<img src=${res[i].img} style="width:218px;height:218px;"/>
									</a>
									<div class="InformationCart">
										<p class="NameCart">
											<a href="#">${res[i].name}</a>
										</p>
										<p class="PriceCart">${res[i].price}</p>
										<p class="NumCart">${res[i].num}</p>
										<div class="Chance clearfix">
											<a href="#" style="margin-right: 10px;">加入购物车</a>
											<a href="#">收藏</a>
										</div>
									</div>
								</li>`
		}
		$(".CartMainInformation .cart-list3").html(str2)
	})
	var index = 0
	$(".PageNum .NumPage a").click(function(){
		index = $(this).index()
		$(".CartMainInformation ul").eq(index).css({"display":"block"}).siblings().css({"display":"none"})
	})
	$(".PageNum #prevPage").click(function(){
		index--
		if(index < 0){
			index = 0
			alert("已经是第一页了!")
		}else{
			$(".CartMainInformation ul").eq(index).css({"display":"block"}).siblings().css({"display":"none"})
		}
	})
	$(".PageNum #nextPage").click(function(){
		index++
		if(index > 2){
			index = 2
			alert("已经是最后一页了!")
		}else{
			$(".CartMainInformation ul").eq(index).css({"display":"block"}).siblings().css({"display":"none"})
		}
	})
})
