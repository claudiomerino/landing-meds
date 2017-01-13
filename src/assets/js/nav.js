
	let $headerMenu = $( '#headerMenu' );
	let $headerList = $( '#headerList' );
	let $headerContainer = $( '#headerContainer' );
	let $headerLogo = $( '.header__logo' );
	let $tabFirst = $( '.tabFirst' );
	let $tabSecond = $( '.tabSecond' );
	let $tabThird = $( '.tabThird' );
	let $tabFourth = $( '.tabFourth' );
	let $tabs = $( '#tabs' );
	let $navTabFirst = $( '#navTabFirst' );
	let $navTabSecond = $( '#navTabSecond' );
	let $navTabThird = $( '#navTabThird' );
	let $navTabFourth = $( '#navTabFourth' );

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

	$tabFirst.add( $navTabFirst ).on( 'click', () => {
		$tabs.foundation('selectTab', 'panel1');

		$tabFirst.addClass( 'active-tab' );
		$navTabFirst.addClass( 'active-nav-tab' );


		$tabSecond.removeClass( 'active-tab' );
		$tabThird.removeClass( 'active-tab' );
		$tabFourth.removeClass( 'active-tab' );

		$navTabSecond.removeClass( 'active-nav-tab' );
		$navTabThird.removeClass( 'active-nav-tab' );
		$navTabFourth.removeClass( 'active-nav-tab' );
	})

	$tabSecond.add( $navTabSecond ).on( 'click', () => {
		$tabs.foundation('selectTab', 'panel2');

		$tabSecond.addClass( 'active-tab' );
		$navTabSecond.addClass( 'active-nav-tab' );


		$tabFirst.removeClass( 'active-tab' );
		$tabThird.removeClass( 'active-tab' );
		$tabFourth.removeClass( 'active-tab' );


		$navTabFirst.removeClass( 'active-nav-tab' );
		$navTabThird.removeClass( 'active-nav-tab' );
		$navTabFourth.removeClass( 'active-nav-tab' );
	})

	$tabThird.add( $navTabThird ).on( 'click', () => {
		$tabs.foundation('selectTab', 'panel3');

		$tabThird.addClass( 'active-tab' );
		$navTabThird.addClass( 'active-nav-tab' );

		$tabFirst.removeClass( 'active-tab' );
		$tabSecond.removeClass( 'active-tab' );
		$tabFourth.removeClass( 'active-tab' );

		$navTabFirst.removeClass( 'active-nav-tab' );
		$navTabSecond.removeClass( 'active-nav-tab' );
		$navTabFourth.removeClass( 'active-nav-tab' );
	})

	$tabFourth.add( $navTabFourth ).on( 'click', () => {
		$tabs.foundation('selectTab', 'panel4');

		$tabFourth.addClass( 'active-tab' );
		$navTabFourth.addClass( 'active-nav-tab' );

		$tabFirst.removeClass( 'active-tab' );
		$tabSecond.removeClass( 'active-tab' );
		$tabThird.removeClass( 'active-tab' );

		$navTabFirst.removeClass( 'active-nav-tab' );
		$navTabSecond.removeClass( 'active-nav-tab' );
		$navTabThird.removeClass( 'active-nav-tab' );
	})