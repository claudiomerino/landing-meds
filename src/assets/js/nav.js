
	let $headerMenu = $( '#headerMenu' );
	let $headerList = $( '#headerList' );
	let $headerContainer = $( '#headerContainer' );
	let $headerLogo = $( '.header__logo' );

	// Header

	$headerMenu.on( 'click', () => {
		$headerMenu.toggleClass( 'visible' );
		$headerList.toggleClass( 'visible' );
		if( $headerMenu.hasClass( 'visible' ) ) {
			$headerLogo.removeClass( 'text-center' );
		}
		else {
			$headerLogo.addClass( 'text-center' );
		}
	});

	navVisible();

	let hash = window.location.hash;
	$( window ).resize( function() {
		navVisible();
	});

	function navVisible() {
		if (window.matchMedia( "(min-width: 1135px)" ).matches) {

		  $headerContainer.on('sticky.zf.stuckto:top', function() {
		  	$headerMenu.addClass( 'visible' );
		  	$headerList.addClass( 'visible' );
		  	$headerLogo.removeClass( 'text-center' );
		  }).on('sticky.zf.unstuckfrom:top', function(){
		  	$headerLogo.addClass( 'text-center' );
		    $headerMenu.removeClass( 'visible' );
		    $headerList.removeClass( 'visible' );
		  })

		} else {

		  $headerContainer.on('sticky.zf.stuckto:top', function() {
		  	$headerMenu.removeClass( 'visible' );
		  	$headerList.removeClass( 'visible' );
		  	$headerLogo.removeClass( 'text-center' );
		  }).on('sticky.zf.unstuckfrom:top', function(){
		  	$headerLogo.removeClass( 'text-center' );
		    $headerMenu.removeClass( 'visible' );
		    $headerList.removeClass( 'visible' );
		  })
		}
	}