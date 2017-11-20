$(function(){
	function yzm(){
	 	var arr = [];//存放验证码
	 	for( var i = 0 ; i < 6 ; i ++ ){
	 		var code = getRand(0,9);
	 		arr.push( code );
	 	}
	 	return arr.join("");
	}
	$("#yz").html(yzm())
	$(".yanzheng #btn").click(function(){
		$("#yz").html(yzm())
	})
	console.log($("#yz").html())
	var str = [false,false,false]
	$(".UserLogin #btn").click(function(){
		if($(".loginNum #user").val() == "" || $(".loginPassword #password").val() == "" || $("#yanNum").val() == ""){
			console.log($("#yanNum").val())
			alert("输入信息不能为空")
		}else{
			cookie()
		}
		if(str.indexOf(false)!=-1){
			alert("输入信息有误")
			console.log(str)
		}else{
			location.href = "index.html"
		}
	})
	
	
	function cookie(){
		var arr = document.cookie.split('; ');
		for(var i = 0;i<arr.length;i++){
			var val = arr[i].split('=');
			if(val[0].indexOf('user_') == 0){
				var user = eval('('+val[1]+')');
				var $userId = user.phone
				var $userPass = user.password
			}
			if($userId == $(".loginNum #user").val()){
				str[0] = true
				if($userPass == $(".loginPassword #password").val()){
					str[1] = true
					if($("#yanNum").val() == $("#yz").html()){
						str[2] = true
					}else{
						str[2] = false
					}
				}else{
					str[1] = false
				}
			}else{
				str[0] = false
			}
		}
	}
})
