var message = {
	success: function(msg){
		$("<div class='well-sm alert alert-success fade in'>")
			.append($("<a href='#' class='close' data-dismiss='alert'>&times;</a>"))
			.append($("<span></span>").text(msg))
		.prependTo($("#r-panel"))
	},
	error: function(msg){
		$("<div class='well-sm alert alert-danger fade in'>")
			.append($("<a href='#' class='close' data-dismiss='alert'>&times;</a>"))
			.append($("<span></span>").text(msg))
		.prependTo($("#r-panel"))
	}
}

function Handler(){
	
	this.uploadNews = function(form, id){
		var formdata = new FormData(form)
		$.ajax({
			type:"post",
			url:"controller.php?id=" + id + "&action=upload",
			async:true,
			contentType: false,
			processData: false,
			data: formdata,
			success: function(data){
				console.log(data)
				if (data.db != "success"){
					message.error("Database failed!")
				} else {
					message.success(data.file)
				}
			}
		}, "json");
		
	}
}

function EvtRegister(){
	this.handler = null
	this.recommand = $("#recommand")
	this.news = $("#news")
	this.local = $("#local")
	this.image = $("#image")
	this.entertainment = $("#entertainment")
	
	this.init = function(){
		this.handler = new Handler()
		this.submitClick(this.recommand)
		this.submitClick(this.news)
		this.submitClick(this.local)
		this.submitClick(this.image)
		this.submitClick(this.entertainment)
	}
	
	this.submitClick = function(el){
		var self = this
		
		$.each(el.find("form"), function(i, form) {
			console.log("1, " +form);
			$(form).submit(function(e){
				e.preventDefault();
				self.handler.uploadNews(form, el.attr("id"))
			})
		});
		
	}
}


$(function(){
//	console.log("start")
	var register = new EvtRegister()
	register.init()
//	message.info(324234)
})
