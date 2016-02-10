define(function(require, exports, module){
	var $ = require("jquery")
	require("bootstrap")
	$ = jQuery
	
	exports.test = function(){
		$("a").hover(function(){
			$(this).tab("show")
		})
	}
})
