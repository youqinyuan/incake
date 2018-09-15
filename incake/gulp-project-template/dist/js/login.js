//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["header","footer","reg","url"],function(header,footer,reg,url){
		header.init();
		footer.init();
		reg.init("#yam");
		var arr = [false];
		$(function(){
			$("#btn").on("click",function(){
				$.ajax({
					url:url.url+"/v1/login.php",
					type:"GET",
					data:{username:$("input:eq(0)").val(),password:$("input:eq(1)").val()},
					dataType:"json",
					success:function(data){
						console.log(data);
						if(data.code){
							window.location.href = "/index.html";
							var username = $("input:eq(0)").val();
							$.cookie('username',username,{path:'/'});	
						}else{
							alert("该账户不存在,请输入注册时的账户");
						}
					}
				})
			});
			$("input:eq(2)").blur(function(){
				console.log($("input:eq(2)"));
				console.log($(".btn-reg").html());
				if($("input:eq(2)").val().toUpperCase() === $(".btn-reg").html().toUpperCase()){
					arr[0] = true;
					$("#x").removeClass('y');
				}else {
					arr[0] = false;
					$("#x").addClass('y');
				}
			})
		})	
	})
});