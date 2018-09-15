//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["header","footer","tab","table","url","template","cookie"],function(header,footer,tab,table,url,template,cookie){
		header.init();
		footer.init();
		$(function(){
			var id = $.cookie('id');

			//console.log(id);
			var option = "id="+id;
			$.get(url.url+"/v1/detail.php",option,function(data){
				data = JSON.parse(data);

				console.log(data);
				var html = template("list",{data: data});
				$(".exhibit").html(html);
				var num=1;
				$(".n").val(num);
				$("#add").on("click",function(){
					var n=$(this).prev().val();
					var num=parseInt(n)+1;
					if(num==0){ return;}
					$(this).prev().val(num);

				});
				$(".j").on("click",function(){
					var n=$(this).next().val();
					var num=parseInt(n)-1;
					if(num==0){ return}
					$(this).next().val(num);
				})

				tab.init({
					btn: $(".show_img li"),
					big: $(".show li")
				});
				table.init({
					btn: $(".content span"),
					big: $(".jia li")
				});

				//console.log($("#basket"));
				//购物车
			
				$("#basket").on("click",function(){
					//console.log(123);
					//console.log($(this).parent().parent().children().eq(1).children().eq(1).children());
					//判断当前点击的的磅数
					for(var i=0;i<4;i++){
						if($(".content").children().eq(i).hasClass('cn')){
							var size = i;
						}
					}
						//找到蛋糕尺寸的大小
						var cakesize = $(this).parent().parent().children().eq(1).children().eq(size).children();
						//找到蛋糕的价格
						var cakeprice = $(this).parent().parent().children().eq(2).children().eq(1).children().eq(1).children().eq(size).children();
						//创建一个购物车
						var car = $.cookie('car');
						//判断之前是否有购物车
						if(car){
							car = JSON.parse(car);
						}else{
							car = [];
						}
						//遍历当前购物车是否有点击加购商品，有就加一
						for(var i = 0;i < car.length;i++){
							if(car[i].name == data[0].cakeName &&car[i].cakeprice == cakeprice){
								car[i].num++;
								var arr = JSON.stringify(car);
								$.cookie("car",arr,{path:'/'});
								return;
							} 
						}
						//添加商品
						// var obj = {
						// 	name:data[0].cakeName,
						// 	num:1,
						// 	src:data[0].cakeImg1,
						// 	id:id,
						// 	size:cakesize,
						// 	cakeprice:cakeprice
						// }
						// car.push(obj);
						// var arr = JSON.stringify(car);
						// $.cookie("car",arr,{path:'/'});
						// console.log(arr);
						// alert("蛋糕添加成功");	
				});


			});


			
		});

		
		
	});	
})