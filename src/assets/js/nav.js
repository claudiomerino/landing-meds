
	let $headerMenu = $( '#headerMenu' );
	let $headerList = $( '#headerList' );
	let $headerContainer = $( '#headerContainer' );
	let $headerLogo = $( '.header__logo' );
	let $tabFirst = $( '.tabFirst' );
	let $tabSecond = $( '.tabSecond' );
	let $tabThird = $( '.tabThird' );
	let $tabFourth = $( '.tabFourth' );
	let $tabs = $( '#tabs' );

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


	$headerContainer.on('sticky.zf.stuckto:top', function() {
		$headerMenu.addClass( 'visible' );
		$headerList.addClass( 'visible' );
		$headerLogo.removeClass( 'text-center' );
	}).on('sticky.zf.unstuckfrom:top', function(){
		$headerLogo.addClass( 'text-center' );
	  $headerMenu.removeClass( 'visible' );
	  $headerList.removeClass( 'visible' );
	})

	$tabFirst.on( 'click', () => {
		$tabs.foundation('selectTab', 'panel1');
		$tabFirst.addClass( 'active-tab' );
		$tabSecond.removeClass( 'active-tab' );
		$tabThird.removeClass( 'active-tab' );
		$tabFourth.removeClass( 'active-tab' );
	})

	$tabSecond.on( 'click', () => {
		$tabs.foundation('selectTab', 'panel2');
		$tabSecond.addClass( 'active-tab' );
		$tabFirst.removeClass( 'active-tab' );
		$tabThird.removeClass( 'active-tab' );
		$tabFourth.removeClass( 'active-tab' );
	})

	$tabThird.on( 'click', () => {
		$tabs.foundation('selectTab', 'panel3');
		$tabThird.addClass( 'active-tab' );
		$tabFirst.removeClass( 'active-tab' );
		$tabSecond.removeClass( 'active-tab' );
		$tabFourth.removeClass( 'active-tab' );
	})

	$tabFourth.on( 'click', () => {
		$tabs.foundation('selectTab', 'panel4');
		$tabFourth.addClass( 'active-tab' );
		$tabFirst.removeClass( 'active-tab' );
		$tabSecond.removeClass( 'active-tab' );
		$tabThird.removeClass( 'active-tab' );
	})