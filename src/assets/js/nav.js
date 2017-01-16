
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

	let $selectSecure = $('select.secure');
	let $selectSecureDate = $('select.secureDate');
	let $selectSecureDateOption = $('select.secureDate option');

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

	$headerContainer.on('sticky.zf.stuckto:top', function() {
		$headerMenu.addClass( 'visible' );
		$headerList.addClass( 'visible' );
		$headerLogo.removeClass( 'text-center' );
	}).on('sticky.zf.unstuckfrom:top', function(){
		$headerLogo.addClass( 'text-center' );
	  $headerMenu.removeClass( 'visible' );
	  $headerList.removeClass( 'visible' );
	})

	const VAL_FIRST_TAB = 0.276;
	const VAL_SECOND_TAB = 0.734;
	const VAL_THIRD_TAB = 0.425;
	const VAL_FOURTH_TAB = 0.149;


	const API = 'http://mindicador.cl/api/uf';

	$.get( API )
		.done( (res) => {
			let ufValuePeso = res.serie[0].valor;

			$tabFirst.add( $navTabFirst ).on( 'click', () => {
				$selectSecure.val( 'secure1' );
				$selectSecureDate.val('14');
				totalPrice( VAL_FIRST_TAB );

				$.each( $selectSecureDateOption, ( k, v ) => {
					if( $(v).data('select') == 'secure1' ) {
						$(v).show();
					}
					else {
						$(v).hide();
					}
				})

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
				$selectSecure.val( 'secure2' );
				$selectSecureDate.val('214');
				totalPrice( VAL_SECOND_TAB );

				$.each( $selectSecureDateOption, ( k, v ) => {
					if( $(v).data('select') == 'secure2' ) {
						$(v).show();
					}
					else {
						$(v).hide();
					}
				})

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
				$selectSecure.val( 'secure3' );
				$selectSecureDate.val('314');
				totalPrice( VAL_THIRD_TAB );

				$.each( $selectSecureDateOption, ( k, v ) => {
					if( $(v).data('select') == 'secure3' ) {
						$(v).show();
					}
					else {
						$(v).hide();
					}
				})

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
				$selectSecure.val( 'secure4' );
				$selectSecureDate.val('414');
				totalPrice( VAL_FOURTH_TAB );

				$.each( $selectSecureDateOption, ( k, v ) => {
					if( $(v).data('select') == 'secure4' ) {
						$(v).show();
					}
					else {
						$(v).hide();
					}
				})

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

			function totalPrice( UF ) {
				if( ufValuePeso ) {
					let totalPeso = UF * ufValuePeso;

					$pricePeso.html( addInteger( totalPeso) );
					$priceUF.html( addDecimal( UF ) );
				}
			}

	})
	.fail( (err) => {
		console.error( err );
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