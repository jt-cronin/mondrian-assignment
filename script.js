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


var saveButton = document.getElementById("save_button")
saveButton.addEventListener('click', function(){
var savePoint = document.getElementById("painting");
debugger
event.preventDefault();

});



});