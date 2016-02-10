
$(function(){
	init()
})

/*********************** data loader **************************/
// nav tab
function loadNavData(){
	$.getJSON("Json/nav.json", function(data){
		var flex = $("<div class='flex'></div>")
		$.each(data,function(i, v){
			$.each(v, function(j, src) {
				var item = $("<div class='item'></div>")
					.append($("<img class='ico' />").attr("src", src))
				flex.append(item)
			});
		})
		$("#nav").append("<div class='container'><h5>咨询信息</h5></div>")
			.append(flex)
	})
}
// recommand data
function loadRecommandData(){
	var newsWrapper = $("#recommand .news-wrapper")
	$.getJSON("Json/recommand.json", function(data){
		console.log(data)
		newsWrapper.append(data)
	})
}
// video tab
function loadVideoData(){
	$.getJSON("Json/video.json", function(data){
			var videoWrapper = $("<div>").addClass("video-wrapper")
			
			$.each(data, function(i, v) {
				var item = $("<div></div>").addClass('item')
				if (v.type == 'clip'){
					item.addClass('flex-v')
					$.each(v.clip, function(i, obj) {
						console.log("obj: "  + obj)
						var clip = $("<div>").addClass('clip').html(
						"<div class='pic'>"+
							"<div class='hover-ico-1'></div>"+
							"<div class='hover-ico-2'></div>"+
							"<div class='duration'>" + obj.dura + "</div>"+
							"<img src='" + obj.src + "' />"+
						"</div>" +
						"<div class='title'>" +
							"<span>" + obj.title + "</span>" +
							"<div></div>" +
						"</div>"
						)
						item.append(clip)
					})
				} else{
					var movie = $("<div>").html(
						"<div class='pic'>"+
							"<div class='superscript'>" + v.type + "</div>"+
							"<div class='hover-ico-1'></div>"+
							"<div class='hover-ico-2'></div>"+
							"<div class='duration'>" + v.dura + "</div>"+
							"<img src='" + v.src + "' />"+
						"</div>" +
						"<div class='title'>" +
							 "<span>" + v.title + "</span>" +
							 "<div class='rate'>" +
							 	"<span class='star'><span></span></span>" + v.rate +
							 "</div>" +
						"</div>"
						)
					var rate = Number(v.rate) / 10 * 65
					movie.find(".star>span").css({"width": rate})
					item.append(movie)
				}
//				console.log(item.html())
				videoWrapper.append(item)
			}); // each end
			$("#video").append(videoWrapper)
		})
}

function loadBuyData(){
	$.getJSON("Json/buy_1.json", function(data){
			var flex = $("<div>").addClass("flex")
			$.each(data, function(i, v){
				var buyItem = $("<div class='buy-item'></div>")
				buyItem.append($("<img class='buy-img' src='" + v.src + "' />"))
				buyItem.append("<div>").children(":last")
					.append($("<a href='#'></a>").text(v.desc))
					.append($("<span class='price'></span>").text(v.price))
				flex.append(buyItem)
			});
			
			$("#buy").append(flex)
//			sessionStorage.setItem("buy-loaded", true)
		})
}

function loadFloatNews(){
	$.getJSON("Json/floatNews.json", function(data){
		console.log(data)
		var html = "";
		$.each(data, function(key, value){
			html += "<li><a href='#'>" + value + "</a></li>"
		})
		$(".float-news").append("<ul>" + html + "</ul>")
	})
}

/*********************** data loader end **************************/
/*********************** register events **************************/
function TabClickListener(){}

TabClickListener.prototype.startingTab = function(){
//	if(sessionStorage.getItem("activeTab")){
//		
//	}
}
TabClickListener.prototype.mineTabListener = function(){
	$("[href='#mine']").click(function(){
		sessionStorage.setItem("activeTab", "mine")
	})
}
TabClickListener.prototype.videoTabClickListener = function(){
	var load = 0
	$("[href='#video']").click(function(){
		if (load++ == 0){
			loadVideoData()
		}
		sessionStorage.setItem("activeTab", "video")
	}) 
}
TabClickListener.prototype.buyTabClickListener = function (){
	var load = 0
	$("[href='#buy']").click(function(){
		if( 0 == load++){
			loadBuyData()
		}
		sessionStorage.setItem("activeTab", "buy")
	}) 
}
TabClickListener.prototype.recommandTabClickListener = function(){
	var load = 0
	$("[href='#recommand']").click(function(){
		if(load++ == 0){
			loadFloatNews();
		}
		sessionStorage.setItem("activeTab", "recommand")
	})
}
TabClickListener.prototype.navTabClickListener = function(){
	$("[href='#nav']").click(function(){
		sessionStorage.setItem("activeTab", "nav")
	})

}

