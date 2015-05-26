/* jshint
browser: true,
devel: true,
jquery: true
*/
/*
global CanvasCamera
*/
var pictureSource; // picture source
var destinationType; // sets the format of returned value 

// Wait for Cordova to connect with the device
//


document.addEventListener("deviceready", onDeviceReady, false);
onDeviceReady();
// Cordova is ready to be used!
//
function onDeviceReady() {
	console.log(window.device);
	console.log(window.plugins);
	alert('device ready script.js');
	/*var objCanvas = document.getElementById("canvas");
	window.plugin.CanvasCamera.initialize(objCanvas);
	alert('canvas ready');*/
	document.getElementById("takePicture").addEventListener("click", takePicture, false);
	//document.getElementById("takePicturePreview").addEventListener("click", onTakePicture, false);

}

function takePicture(e) {
	console.log("go");
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
	//imageObj.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
	setTimeout(function () {
		//alert('Failed because: ' + message);
	}, 0);

}