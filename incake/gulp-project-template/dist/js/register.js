//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["header","footer","reg","url"],function(header,footer,reg,url){
		header.init();
		footer.init();
		reg.init("#yam");
		$(function(){
			var oBtn = $("#sub");
			console.log(oBtn);
			var arr =[false,false,false,false];
			$(function(){
				$("#sub").on("click",function(){
					var str = arr.every(function(item){
						return item == true;
					})
					if(str){
						var username = $("input:eq(0)").val();
						var password = $("input:eq(1)").val();
						var option = "username="+username+"&password="+password;
						$.get(url.url+"/v1/register.php",option,function(data){
							data = JSON.parse(data);
							if(data.code){
								alert("注册成功");
								window.location.href = "/html/login.html";
								console.log(data);
							}else{
								aler("注册失败");
							}
					});
					}
					
				});
			}); 
			$("input:eq(0)").blur(function(){
				var str = $(this).val();
				var reg = /^1[34578]\d{9}$/;
				if(reg.test(str)){
					arr[0] = true;
					$(this).next().removeClass('ac');
				}else{
					arr[0] = false;
					$(this).next().addClass('ac');
				}

			});

			$("input:eq(1)").blur(function(){
				var str = $(this).val();
				var reg = /^.{3,}$/;
				if(reg.test(str)){
					arr[1] = true;
					$(this).next().removeClass('ac');
				}else{
					arr[1] = false;
					$(this).next().addClass('ac');
				}
			});
			$("input:eq(2)").blur(function(){
				if($("input:eq(1)").val() === $("input:eq(2)").val()){
					arr[2] = true;
					$(this).next().removeClass('ac');
				}else {
					arr[2] = false;
					$(this).next().addClass('ac');
				}
			});
			$("input:eq(3)").blur(function(){
				if($("input:eq(3)").val().toLowerCase() === $(".btn_reg").html().toLowerCase()){
					arr[3] = true;
					$("#yzm").removeClass('ac');
				}else {
					arr[3] = false;
					$("#yzm").addClass('ac');
				}
			});	
		})
		

	});
})