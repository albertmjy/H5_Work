
function $(id){
	return document.getElementById(id);
}

window.onload = function(){
	more_prod();
	searchBox();
	settingMenu()
}

function more_prod(){
	if (document.attachEvent){
		// ie
		$("more_prod").attachEvent("onmouseover", function(){
			$("more_prod_list").style.display = "block";
		})
		$("more_prod").attachEvent("onmouseout", function(){
			$("more_prod_list").style.display = "none";
		})
	} else {
		$("more_prod").addEventListener("mouseenter", function(){
			$("more_prod_list").style.display = "block";
		}, false);
		
		$("more_prod_list").addEventListener("mouseleave", function(){
			setTimeout(function(){
				$("more_prod_list").style.display = "none";	
			}, 10)
			
		},false);
	}
}

function searchBox(){
	// ie
	if (document.attachEvent){
		$("search-box").attachEvent("onfocus", function(){
			this.parentNode.style.borderColor = "#317EF3"
		})
		$("search-box").attachEvent("onblur", function(){
			this.parentNode.style.borderColor = "#CCCCCC"
		})
	} else{
		$("search-box").addEventListener("focus", function(){
			this.parentNode.style.borderColor = "#317EF3"
		}, true)
		$("search-box").addEventListener("blur", function(){
			this.parentNode.style.borderColor = "#CCCCCC";
		}, true)	
	}
	
}

function settingMenu(){
	if(document.attachEvent){
		// ie
		$("setting").attachEvent("onmouseover", function(){
			$("setting-menu").style.display = "block";
		})
		$("setting-menu").attachEvent("onmouseout", function(){
			setTimeout(function(){
				$("setting-menu").style.display = "none";
			}, 100)
		})
	} else{
		$("setting").addEventListener("mouseover", function(){
			$("setting-menu").style.display = "block";
		}, true);
		
		$("setting-menu").addEventListener("mouseleave", function(){
			setTimeout(function(){
				$("setting-menu").style.display = "none";
			}, 100)
			
		},false)
	}
	
	
}
