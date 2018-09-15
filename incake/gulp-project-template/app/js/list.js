//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","header","footer","url","template","cookie"],function($,header,footer,url,template,cookie){
		header.init();
		footer.init();
		$(function(){
			$.get(url.url+"/v1/list.php",function(data){
				data = JSON.parse(data);
				console.log(data);
				var html = template("list",{data: data});
				$(".middle-wrap").html(html);

				$(".middle dl").on("click",function(){
					var num = $(this).index()+1;
					console.log(num);
					$.cookie('id',num,{path:'/'});
					//console.log(index);
				})
			});

		})
	});
})