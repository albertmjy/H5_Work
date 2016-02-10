
// for shorthand
function $(id){
	return document.getElementById(id);
}

var calcFlag = 0  // if calc required before +-*/
var expression = []; // for expression
var inputBox = $("input-box"); 


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


// calculator the expression
function calc(expArr){
	//console.log("calc before: " + expArr)
	
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
		default:
			break;
	}

	calcFlag = 0;
	expression[0] = rst
	newKey(rst);
	
	//console.log("calc after: " + expArr)
	return rst
}

// + - * / handler
function opHandler(op){
	//console.log("op handle before: " + expression)
	
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
	
	//console.log("op handle after: " + expression)
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

function eqEvent(){
	$("eq").onclick = eqHandler;
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
