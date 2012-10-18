document.addEventListener('DOMContentLoaded', function() {

	[].forEach.call( document.querySelectorAll('input'), function(el) {
	   el.addEventListener('change', handleCSSClasses, false);
	});
	handleOutputs(event);

});


function handleCSSClasses(event) {
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

	document.querySelector("#css-output").value = "-webkit-filter: " + filterList + ";";
	document.querySelector("#badge").style.webkitFilter = filterList;
	handleOutputs(event);

}

function handleOutputs() {
	var outputs = document.querySelectorAll('output');

	for (index in outputs){
		if (index == "length"){
			break;
		}
		var output = outputs[index];
		var value = document.querySelector("#" + output.htmlFor.value).value;
		output.value = value;

	}

	
}

function getGreyscaleString(){
	var defaultValue = 0;
	var value = document.querySelector("#greyscale_value").value;
	
	if (value == defaultValue){
		return "";
	}
	if (value == defaultValue){
		return "";
	}
	
	return "grayscale(" + value + "%) ";
}

function getSepiaString(){
	var defaultValue = 0;
	var value = document.querySelector("#sepia_value").value;
	if (value == defaultValue){
		return "";
	}
	
	return "sepia(" + value + "%) ";
}

function getSaturateString(){
	var defaultValue = 100;
	var value = document.querySelector("#saturate_value").value;

	if (value == defaultValue){
		return "";
	}
	
	return "saturate(" + value + "%) ";
}

function getHueRotateString(){
	var defaultValue = 0;
	var value = document.querySelector("#hue_rotate_value").value;

	if (value == defaultValue){
		return "";
	}
	
	return "hue-rotate(" + value + "deg) ";
}

function getBrightnessString(){
	var defaultValue = 0;
	var value = document.querySelector("#brightness_value").value;

	if (value == defaultValue){
		return "";
	}
	
	return "brightness(" + value + "%) ";
}
function getContrastString(){
	var defaultValue = 100;
	var value = document.querySelector("#contrast_value").value;

	if (value == defaultValue){
		return "";
	}
	
	return "contrast(" + value + "%) ";
}

function getInvertString(){
	var defaultValue = 0;
	var value = document.querySelector("#invert_value").value;

	if (value == defaultValue){
		return "";
	}
	
	return "invert(" + value + "%) ";
}


function getBlurString(){
	var defaultValue = 0;
	var value = document.querySelector("#blur_value").value;

	if (value == defaultValue){
		return "";
	}
	
	return "blur(" + value + "px) ";
}

function getDropShadowString(){
	var x = document.querySelector("#ds_x_value").value;
	var y = document.querySelector("#ds_y_value").value;

	if (x+y == 0) {
		return "";
	}


	var spread = document.querySelector("#ds_spread_value").value;
	var color = document.querySelector("#ds_color_value").value;
	return "drop-shadow(" + x + "px " + y + "px " +  spread + "px " +  color + ") ";
}

