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
		$(".PageNum .numpage").html(index+1)
	})
	$(".PageNum #prevPage").click(function(){
		index--
		if(index < 0){
			index = 0
			alert("已经是第一页了!")
		}else{
			$(".CartMainInformation ul").eq(index).css({"display":"block"}).siblings().css({"display":"none"})
		}
		$(".PageNum .numpage").html(index+1)
	})
	$(".PageNum #nextPage").click(function(){
		index++
		if(index > 2){
			index = 2
			alert("已经是最后一页了!")
		}else{
			$(".CartMainInformation ul").eq(index).css({"display":"block"}).siblings().css({"display":"none"})
		}
		$(".PageNum .numpage").html(index+1)
	})
	
	
	
	
	
	
	/*选择品牌*/
	$(".AllBrand a").click(function(){
		index = $(this).index()
		$(this).addClass("Brand").siblings().removeClass("Brand")
		
		if(index == 0){
			$(".CartMainInformation ul").eq(index).css({"display":"block"}).siblings().css({"display":"none"})
			$(".PageNum").css({"display":"block"})
		}else{
			$(".CartMainInformation ul").eq(index+2).css({"display":"block"}).siblings().css({"display":"none"})
			$(".PageNum").css({"display":"none"})
		}
	})
	
	var str3 = ""
	$.ajax("json/cart/cart1.json")
	.then(function(res){
		for(var i = 0;i<9;i++){
			str3 += `<li>
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
		$(".CartMainInformation .cart-list4").html(str3)
	})
	
	var str4 = ""
	$.ajax("json/cart/cart1.json")
	.then(function(res){
		for(var i = 9;i<10;i++){
			str4 += `<li>
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
		$(".CartMainInformation .cart-list5").html(str4)
	})
	
	var str5 = ""
	$.ajax("json/cart/cart1.json")
	.then(function(res){
		for(var i = 10;i<11;i++){
			str5 += `<li>
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
		$(".CartMainInformation .cart-list6").html(str5)
	})
	
	
	var str6 = ""
	$.ajax("json/cart/cart1.json")
	.then(function(res){
		for(var i = 11;i<12;i++){
			str6 += `<li>
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
		$(".CartMainInformation .cart-list7").html(str6)
	})
	
	/*列表页左侧边框*/
	var str8 = ""
	$.ajax("json/cart/cart.json")
	.then(function(res){
		for(var i = 43;i<48;i++){
			str8 += `<li>
								<a href="###">
									<img src=${res[i].img} style="width: 186px;"/>
								</a>
								<div class="FeatureName">${res[i].name}</div>
								<div class="FeaturePrice">${res[i].price}</div>
							</li>`
		}
		$(".CartListLeft .FeatureInformation").html(str8)
	})
	
	
	/***列表页左侧***/
	var arr = [false,false,false,false,false,false,false,false]
	$(".CartListLeftTop").click(function(){
		index = $(this).index()
		if(arr[index]){
			arr[index] = false
			$(this).find(".CartListLeftContent").css({"display":"none"})
			$(this).siblings().find(".CartListLeftContent").css({"display":"none"})
		}else{
			$(this).find(".CartListLeftContent").css({"display":"block"})
			$(this).siblings().find(".CartListLeftContent").css({"display":"none"})
			arr[index] = true
		}
	})
})
