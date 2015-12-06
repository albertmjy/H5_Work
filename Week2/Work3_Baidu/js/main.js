
function $(id){
	return document.getElementById(id);
}

window.onload = function(){
	more_prod();
	searchBox();
	settingMenu()
}

function more_prod(){
	$("more_prod").addEventListener("mouseenter", function(){
		$("more_prod_list").style.display = "block";
	}, false);
	
	$("more_prod_list").addEventListener("mouseleave", function(){
		setTimeout(function(){
			$("more_prod_list").style.display = "none";	
		}, 10)
		
	},false);
}

function searchBox(){
	$("search-box").addEventListener("focus", function(){
		this.parentNode.style.borderColor = "#317EF3"
	}, true)
	$("search-box").addEventListener("blur", function(){
		this.parentNode.style.borderColor = "#CCCCCC";
	}, true)
}

function settingMenu(){
	$("setting").addEventListener("mouseover", function(){
		$("setting-menu").style.display = "block";
	}, true);
	
	$("setting-menu").addEventListener("mouseleave", function(){
		setTimeout(function(){
			$("setting-menu").style.display = "none";
		}, 100)
		
	},false)
}
