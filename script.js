function Hello() {
	window.alert("Hello, World");
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
