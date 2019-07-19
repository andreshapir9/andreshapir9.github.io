function Hello() {
	window.alert("Hello, World");
}

function sel_op(){
	var a = document.getElementById("thedropdown");
	alert(a.options[a.selectedIndex].value);
	if(a = "+"){
		addnum();
		window.alert("lololololl");
	}else if(a == "-"){
		subnum();
	}else if(a == "*"){
		multnum();
	}else if(a == "/"){
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
