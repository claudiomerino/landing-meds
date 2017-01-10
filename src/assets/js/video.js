
	let $videoIframe = $( '#videoIframe' );

	$( document ).on('open.zf.reveal', '[data-reveal]', function( ev ) {

		const SOURCE = 'https://www.youtube.com/embed/iK1VoQaCM9Y';

		$videoIframe[0].src = SOURCE + "?autoplay=1";
		ev.preventDefault();

	});

	$( document ).on('closed.zf.reveal', '[data-reveal]', function( ev ) {

		$videoIframe[0].src = "";
		ev.preventDefault();

	});