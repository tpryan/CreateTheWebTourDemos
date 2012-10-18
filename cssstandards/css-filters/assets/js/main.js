document.addEventListener('DOMContentLoaded', function() {

[].forEach.call( document.querySelectorAll('input'), function(el) {
   el.addEventListener('change', handleCSSClasses, false);
});


});


function handleCSSClasses(event) {
	console.log("Class:",event.target.name, "Value:",  event.target.value);
	var filterList = "";

	filterList += getGreyscaleString();
	filterList += getSepiaString();
	filterList += getSaturateString();
	filterList += getHueRotateString();
	filterList += getBrightnessString();
	filterList += getContrastString();
	filterList += getInvertString();
	filterList += getBlurString();
	filterList += getDropShadowString();

	console.log("Filterlist:", filterList);
	document.querySelector("#badge").style.webkitFilter = filterList;

}

function getGreyscaleString(){
	var value = document.querySelector("#greyscale_value").value;
	return "grayscale(" + value + "%) ";
}

function getSepiaString(){
	var value = document.querySelector("#sepia_value").value;
	return "sepia(" + value + "%) ";
}

function getSaturateString(){
	var value = document.querySelector("#saturate_value").value;
	return "saturate(" + value + "%) ";
}

function getHueRotateString(){
	var value = document.querySelector("#hue_rotate_value").value;
	return "hue-rotate(" + value + "deg) ";
}

function getBrightnessString(){
	var value = document.querySelector("#brightness_value").value;
	return "brightness(" + value + "%) ";
}
function getContrastString(){
	var value = document.querySelector("#contrast_value").value;
	return "contrast(" + value + "%) ";
}

function getInvertString(){
	var value = document.querySelector("#invert_value").value;
	return "invert(" + value + "%) ";
}


function getBlurString(){
	var value = document.querySelector("#blur_value").value;
	return "blur(" + value + "px) ";
}

function getDropShadowString(){
	var x = document.querySelector("#ds_x_value").value;
	var y = document.querySelector("#ds_y_value").value;
	var spread = document.querySelector("#ds_spread_value").value;
	var color = document.querySelector("#ds_color_value").value;
	return "drop-shadow(" + x + "px " + y + "px " +  spread + "px " +  color + ") ";
}

