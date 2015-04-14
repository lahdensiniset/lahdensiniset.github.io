$( document ).ready( function() {

	// The following snippets handle traversin in DOM and between pages

	$("#leiri-link").click(function(e) {
		e.preventDefault()

		if ($("#leiri").length === 0) {

		    window.location.href = "http://vire.lahdensiniset.net/#leiri";
		    
		} else {

			$('html, body').animate({
				scrollTop: $("#leiri").offset().top
			}, 1000);

		}
	});

	$("#uutiset-link").click(function(e) {
		e.preventDefault()

		if ($("#uutiset").length === 0) {

		    window.location.href = "http://vire.lahdensiniset.net/#uutiset";
		    
		} else {

			$('html, body').animate({
				scrollTop: $("#uutiset").offset().top
			}, 1000);

		}
	});

	$("#ota-yhteytta-link").click(function(e) {
		e.preventDefault()

		if ($("#ota-yhteytta").length === 0) {

		    window.location.href = "http://vire.lahdensiniset.net/#ota-yhteytta";
		    
		} else {

			$('html, body').animate({
				scrollTop: $("#ota-yhteytta").offset().top
			}, 1000);

		}
	});

	$(".summary").click( function() {

		$( this.closest(".details") ).find(".job-contents:first").toggle(500);



	});

});

