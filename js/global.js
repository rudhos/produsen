$(document).ready(function() {

	/*-----------------------------------/
	/*	TOP NAVIGATION AND LAYOUT
	/*----------------------------------*/

	$('.btn-burger').on('click', function() {
		if(!$('body').hasClass('sidebar-show')) {
			$('body').addClass('sidebar-show');

		} else {
			$('body').removeClass('sidebar-show');
			$('body').removeClass('layout-default'); // also remove default behaviour if set
		}

	});


});