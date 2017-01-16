
	let $videoIframe = $( '#videoIframe' );
	let $videoModalBtn = $( '#videoModalBtn' );

	$( document ).on('open.zf.reveal', '#videoModal', function( ev ) {

		const SOURCE = 'https://www.youtube.com/embed/iK1VoQaCM9Y';

		$videoIframe[0].src = SOURCE + "?autoplay=1";
		ev.preventDefault();

	});

	$( document ).on('closed.zf.reveal', '#videoModal', function( ev ) {
		console.log( 'close' );

		$videoIframe[0].src = "";
		ev.preventDefault();

	});