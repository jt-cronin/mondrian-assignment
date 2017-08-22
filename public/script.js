window.addEventListener('load', function(){

var paint = "white";
var color = document.getElementsByClassName('color');
var row = document.getElementsByClassName('row');


for (var i = 0; i<color.length; i++) {
	color[i].addEventListener('click', function(){
		paint = event.target.style.backgroundColor;
	});
}

for (var i = 0; i<row.length; i++){
	row[i].addEventListener('click', function(){
				
		event.target.style.backgroundColor = paint;
	});
}

var convertRow = function(row){
	var rowString;
	for (var i = 0; i<3; i++){
		switch (row[i].style.backgroundColor){
			case "red":
				var r = "r";
				rowString.concat(r);
				break;
			case "blue":
				var b = "b";
				rowString.concat(b);
				break;
			case "white":
				var w = "w";
				rowString.concat(w);
				break;
			case "yellow":
				var y = "y";
				rowString.concat(y);
				break;
			default:
				var other = "w";
				rowString.concat(other);
				break;
		}
	}
	debugger
}


var convertSave = function(){
var a = document.getElementById("row_1");
var b = document.getElementById("row_2");
var c = document.getElementById("row_3");
var d = document.getElementById("row_4");
debugger
var sendString = convertRow(a.children) + convertRow(b.children) + convertRow(c.children) + convertRow(d.children);
}

var saveButton = document.getElementById("save_button")
saveButton.addEventListener('click', function(event){
	var savePoint = document.getElementById("painting");
	event.preventDefault();
	convertSave(savePoint);
});







/*var sendOff = function(event){
	var request = event.target;
	debugger
	alert(request.respone);

}


var savePainting = function() {
	var request = new XMLHttpRequest();
	saveString = send
	request.open"(POST", "/toServer?dog=" + a +  "&row2=yyyr");
	request.send();

	request.addEventListener('load', sendOff)
}
*/


});