var view = {
	commonNewsLine: function(obj){
		var newsLine = $("<div class='news-line'></div>")
					.append($("<div class='text-news-img'><img src='" + obj.news_img + "' /></div>"))
					.append($("<div></div>")
							.append($("<h5>").text(obj.news_title))
							.append($("<p>").text(obj.news_content))
							.append($("<span class='date'>").text(obj.news_date))
						)
					.append($("<label>").text(obj.news_label))
			
		return newsLine
	},
	imgNewsLine: function(obj){
		var imgArr = obj.news_img.split(",")
	
		var imgNewsLine = $("<div class='img-news-line'></div>")
							.append($("<p class='title'></p>").text(obj.news_title))
		// loop for append news imgs
		$.each(imgArr, function(i, v) {
			$("<div class='img'>").append($("<img />").attr("src", v))
				.appendTo(imgNewsLine)
		});
		
		imgNewsLine.append($("<div class='date'></div>").text(obj.news_date))
					.append($("<label class='label label-danger'>").text(obj.news_label))
				
		return imgNewsLine
	},
	bigImgNewsLine: function(obj){
		var newsLine = $("<div class='thumbnail'></div>")
					.append($("<img />").attr("src", obj.news_img))
					.append($("<div class='desc-line'></div>").text(obj.news_title)
							.append($("<span class='like'>").text(obj.news_like))
							)
		return newsLine
	}
}


var handler = {
	
	loadNews: function(id){
		$.getJSON("controller.php?id=" + id, function(data){
			$.each(data, function(i, v){
				var img = v.news_img || ""
				var img = img.split(',')
				if (img.length>1){
					newsLine = view.imgNewsLine(v)
				} else {
					newsLine = view.commonNewsLine(v)
				}
				newsLine.appendTo($( "#" + id + " .news-content"))
			})
		})
	},
	
	
}

var bigImgHandler = {
	loadNews: function(){
		$.getJSON("controller.php?id=image", function(data){
			$.each(data, function(i, v) {
				var newsLine = view.bigImgNewsLine(v)
				newsLine.appendTo("#image .image-content")
			});
		})
	}
}



function EventListener(){
	this.recommandTab = $("a[href='#recommand']")
	this.newsTab = $("a[href='#news']")
	this.localTab = $("a[href='#local']")
	this.imgTab = $("a[href='#image']")
	this.entertainmentTab = $("a[href='#entertainment']")
	this.loadMoreButton = $("#load-more :button")
	this.storge = sessionStorage
	
	this.init = function(){
		this._recommandTabClick()
		this._newsTabClick()
		this._localTabClick()
		this._imgTabClick()
		this._entertainmentTabClick()
		this._loadMoreClick()
		
		this._setCurrentMenu()
	}
	this._setCurrentMenu = function(){
		if (!this.storge.getItem("activeMenu")){
			this.storge.setItem("activeMenu", "recommand")
		}
		$("[href='#" + this.storge.getItem("activeMenu") + "']").click()
	}
	this.__activeMenu = function(name){
		if (name){
			this.storge.setItem("activeMenu", name)
		}
		return this.storge.getItem("activeMenu")
	}
	
	this._recommandTabClick = function(){
		var self = this
		var count = 0
		this.recommandTab.click(function(){
			self.__activeMenu("recommand")
			if (count > 0) return
			handler.loadNews("recommand")
			count++
		})
	}
	this._newsTabClick = function(){
		var self = this
		var count = 0
		this.newsTab.click(function(){
			self.__activeMenu("news")
			if(count>0) return
			handler.loadNews("news")
			count++ 
		})
	}
	this._localTabClick = function(){
		var self = this
		var count = 0
		this.localTab.click(function(){
			self.__activeMenu("local")
			if(count > 0) return
			handler.loadNews("local")
			count++
		})
	}
	this._imgTabClick = function(){
		var self = this
		var count = 0
		this.imgTab.click(function(){
			self.__activeMenu("image")
			if (count >0) return
			bigImgHandler.loadNews()
			count++
		})
	}
	this._entertainmentTabClick = function(){
		var self = this
		var count = 0
		this.entertainmentTab.click(function(){
			self.__activeMenu("entertainment")
			if (count > 0) return
			handler.loadNews("entertainment")
			count++
		})
	}
	
	this._loadMoreClick = function(){
		var self = this
		this.loadMoreButton.click(function(){
			var activeId = self.__activeMenu()
			console.log(activeId)
			if (activeId == "image"){
				bigImgHandler.loadNews()
			} else {
				handler.loadNews(activeId)
			}
		})
	}
}

function ui(){
	// enable tab
	$("#nav-menu a").click(function(e){
		e.preventDefault()
		$(this).tab("show")
	})
}

$(function(){
	ui()

	var evt = new EventListener()
	console.log(evt)
	evt.init()
})
