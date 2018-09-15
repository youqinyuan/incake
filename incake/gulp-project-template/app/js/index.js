//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["header","footer","carousel"],function(header,footer,carousel){
		header.init();
		footer.init();
		carousel.init("#banner");
	});
})