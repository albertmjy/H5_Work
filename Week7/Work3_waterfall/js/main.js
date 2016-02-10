$(function(){
	var i = 0
	$(window).on("load", function(){
		imgLayout()
	}).scroll(function(){
		var dataImg = [{"src":"img/1.jpg"},{"src":"img/2.jpg"},{"src":"img/3.jpg"},{"src":"img/4.jpg"},{"src":"img/5.jpg"},{"src":"img/6.jpg"}]
		if(isBottom()){
			console.log("load", ++i)
			requestImg(dataImg)
			imgLayout()
		}
	})
	
	// img reach the bottom of the document
	function isBottom(){
		var domLast = $(".img-box").last().get(0)
		var lastHeight = domLast.offsetTop + Math.floor(domLast.offsetHeight/2)
		console.log(window.scrollY, window.innerHeight , lastHeight)
		if (window.scrollY +window.innerHeight > lastHeight){
			return true
		} else{
			return false
		}
	}
	
	// add new image
	function requestImg(dataImg){

		$.each(dataImg, function(i, v){
			var img = $("<img />").attr("src", v.src)
			var div = $("<div>").addClass("thumbnail img-box").append(img).appendTo($(".container").eq(0))
		})
		
	}
})


function imgLayout(){
	var imgBox = $(".img-box")
	var imgWidth = imgBox.eq(0).width()
	var num = Math.floor($(".container").width() / imgWidth)
	
	var arrHeight = []
	imgBox.each(function(i, v){
		 if(i < num){
		 	// 1st line img
		 	arrHeight[i] = v.offsetHeight
		 }
		 else{
		 	// set the position of img other than 1st line
		 	var minHeight = Math.min.apply(null, arrHeight)  // get the min img height
		 	var minIndex = $.inArray(minHeight, arrHeight)   // get the index of min height image
		 	$(v).css({
		 		"position": "absolute",
		 		"top":minHeight,
		 		"left": imgBox[minIndex].offsetLeft
		 	})
		 	arrHeight[minIndex] += v.offsetHeight
		 	
		 }
	})
	
	console.log(arrHeight)
	
	
}
