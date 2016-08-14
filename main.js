jQuery(document).ready(function($) {

	var volvoTh = $('#volvoTh');
	var volvoTbody = $('#volvoTbody');

	var saabTh = $('#saabTh');
	var saabTbody = $('#saabTbody');

	var mercedesTh = $('#mercedesTh');
	var mercedesTbody = $('#mercedesTbody');

	volvoTh.on('click', displayVolvoCars);
	saabTh.on('click', displaySaabCars);
	mercedesTh.on('click', displayMercedesCars);
	

function displayVolvoCars(){
		volvoTbody.toggle();
		saabTbody.hide();	
		mercedesTbody.hide();
	}





function displaySaabCars(){
	volvoTbody.hide();
	saabTbody.toggle();	
	mercedesTbody.hide();
}

function displayMercedesCars(){
	volvoTbody.hide();
	saabTbody.hide();	
	mercedesTbody.toggle();
}



});