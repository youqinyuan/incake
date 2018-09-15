//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","header","footer","cookie","template"],function($,header,footer,cookie,template){
		header.init();
		footer.init();
		var car=$.cookie('car');
		 console.log($.cookie('car'));
		var data=JSON.parse(car);
		console.log(data);
		// console.log(data);
		var html = template("list",{data: data});
		$(".container").html(html);

	});
})