//console.log("main by seajs")

define(function(require, exports, module){

require("jquery")

	var ui = require.async("view/ui", function(myUI){
		myUI.init()
	})
	
	var Slider = require("view/Slider")
	var s = new Slider("#hot-class-slider");
	
	s.init("#hot-class-slider");
	s.init("#school")
	s.init("#corp")
	
})
