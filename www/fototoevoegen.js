/* jshint
browser: true,
devel: true,
*/
/*
global CanvasCamera
*/
var pictureSource;
var destinationType;

// Wait for Cordova to connect with the device
//


document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready to be used!
//
function onDeviceReady() {
	console.log(window.device);
	console.log(window.plugins);
	alert('device ready');
	document.getElementsByTagName("add_photo").addEventListener("click", takePicture, false);
}

function takePicture(e) {
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