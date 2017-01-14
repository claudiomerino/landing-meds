
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

	let hash = window.location.hash;

	console.log( hash );


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



	let $panel1 = $( '#panel1' );
	let $panel2 = $( '#panel2' );
	let $panel3 = $( '#panel3' );
	let $panel4 = $( '#panel4' );



	if( hash == '#panel1' ) {


		$tabFirst.addClass( 'active-tab is-active' );
		$navTabFirst.addClass( 'active-nav-tab' );

		$panel1.addClass( 'is-active' );
		$panel2.removeClass( 'is-active' );
		$panel3.removeClass( 'is-active' );
		$panel4.removeClass( 'is-active' );


		$tabSecond.removeClass( 'active-tab is-active' );
		$tabThird.removeClass( 'active-tab is-active' );
		$tabFourth.removeClass( 'active-tab is-active' );

		$navTabSecond.removeClass( 'active-nav-tab' );
		$navTabThird.removeClass( 'active-nav-tab' );
		$navTabFourth.removeClass( 'active-nav-tab' );
	}
	else if( hash == '#panel2' ) {


		$panel1.removeClass( 'is-active' );
		$panel2.addClass( 'is-active' );
		$panel3.removeClass( 'is-active' );
		$panel4.removeClass( 'is-active' );


		$tabSecond.addClass( 'active-tab is-active' );
		$navTabSecond.addClass( 'active-nav-tab' );


		$tabFirst.removeClass( 'active-tab is-active' );
		$tabThird.removeClass( 'active-tab is-active' );
		$tabFourth.removeClass( 'active-tab is-active' );


		$navTabFirst.removeClass( 'active-nav-tab' );
		$navTabThird.removeClass( 'active-nav-tab' );
		$navTabFourth.removeClass( 'active-nav-tab' );
	}
	else if( hash == '#panel3' ) {


		$panel1.removeClass( 'is-active' );
		$panel2.removeClass( 'is-active' );
		$panel3.addClass( 'is-active' );
		$panel4.removeClass( 'is-active' );

		$tabThird.addClass( 'active-tab is-active' );
		$navTabThird.addClass( 'active-nav-tab' );

		$tabFirst.removeClass( 'active-tab is-active' );
		$tabSecond.removeClass( 'active-tab is-active' );
		$tabFourth.removeClass( 'active-tab is-active' );

		$navTabFirst.removeClass( 'active-nav-tab' );
		$navTabSecond.removeClass( 'active-nav-tab' );
		$navTabFourth.removeClass( 'active-nav-tab' );
	}
	else if( hash == '#panel4' ) {


		$panel1.removeClass( 'is-active' );
		$panel2.removeClass( 'is-active' );
		$panel3.removeClass( 'is-active' );
		$panel4.addClass( 'is-active' );

		$tabFourth.addClass( 'active-tab is-active' );
		$navTabFourth.addClass( 'active-nav-tab' );

		$tabFirst.removeClass( 'active-tab is-active' );
		$tabSecond.removeClass( 'active-tab is-active' );
		$tabThird.removeClass( 'active-tab is-active' );

		$navTabFirst.removeClass( 'active-nav-tab' );
		$navTabSecond.removeClass( 'active-nav-tab' );
		$navTabThird.removeClass( 'active-nav-tab' );
	}