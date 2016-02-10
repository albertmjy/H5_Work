define(function(require, exports, module){
	var bs = require("bootstrap")
	$ = jQuery
	
	
	exports.init = function(){
		// search box
		var form = $("#search-form")
		form.find("input").focus(function(){
			form.children(".label").css({visibility: "hidden"})
			form.children("button").css({backgroundColor: "#02BB00"})
				.children("span").css({color: "#FFFFFF"})
		}).blur(function(){
			form.children(".label").css({visibility: "initial"})
			form.children("button").css({backgroundColor: "initial"})
				.children("span").css({color: "initial"})
		})
		
		// hover tabs
		$("#recommand-class a").hover(function(){
			$(this).tab("show")
		})
		.on("hide.bs.tab", function(){
			$(this).css({
				"border": "solid 2px transparent",
				})
		})
		.on("show.bs.tab", function(){
			$(this).css({
				"border": "solid 2px transparent",
				"border-bottom": "solid 2px green"
				})
		})
		// tab content
		$(".tab-content .flex-item").hover(function(){
			var self = $(this)
			self.find("p.expandable").slideToggle()
			self.find(".glass").fadeToggle()
		})

		// recommand
		$(".recommand .item").hover(function(){
			$(this).find(".icon").css({backgroundPositionX: "-=36"})
			$(this).find(".text").css({color: "#02BB00"})
		}, function(){
			$(this).find(".icon").css({backgroundPositionX: "+=36"})
			$(this).find(".text").css({color: "initial"})
		})
	}
})