function scrollToBottom(){
	var tabDom = $(".tab-content").first().get(0)
	var tabHeight = tabDom.offsetHeight + tabDom.offsetTop
	var docHeight = window.scrollY + window.innerHeight
	if(docHeight - 200 > tabHeight){
		return true
	} else{
		return false
	}
}
var floatNews = $(".float-news")
var tabContentHeight = $(".tab-content")[0].offsetTop

function floatNewsReachTop(){
//	console.log(window.scrollY, floatNews[0].offsetTop)
	if (window.scrollY > floatNews[0].offsetTop){
		return true
	} else {
		return false
	}
}
function floatNewsBack(){
	console.log(scrollY, tabContentHeight)
	if (window.scrollY <= tabContentHeight){
		return true
	} else {
		return false
	}
}
function floatNewsFixed(){
	if (floatNewsReachTop()){
		floatNews.css({"position": "fixed", "top": "0", "right": "190"})
		$(window).off("scroll", floatNewsFixed)
		$(window).on("scroll", floatNewsRelative)
	}
}
function floatNewsRelative(){
	if (floatNewsBack()){
		floatNews.css({"position": "relative", "top": "initial", "right": "initial"})
		$(window).off("scroll", floatNewsRelative)
		$(window).on("scroll", floatNewsFixed)
	}
	
}

function scrollListener(){
	var toTop = $("#to-top")
	$(window).on("scroll", floatNewsFixed)
	$(window).scroll(function(){
		if(window.scrollY > 100){
			toTop.css("visibility", "visible")
		} else {
			toTop.css("visibility", "hidden")
		}
		
		if (scrollToBottom()){
			switch (sessionStorage.getItem("activeTab")){
				case "recommand":
				console.log("recommand")
					loadRecommandData()
					break;
				case "nav":
					loadNavData()
					break;
				case "video":
					loadVideoData()
					break;
				case "buy":
					loadBuyData()
					break;
				default:
					break;
			}
			
		}
	})
	
}
/*********************** register events end **************************/
function setup(){
	if (!sessionStorage.getItem("activeTab")){
		sessionStorage.setItem("activeTab", "recommand")
	} else {
		$("[href='#" + sessionStorage.getItem("activeTab") + "']").click()
	}
	if (sessionStorage.getItem("activeTab") == "recommand"){
		loadFloatNews()
	}
}

function init(){
	setup()
	more_prod();
	searchBox();
	settingMenu()
	mineNavTrangle()
	toTop()
	
	var l = new TabClickListener()
	// video tab click
	l.videoTabClickListener()
	// buy tab click
	l.buyTabClickListener()
	// recommand click
	l.recommandTabClickListener()
	l.navTabClickListener()
	l.mineTabListener()
	
	scrollListener()
}
	
/***********************animation **************************/

function more_prod(){
	$("#more_prod").hover(function(){
		$("#more_prod_list").css({"display":"block"})
	})
	$("#more_prod_list").mouseleave(function(){
		var self = $("#more_prod_list")
		setTimeout(function(){
			self.css({"display":"none"})
		}, 200)
	})
}

function searchBox(){
	$("#search-box").focus(function(){
		$(this).parent().css({'borderColor':"#317EF3"})
	}).blur(function(){
		$(this).parent().css({'borderColor':"#CCCCCC"})
	})
}

function settingMenu(){
	$("#setting").mouseover(function(){
		$("#setting-menu").css({"display":"block"})
	})
	$("#setting-menu").mouseleave(function(){
		var self = $(this)
		setTimeout(function(){
			self.css({"display":"none"})
		}, 400)
	})
}
function mineNavTrangle(){
	// mine tab trangle animation
	$("#mine-content").on("hide.bs.collapse", function(){
		$(".header-line .ico").attr("class", "ico glyphicon glyphicon-triangle-right")
	})
	.on("show.bs.collapse", function(){
		$(".header-line .ico").attr("class", "ico glyphicon glyphicon-triangle-bottom")
	})
}
function toTop(){
	$("#to-top").click(function(){
        $('html,body').animate({scrollTop:0}, 300)  
	})
}

/***********************animation end **************************/


