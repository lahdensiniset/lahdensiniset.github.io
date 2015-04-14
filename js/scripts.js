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

	$("#ohjelma-link").click(function(e) {
		e.preventDefault()

		if ($("#ohjelma").length === 0) {

		    window.location.href = "http://vire.lahdensiniset.net/pestit/#ohjelma";
		    
		} else {

			$('html, body').animate({
				scrollTop: $("#ohjelma").offset().top
			}, 1000);

		}
	});

	$("#ikakausi-link").click(function(e) {
		e.preventDefault()

		if ($("#ikakausi").length === 0) {

		    window.location.href = "http://vire.lahdensiniset.net/pestit/#ikakausi";
		    
		} else {

			$('html, body').animate({
				scrollTop: $("#ikakausi").offset().top
			}, 1000);

		}
	});

	$("#ruoka-link").click(function(e) {
		e.preventDefault()

		if ($("#ruoka").length === 0) {

		    window.location.href = "http://vire.lahdensiniset.net/pestit/#ruoka";
		    
		} else {

			$('html, body').animate({
				scrollTop: $("#ruoka").offset().top
			}, 1000);

		}
	});

	$("#huolto-link").click(function(e) {
		e.preventDefault()

		if ($("#huolto").length === 0) {

		    window.location.href = "http://vire.lahdensiniset.net/pestit/#huolto";
		    
		} else {

			$('html, body').animate({
				scrollTop: $("#huolto").offset().top
			}, 1000);

		}
	});

	$("#vene-link").click(function(e) {
		e.preventDefault()

		if ($("#vene").length === 0) {

		    window.location.href = "http://vire.lahdensiniset.net/pestit/#vene";
		    
		} else {

			$('html, body').animate({
				scrollTop: $("#vene").offset().top
			}, 1000);

		}
	});

	$("#juhlavuosi-link").click(function(e) {
		e.preventDefault()

		if ($("#juhlavuosi").length === 0) {

		    window.location.href = "http://vire.lahdensiniset.net/pestit/#juhlavuosi";
		    
		} else {

			$('html, body').animate({
				scrollTop: $("#juhlavuosi").offset().top
			}, 1000);

		}
	});




	$(".summary").click( function() {

		$( this.closest(".details") ).find(".job-contents:first").toggle(500);


	});

});

