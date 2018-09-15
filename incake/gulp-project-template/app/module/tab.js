define(function(){
	//console.log($);
	function Tab(){

	};
	Tab.prototype.init=function(obj){
		var _this = this;
		this.btn =  obj.btn;
		this.big = obj.big;
		this.btn.on("click",function(){
			$(this).addClass('en').siblings().removeClass('en');
			_this.big.eq($(this).index()).addClass('cn').siblings().removeClass('cn');
		})

	}
	
	return new Tab();
})