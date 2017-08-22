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
saveButton.addEventListener('click', function(event){
	var savePoint = document.getElementById("painting");
	var d = new Date();
	var timestamp = d.toJSON();
	event.preventDefault();
	var storagePoint = {key: timestamp, value: savePoint};
	var storage = {}
	storage.append(storagePoint);
	debugger
});

var savePainting = function() {
	var request = new XMLHttpRequest();
	
}



});