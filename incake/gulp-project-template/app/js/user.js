//首先引入config
require(["config"],function(){
	require(["jquery","cookie"],function($){
			var num = $.cookie('username');
			if(num){
				$(".logo_in").html(num);
				
			}else{
				
			}

	})
	
})