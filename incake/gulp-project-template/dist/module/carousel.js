define(function(){
	function Carousel(){
		
	}


	Carousel.prototype.init = function(box){
		var box = $(box),
			ul = box.find("ul"),
			aLi = box.find('ul li'),
			ol = box.find('ol'),
			aBtn = box.find('ol li'),
			goPrev = $("#goPrev"),
			goNext = $("#goNext");
		var index = 0;//存当前处于第几张照片
		var flag = false;//没有播放
		aBtn.on("click",function(){
			console.log($(this));
			if(!flag){
				flag = true;
				console.log(this);
				$(this).addClass('ac').siblings().removeClass('ac');
				index = $(this).index();
				aLi.eq(index).fadeIn(1000).siblings().fadeOut(1000,function(){
					flag = false;
				});
				console.log(index);
			}
		});
		goPrev.on("click",function(){
			if(!flag){
				flag = true;
				aLi.eq(index).stop().fadeOut(1000);
				index--;
				if(index < 0)index = aLi.length-1;
				aBtn.eq(index).addClass('ac').siblings().removeClass('ac');
				aLi.eq(index).stop().fadeIn(1000,function(){
					flag = false;
				})
			}
		});
		goNext.on("click",function(){
			if(!flag){
				flag = true;
				aLi.eq(index).stop().fadeOut(1000);
				index++;
				if(index > aLi.length-1) index = 0;
				aBtn.eq(index).addClass('ac').siblings().removeClass('ac');
				aLi.eq(index).stop().fadeIn(1000,function(){
					flag = false;
				})
			}
		});

		var timer = null;
		function auto(){
			timer = setInterval(function(){
				goNext.trigger('click');
			},4000);
		}
		auto();
		$(box).hover(function(){
			clearInterval(timer);
		},auto);
	};
	return new Carousel();
})