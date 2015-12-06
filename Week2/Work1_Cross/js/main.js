
function makeStar(){
	var star = document.createElement("div");
	star.className = "star";
	
	var x = 1200 * Math.random();
	var y = 600 * Math.random();
	
	star.style.left = x + "px";
	star.style.top = y + "px";
	
	var a = 10 * Math.random() + 4;
	var b = 5 * Math.random();
	star.style.boxShadow = "0 0 " + a + "px " + b + "px lightgoldenrodyellow"; 
	
	document.body.appendChild(star);
	
	
}

window.onload = function(){
	for (var i = 0; i < 40; i++) {
		makeStar();
	}
}

