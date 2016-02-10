var DEFAULT_COLOR = "#0aa770";

// theme elements 
var menuBar = document.querySelector(".menu-bar")
var activeLi = document.querySelector("li.active")
var navTextLeft = document.querySelector(".nav-text-left a")
var navTextRight = document.querySelector(".nav-text-right a")
var themeA = document.querySelectorAll(".theme-row a")
var panel = document.querySelector(".panel-success")
var thumbnail = document.querySelector(".thumbnail")


// set the theme color
function setThemeColor(color) {
	console.log("set theme color start")
	menuBar.style.borderTopColor = color
	activeLi.style.backgroundColor = color
	navTextLeft.style.color = color
	navTextRight.style.color = color
	panel.style.borderColor = color
	thumbnail.style.borderColor = color
	for (var i = 0; i < themeA.length; i++) {
		themeA[i].style.color = color
	}
	// store the theme
	// all the same color, write time for practice purpose
	localStorage.setItem("a", "aaa")
	localStorage.setItem('menuBarColor', color)
	localStorage.setItem('activeLiColor', color)
	localStorage.setItem('navTextLeftColor', color)
	localStorage.setItem('navTextRightColor', color)
	localStorage.setItem('themeAColor', color)

	console.log("set theme color end")
}


function applyTheme() {
	console.log(this)
	var themeColor = this.style.backgroundColor
	setThemeColor(themeColor)
	console.log("t2...end: " + themeColor)
}

// theme events
function themeEvent() {
	document.getElementById("t1").onclick = applyTheme
	document.getElementById("t2").onclick = applyTheme
	document.getElementById("t3").onclick = applyTheme
	document.getElementById("t4").onclick = applyTheme
	document.getElementById("t5").onclick = applyTheme
}

// init theme color
function initTheme() {
	if (localStorage.getItem("menuBarColor")) {
		var themeColor = localStorage.getItem("menuBarColor")
		setThemeColor(themeColor)
		console.log("theme color: " + themeColor)
	} else {
		setThemeColor(DEFAULT_COLOR)
		console.log("DEFAUT")
	}
}

themeEvent()
initTheme()

console.log('load....')