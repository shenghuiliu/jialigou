$(function(){
	var str = ""
	$.ajax("json/list/list.json")
	.then(function(res){
		for(var i =0;i<3;i++){
			str += `<li>
						<div class="listBannerInformation">
							<p class="listBannerPrice">
								<i>¥</i>
								${res[i].price}
							</p>
							<p class="listBannerName">
								${res[i].name}
							</p>
						</div>
						<a href="#">
							<img src=${res[i].img} style="width: 143px;
height: 143px;margin-left: 20px; float: left;"/>
						</a>
					</li>`
		}
		$(".listBannerBottomCenter ul").html(str)
	})
	/*新品推荐json*/
	var str1 = ""
	$.ajax("json/list/list.json")
	.then(function(res){
		for(var i = 3;i<6;i++){
			str1 += `<li class="cart-List">
							<a href="#">
								<img src=${res[i].img} style="width: 228px;
height: 228px;"/>
							</a>
							<div class="cart-List-Information">
								<p class="cart-Price">
									<span>${res[i].price}</span>
								</p>
								<p class="cart-Name">
									<a href="#">${res[i].name}</a>
								</p>
							</div>
						</li>`
		}
		$(".listMainCenterLeft .cart-Information").append(str1)
	})
	/*热销推荐json*/
	var str2 = ""
	$.ajax("json/list/list.json")
	.then(function(res){
		for(var i = 6;i<9;i++){
			str2 += `<li class="cart-List">
							<a href="#">
								<img src=${res[i].img} style="width: 228px;
height: 228px;"/>
							</a>
							<div class="cart-List-Information">
								<p class="cart-Price">
									<span>${res[i].price}</span>
								</p>
								<p class="cart-Name">
									<a href="#">${res[i].name}</a>
								</p>
							</div>
						</li>`
		}
		$(".listMainCenterLeft .cart-Information2").append(str2)
	})
	
	/*优惠专区json*/
	var str3 = ""
	$.ajax("json/list/list.json")
	.then(function(res){
		for(var i = 9;i<12;i++){
			str3 += `<li class="cart-List">
							<a href="#">
								<img src=${res[i].img} style="width: 228px;
height: 228px;"/>
							</a>
							<div class="cart-List-Information">
								<p class="cart-Price">
									<span>${res[i].price}</span>
								</p>
								<p class="cart-Name">
									<a href="#">${res[i].name}</a>
								</p>
							</div>
						</li>`
		}
		$(".listMainCenterLeft .cart-Information3").append(str3)
	})
	/*厂家推荐json*/
	var str4 = ""
	$.ajax("json/list/list.json")
	.then(function(res){
		for(var i = 12;i<15;i++){
			str4 += `<li class="cart-List">
							<a href="#">
								<img src=${res[i].img} style="width: 228px;
height: 228px;"/>
							</a>
							<div class="cart-List-Information">
								<p class="cart-Price">
									<span>${res[i].price}</span>
								</p>
								<p class="cart-Name">
									<a href="#">${res[i].name}</a>
								</p>
							</div>
						</li>`
		}
		$(".listMainCenterLeft .cart-Information4").append(str4)
	})
})
