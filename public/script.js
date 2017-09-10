rewindow.addEventListener('load', function(){

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
//Converts each specific row into CSV form
var convertRow = function(row){
	var rowString = ""
	for (var i = 0; i<4; i++){
		var check = row[i].style.backgroundColor
		switch (check){
			case 'red':
				rowString += "r";
				break;
			case "blue":
				rowString += "b";
				break;
			case "white":
				rowString += "w";
				break;
			case "yellow":
				rowString += "y";
				break;
			default:
				rowString += "w";
				break;
		}
	}
	
	return rowString;
}

//breaks the painting down into rows
var convertSave = function(){
	var a = document.getElementById("row_1");
	var b = document.getElementById("row_2");
	var c = document.getElementById("row_3");
	var d = document.getElementById("row_4");
	var sendString = convertRow(a.children) + "," + convertRow(b.children) + "," + convertRow(c.children) + "," + convertRow(d.children);
	return sendString;
}


//saves the painting and gets it ready to send to the CSV
var saveButton = document.getElementById("save_button")
saveButton.addEventListener('click', function(event){
	event.preventDefault();
	var sendSavePoint = convertSave();
	savePainting(sendSavePoint);
});







var sendOff = function(event){
	var request = event.target;
	alert("Your file has been saved");
}
var savePainting = function(sendSavePoint) {
	var request = new XMLHttpRequest();

	request.open("POST", "/toServer?paintString=" + sendSavePoint);
	request.send();
	request.addEventListener('load', sendOff)
}
});