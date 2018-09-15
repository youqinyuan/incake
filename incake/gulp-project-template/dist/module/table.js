define(function(){
	//console.log($);
	function Table(){

	};
	Table.prototype.init=function(obj){
		var _this = this;
		this.btn =  obj.btn;
		this.big = obj.big;
		this.btn.on("click",function(){
			$(this).addClass('cn').siblings().removeClass('cn');
			_this.big.eq($(this).index()).addClass('ac').siblings().removeClass('ac');
		})

	}
	
	return new Table();
})