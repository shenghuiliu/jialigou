$(function(){
	/*页面轮播图*/
	$.getJSON("json/index/index1.json",function(data){
		$.each(data, function(index,value) {
			$(".bannerImg").append(`<li style="z-index:${value.index}"><a href='#'><img src=${value.img}/></a></li>`)
		}); 
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
					$(".bannerNum li").eq(index).addClass("current").siblings().removeClass("current")
					$(".bannerImg li").eq(index).fadeIn(500).siblings().fadeOut(500)
				},3000)
			}
		})
		$.timer();
	})
	
	
	/*页面导航*/
	$("#nav .navCenter .navName a").click(function(){
		$(this).parent().addClass("navColor").siblings().removeClass("navColor")
	})
	
	
	
	/*二级菜单*/
	$(".secondaryMenu .MenuList").mouseenter(function(){
		$(this).css({"background":"#fff"})
		$(this).eq(0).find("a").css({"color":"#444"})
		$(this).find(".MenuHidden").css({"display":"block"})
	}).mouseleave(function(){
		$(this).css({"background":"#3B2C33"})
		$(this).eq(0).find("a").css({"color":"#fff"})
		$(this).find(".MenuHidden").css({"display":"none"})
	})
	
	
	
	
	
	
	
	
	
	
	
	/*今日、昨日热播*/
	$.getJSON("json/index/HotImg.json",function(data){
		$.each(data,function(index,value){
			$(".HotMain .MainRight").append(`<li>
						<span class="Time">${value.timer}</span>
						<div class="CartImg">
							<span class="zhibo">直播</span>
							<a href="#">
								<img src=${value.img} style="width: 228px;height: 228px;"/>
							</a>
						</div>
						<div class="CartInformation">
							<p class="CartName">
								<a href="#">${value.name}</a>
							</p>
							<p class="CartMoney">${value.price}</p>
						</div>
					</li>`)
		})
	})
	$.getJSON("json/index/Hothidden.json",function(data){
		$.each(data,function(index,value){
			$(".HotMain .MainHidden").append(`<li>
						<span class="Time">${value.timer}</span>
						<div class="CartImg">
							<span class="zhibo">直播</span>
							<a href="#">
								<img src=${value.img} style="width: 228px;height: 228px;"/>
							</a>
						</div>
						<div class="CartInformation">
							<p class="CartName">
								<a href="#">${value.name}</a>
							</p>
							<p class="CartMoney">${value.price}</p>
						</div>
					</li>`)
		})
	})
	$(".MainLeft .MainImg ul li").click(function(){
		$(this).addClass("TitleColor").siblings().removeClass("TitleColor")
		$(".MainRight").css({"display":"block"}).next().css({"display":"none"})
	})
	$(".MainLeft .MainImg ul i").click(function(){
		$(this).addClass("TitleColor").siblings().removeClass("TitleColor")
		$(".MainHidden").css({"display":"block"}).prev().css({"display":"none"})
	})
	
	$(".MainRight").on( "mouseover" , " li ",function(){
		$(this).css({"border":"1px solid #ccc"})
	}).on("mouseout","li",function(){
		$(this).css({"border":"1px solid #F8F8F8"})
	})
	
	$(".MainHidden").on( "mouseover" , " li ",function(){
		$(this).css({"border":"1px solid #ccc"})
	}).on("mouseout","li",function(){
		$(this).css({"border":"1px solid #F8F8F8"})
	})

	/*页面热销推荐*/
	$.getJSON("json/index/SellCart.json",function(data){
		$.each(data,function(index,value){
			$(".HotMain .HotSell").append(`<li>
						<a href="#">
							<img src=${value.img} style="width: 228px;height: 228px;"/>
						</a>
						<div class="SellInformation">
							<p class="SellName">
								<a href="#">${value.name}</a>
							</p>
							<p class="SellPrice">${value.price}</p>
							<p class="SellNum">已热销：${value.num}件</p>
						</div>
					</li>`)
		})
	})
	$(".HotSell").on( "mouseover" , " li ",function(){
		$(this).css({"border":"1px solid #ccc"})
	}).on("mouseout","li",function(){
		$(this).css({"border":"1px solid #F8F8F8"})
	})
	
	
	/*页面楼梯一楼*/
	var str ='';
	$.ajax("json/index/floor.json")
	
	.then(function(res){
		for(var i = 0;i < 6;i++){
			str += `<li>
								<a href="#">
									<img src=${res[i].img} style="width: 167px;height: 167px;"/>
								</a>
								<div class="floorBannerInformation">
									<p class="floorInformation">
										<a href="#">${res[i].name}</a>
									</p>
									<p class="floorPrice">${res[i].price}</p>
								</div>
							</li>`;
		}
	$(".floorBannerRight ul").html(str);
	})
	
	
	$(".floorBannerRight").on( "mouseover" , " li ",function(){
		$(this).css({"border":"1px solid #ccc"})
	}).on("mouseout","li",function(){
		$(this).css({"border":"1px solid #F8F8F8"})
	})
	/*页面楼梯二楼*/
	var str1 ='';
	$.ajax("json/index/floor.json")
	
	.then(function(res){
		for(var i = 6;i < 12;i++){
			str1 += `<li>
								<a href="#">
									<img src=${res[i].img} style="width: 167px;height: 167px;"/>
								</a>
								<div class="floorBannerInformation">
									<p class="floorInformation">
										<a href="#">${res[i].name}</a>
									</p>
									<p class="floorPrice">${res[i].price}</p>
								</div>
							</li>`;
		}
	$(".floorBannerRight2 ul").html(str1);
	})
	$(".floorBannerRight2").on( "mouseover" , " li ",function(){
		$(this).css({"border":"1px solid #ccc"})
	}).on("mouseout","li",function(){
		$(this).css({"border":"1px solid #F8F8F8"})
	})
	/*页面楼梯三楼*/
	var str2 ='';
	$.ajax("json/index/floor.json")
	
	.then(function(res){
		for(var i = 12;i < 18;i++){
			str2 += `<li>
								<a href="#">
									<img src=${res[i].img} style="width: 167px;height: 167px;"/>
								</a>
								<div class="floorBannerInformation">
									<p class="floorInformation">
										<a href="#">${res[i].name}</a>
									</p>
									<p class="floorPrice">${res[i].price}</p>
								</div>
							</li>`;
		}
	$(".floorBannerRight3 ul").html(str2);
	})
	$(".floorBannerRight3").on( "mouseover" , " li ",function(){
		$(this).css({"border":"1px solid #ccc"})
	}).on("mouseout","li",function(){
		$(this).css({"border":"1px solid #F8F8F8"})
	})
	/*页面楼梯四楼*/
	var str3 ='';
	$.ajax("json/index/floor.json")
	
	.then(function(res){
		for(var i = 18;i < 24;i++){
			str3 += `<li>
								<a href="#">
									<img src=${res[i].img} style="width: 167px;height: 167px;"/>
								</a>
								<div class="floorBannerInformation">
									<p class="floorInformation">
										<a href="#">${res[i].name}</a>
									</p>
									<p class="floorPrice">${res[i].price}</p>
								</div>
							</li>`;
		}
	$(".floorBannerRight4 ul").html(str3);
	})
	$(".floorBannerRight4").on( "mouseover" , " li ",function(){
		$(this).css({"border":"1px solid #ccc"})
	}).on("mouseout","li",function(){
		$(this).css({"border":"1px solid #F8F8F8"})
	})
	
	
	/*页面底部跟随*/
	$("#BottomBanner .BottomClose").click(function(){
		$("#BottomBanner").hide(0)
	})
})
