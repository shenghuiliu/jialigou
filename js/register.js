/*注册表单验证*/
$(function(){
	/*判断用户名是否存在*/
	var isTrue = [false,false,false]
	$("#phoneNum").blur(function(){
		var res = /^1[3|5|7|8]\d{9}$/;
		if($(this).val() == ""){
			$(".userJudage").html("手机号不能为空")
			$(".userJudage").css({"color":"red"})
			isTrue[0]=false;
		}else{
			if(res.test($(this).val())){
				$(".userJudage").html("手机号输入正确")
				$(".userJudage").css({"color":"green"})
				isTrue[0]=true;
			}else{
				$(".userJudage").html("手机号输入有误")
				$(".userJudage").css({"color":"red"})
				isTrue[0]=false;
			}
		}
		cookie($("#phoneNum"))
	})
	/*判断密码是否符合正则*/
	$("#Rpassword").blur(function(){
		var res = /^\w{6,18}$/;
		if($(this).val() == ""){
			$(".passJudage").html("密码不能为空")
			$(".passJudage").css({"color":"red"})
			isTrue[1]=false;
		}else{
			if(res.test($(this).val())){
				$(".passJudage").html("密码输入正确")
				$(".passJudage").css({"color":"green"})
				isTrue[1]=true;
			}else{
				$(".passJudage").html("密码输入有误")
				$(".passJudage").css({"color":"red"})
				isTrue[1]=false;
			}
		}
	})
	/*判断两次密码输入是否一致*/
	$("#Rpassword1").blur(function(){
		if($(this).val()==""){
			$(".pass1Judage").html("确认密码不能为空")
			$(".pass1Judage").css({"color":"red"})
			isTrue[2]=false;
		}else{
			if($(this).val()==$("#Rpassword").val()){
				$(".pass1Judage").html("两次密码输入一致")
				$(".pass1Judage").css({"color":"green"})
				isTrue[2]=true;
			}else{
				$(".pass1Judage").html("密码输入有误")
				$(".pass1Judage").css({"color":"red"})
				isTrue[2]=false;
			}
		}
	}) 
	
	
	let id = new Date().getTime()
	var date = new Date();
	date.setDate(date.getDate() + 7);
	/*注册*/
	$(".Register .Pass").click(function(){
		if(isTrue.indexOf(false)!=-1){
			alert("输入的信息有误!");
		}else{
			$(".RegisterLeft").css({"display":"none"})
			$(".RegisterRight").css({"display":"none"})
			$(".RegisterYes #step-3").css({"display":"block"})
			$(".RegisterCenter").css({"height":"80px"})
			var $Timer = $("#TimeNum").html();
			var timer=null;
			clearInterval(timer);
			timer=setInterval(function(){
				$Timer--;
				$("#TimeNum").html($Timer);
				if($Timer<=0){
					location.href="index.html"
				}
			},1000)
			
			var userPhone = $("#phoneNum").val()
			var userPassword = $("#Rpassword").val()
			var cookieValue = "{id:" + id + ',phone:"' + userPhone + '",password:' + userPassword + "}";
			var cookieKey = "user_" + id;
			document.cookie = cookieKey + '=' + cookieValue + ";expires=" + date + ";path=/";
		}	
	})
	
	function cookie(obj){
		var arr = document.cookie.split('; ');
		for(var i = 0;i<arr.length;i++){
			var val = arr[i].split('=');
			if(val[0].indexOf('user_') == 0){
				var user = eval('('+val[1]+')');
				var $userId = user.phone
				var $userPass = user.password
			}
			if($userId == obj.val()){
				alert("用户名字已存在")
				$(".userJudage").html("用户名已存在")
				$(".userJudage").css({"color":"red"})
				isTrue[0]=false;
			}
		}
	}
})

