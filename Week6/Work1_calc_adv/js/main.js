
// for shorthand
function $(id){
	return document.getElementById(id);
}

//var numClearFlag = 0
var calcFlag = 0  // if calc required before +-*/
var expression = []; // for expression [x, y, operander]
var inputBox = $("input-box"); 
var eqFocus = false

/*********************** handler function end *****************************/
function clearInputBox(){
	inputBox.value = 0;
}


function clearExp(){
	expression = []
	//console.log("reset: " + expression)
}


function appendKey(key) {
	inputBox.value += key
}

function newKey(key){
	inputBox.value = key
}

// reset handler
function resetHandler(){
	clearInputBox();
	clearExp();
	calcFlag = 0
}

// num key handler
function appendNumKey(key){
	if(inputBox.value == "0" || $("op").textContent != ""){
		newKey(key);
		$("op").textContent = ""
//		numClearFlag = 0
	} else{
		appendKey(key)
	}
}

// dot handler
function appendDot(){
	var val = inputBox.value;
	if ($("op").textContent != "") {
		newKey("0.");
		$("op").textContent = ""
	}
	
	val.match(/[\.]/)? val :appendKey(".");
}

// sin handler
function sinHandler(){
	var val = inputBox.value
	inputBox.value = expression[0] = Math.sin(val)
//	$("op").textContent = expression[2] = "sin"
	console.log("after sin: " + expression)
}

// cos handler 
function cosHandler(){
	var val = inputBox.value
	inputBox.value = expression[0] = Math.cos(val)
//	$("op").textContent = expression[2] = "cos"
	
	console.log("after cos: " + expression) 
}

function mathHandler(op){
	var val = inputBox.value
	switch (op){
		case "π":
			expression[0] = Math.PI
			break;
		case "Rand":
			expression[0] = Math.random()
			break;
		case "floor":
			expression[0] = Math.floor(val)
			break;
		case "round":
			expression[0] = Math.round(val)
			break;
		default:
			break;
	}
	inputBox.value = expression[0]
}

// tan handler
function tanHandler(){
	var val = inputBox.value
	inputBox.value = expression[0] = Math.tan(val)
//	$("op").textContent = expression[2] = "tan"
	console.log("after tan: " + expression) 
}

// tan handler
function tanHandler(){
	var val = inputBox.value
	inputBox.value = expression[0] = Math.tan(val)
//	$("op").textContent = expression[2] = "tan"
	console.log("after tan: " + expression) 
}

// calculator the expression
function calc(expArr){
	console.log("calc before: " + expArr)
	
	var a = Number(expArr[0]);
	var b = Number(expArr[1])
	var rst;
	switch (expArr[2]){
		case '+':
			rst = a + b;
			break;
		case '-':
			rst = a - b;
			break;
		case '*':
			rst = a * b;
			break;
		case '/':
			rst = a / b;
			break;
		case '%':
			rst = a % b;
			break;
		case 'pow':
			rst = Math.pow(a, b);
			break;
		case 'sqrt':
			rst = Math.sqrt(a, b);
			break;
			
		default:
			rst = inputBox.value
			break;
	}

	calcFlag = 0;
	expression[0] = rst
	newKey(rst);
	
	console.log("calc after: " + expArr)
	return rst
}

// + - * / handler
function opHandler(op){
	console.log("op handle before: " + expression)
	
	// oprander already there
	if($("op").textContent != ""){
		expression[2] = op.trim();
		$("op").textContent = op.trim()
		return
	}
	
	// first time 
	if (!expression[0]){
		expression[0] = inputBox.value.trim();
	// after first time
	} else if (calcFlag > 0) {
		expression[1] = inputBox.value.trim();
		calc(expression);
	}
	expression[2] = op.trim();
	$("op").textContent = op.trim()
	calcFlag++
	
	console.log("op handle after: " + expression)
}

// equals handler
function eqHandler(){
	// repeat previous calc
	if (calcFlag == 0 && expression[1]){
		calc(expression);
	// new calc
	} else if(calcFlag > 0){
		expression[1] = inputBox.value
		calc(expression);
	}
//	numClearFlag = 1
}
/*********************** handler function end *****************************/

/*********************** register event *****************************/
function numKeyEvent(){
	var nums = document.querySelectorAll("button.btn-default:not([id])");
	for 	(var i in nums){
		nums[i].onclick = function(){
			appendNumKey(this.textContent);
		}
	}
}

function dotEvent(){
	$("dot").onclick = function(){
		appendDot();
	}
}

function opEvent(){
	var operators = document.querySelectorAll("button.btn-info");
	//console.log(operators)
	for (var i=0; i<operators.length; i++){
		operators[i].onclick = function(){
			opHandler(this.textContent)
		}
	}
}

function mathUnary(){
	var unary = document.querySelectorAll("button.un");
	console.log(unary)
	for (var i=0; i<unary.length; i++){
		unary[i].onclick = function(){
			mathHandler(this.textContent)
		}
	}
}


function sinEvent(){
	var sin = document.getElementById("sin")
	sin.onclick = sinHandler
}
function cosEvent(){
	var sin = document.getElementById("cos")
	sin.onclick = cosHandler
}
function tanEvent(){
	var sin = document.getElementById("tan")
	sin.onclick = tanHandler
}


function eqEvent(){
	var eq = $("eq")
	eq.onclick = eqHandler;
	eq.onfocus = function(){eqFocus = true};
	eq.onblur = function(){eqFocus = false};
}

function resetEvent(){
	$("clear").onclick = resetHandler
}
/*********************** register event end *****************************/
//alert(99.77 + 66)
numKeyEvent()
dotEvent()
opEvent()
eqEvent()
resetEvent()
sinEvent()
cosEvent()
tanEvent()
mathUnary()
