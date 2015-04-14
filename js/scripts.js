$( document ).ready( function() {

	// The following snippets handle traversin in DOM and between pages

	$("#etusivu-link").click(function(e) {
		e.preventDefault()

		if ($("#etusivu").length === 0) {

		    window.location.href = "http://vire.lahdensiniset.net/";

		} else {

			$('html, body').animate({
				scrollTop: $("#etusivu").offset().top
			}, 2000);

		}
	});

	$("#leiri-link").click(function(e) {
		e.preventDefault()

		if ($("#leiri").length === 0) {

		    window.location.href = "http://vire.lahdensiniset.net/#leiri";
		    
		} else {

			$('html, body').animate({
				scrollTop: $("#leiri").offset().top
			}, 2000);

		}
	});

	$("#uutiset-link").click(function(e) {
		e.preventDefault()

		if ($("#uutiset").length === 0) {

		    window.location.href = "http://vire.lahdensiniset.net/#uutiset";
		    
		} else {

			$('html, body').animate({
				scrollTop: $("#uutiset").offset().top
			}, 2000);

		}
	});

	$("#ota-yhteytta-link").click(function(e) {
		e.preventDefault()

		if ($("#ota-yhteytta").length === 0) {

		    window.location.href = "http://vire.lahdensiniset.net/#ota-yhteytta";
		    
		} else {

			$('html, body').animate({
				scrollTop: $("#ota-yhteytta").offset().top
			}, 2000);

		}
	});

});

