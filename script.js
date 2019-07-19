function Hello() {
	window.alert("Hello, World");
}

function sel_op(){
	var e = document.getElementById("thedropdown");
	var value = e.options[e.selectedIndex].value;
	var a = e.options[e.selectedIndex].text;
	window.alert("you chose " + a);
	if(a == 'add'){
		addnum();
		window.alert("lololololl" + "the variable is " + a);
	}else if(a == 'sub'){
		subnum();
	}else if(a == 'mul'){
		multnum();
	}else if(a == 'div'){
		divnum();
	}
	else{
		window.alert("you did it wrong dumbass");
	}
}
function addnum(){
	var x = parseFloat(document.getElementById('numberin1').value);
	var y = parseFloat(document.getElementById('numberin2').value);
	window.alert("the answer for " + x + " + " + y + " is: " + (x+y));
}

function subnum(){
	var x = parseFloat(document.getElementById('numberin1').value);
	var y = parseFloat(document.getElementById('numberin2').value);
	window.alert("the answer for " + x + " - " + y + " is: " + (x-y));
}

function multnum(){
	var x = parseFloat(document.getElementById('numberin1').value);
	var y = parseFloat(document.getElementById('numberin2').value);
	window.alert("the answer for " + x + " * " + y + " is: " + (x*y));
}
function divnum(){
	var x = parseFloat(document.getElementById('numberin1').value);
	var y = parseFloat(document.getElementById('numberin2').value);
	window.alert("the answer for " + x + " / " + y + " is: " + (x/y));
}
function pownum(){
	var x = parseFloat(document.getElementById('numberin1').value);
	var y = parseFloat(document.getElementById('numberin2').value);
	window.alert("the answer for " + x + " - " + y + " is: " + (Math.pow(x, y)));
}
