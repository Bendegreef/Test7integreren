/* jshint
browser: true,
devel: true,
jquery: true
*/
/*
global CanvasCamera
*/
$(document).ready(function () {
	alert("deviceready");
	console.log("jo");
	document.getElementById("add_photo").addEventListener("click", takePicture, false);
});

function takePicture(e) {
	alert("testgelukt");
	navigator.camera.getPicture(onSuccess, onFail, {
		quality: 50,
		destinationType: navigator.camera.DestinationType.DATA_URL,
		allowEdit: true,
		correctOrientation: true
	});

}

function onSuccess(imageData) {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var imageObj = document.getElementById("myImage");
	var width;
	imageObj.src = "data:image/jpeg;base64," + imageData;

	width = imageObj.width;

	canvas.setAttribute('width', width);
	canvas.setAttribute('height', width);
	context.drawImage(imageObj, 0, 0, width, width, 0, 0, width, width);
	var dataURL = canvas.toDataURL();
	document.getElementById("defImg").setAttribute('crossOrigin', 'anonymous');
	document.getElementById("defImg").src = dataURL;
}

function onFail(message) {
	setTimeout(function () {
	}, 0);

}