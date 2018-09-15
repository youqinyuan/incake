define(function(){

	function Reg(){

	};

	Reg.prototype.init = function(box){
		var box = $(box);
		var oInput = box.find("input");
		var oCont = box.find("span");
		var arrYz = yanzheng();
		oCont.html(arrYz);
		oCont.on("click",function(){
			arrYz = yanzheng();
			$(this).html(arrYz);
		});

		function randomNum(){
			var num = parseInt(Math.random()*10) + 48;
			return String.fromCharCode(num);
		}
		
		function randomLower(){
			var num = parseInt(Math.random()*26) + 97;
			return String.fromCharCode(num);
		}
		
		function randomUpper(){
			var num = parseInt(Math.random()*26) + 65;
			return String.fromCharCode(num);
		}
		
		function randomChar(){
			var num = parseInt(Math.random()*3);
			
			switch(num){
				case 0 : return randomNum();
				case 1 : return randomLower();
				case 2 : return randomUpper();
			}
		}
		
		function yanzheng(){
			var arr=[];
			for(var i = 0; i < 4; i++){
				arr.push(randomChar());
			}
			return arr;
		}
	}
	return new Reg();

})