define(function(require, exports, module){
	$ = jQuery
	
	function Slider(selector){
		this.a = 100
	}
	
	Slider.prototype.init = function(selector){
			// slider window 
			var slider = $(selector)
			var windowArr = slider.find(".window")
			var width = windowArr[0].offsetWidth
			
			function slideToLeft(){
				windowArr = slider.find(".window")
				slider.find(".slide-window-wrapper").css({marginLeft: "-=" + width})
					.prepend(windowArr.last())
					.animate({
						marginLeft: "+=" + width
					}, 1000 )
			}
			
			function slideToRight(){
				windowArr = slider.find(".window")
				slider.find(".slide-window-wrapper").append(windowArr.first().clone())
					.animate({
						marginLeft: "-=" + width
					}, 1000, function(){
						$(this).css({marginLeft: "+=" + width})
						windowArr.first().remove()
					})
			}
			
			slider.find(".control").click(function(e){
				e.preventDefault()
				
				if ($(this).hasClass("left")){
					slideToLeft()
				}
				if ($(this).hasClass("right")){
					slideToRight()
				}
			})
	}
	module.exports = Slider

})
