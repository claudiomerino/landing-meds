
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

	let $changeURL = $( '.changeURL' );
	let $changeCoverageUrl = $( '#changeCoverageUrl' );
	let $changeInsurabilityUrl = $( '#changeInsurabilityUrl' );

	let ufValuePeso = 26340.34;

	let $panel1 = $( '#panel1' );
	let $panel2 = $( '#panel2' );
	let $panel3 = $( '#panel3' );
	let $panel4 = $( '#panel4' );

	// Tabs
	const VAL_FIRST_TAB = 0.276;
	const VAL_SECOND_TAB = 0.734;
	const VAL_THIRD_TAB = 0.425;
	const VAL_FOURTH_TAB = 0.149;

	let changeURLFirst = 'https://segurosmeds.metlife.cl/VentaWeb/Formulario/MedsCatastrofico';
	let changeCoverageUrlFirst = '#coverage';
	let changeInsurabilityUrlFirst = '#insurability';

	let changeURLSecond = 'https://segurosmeds.metlife.cl/VentaWeb/Formulario/MedsCatastroficoComp';
	let changeCoverageUrlSecond = '#coverage2';
	let changeInsurabilityUrlSecond = '#insurability2';

	let changeURLThird = 'https://segurosmeds.metlife.cl/VentaWeb/Formulario/MedsCatastroficoLA';
	let changeCoverageUrlThird = '#coverage3';
	let changeInsurabilityUrlThird = '#insurability3';

	let changeURLFourth = 'https://segurosmeds.metlife.cl/VentaWeb/Formulario/MedsLA';
	let changeCoverageUrlFourth = '#coverage4';
	let changeInsurabilityUrlFourth = '#insurability4';


	$.each( $selectSecureDateOption, ( k, v ) => {

		if( $(v).data('select') == 'secure1' ) {
			$(v).show();
			tabsFn( changeURLFirst, changeCoverageUrlFirst, changeInsurabilityUrlFirst );
		}

	})

	$selectSecure.on( 'change', () => {
		let $selectSecureVal = $($selectSecure).val();

		if( $($selectSecure).val() == 'secure1' ) {
			tabsFn( changeURLFirst, changeCoverageUrlFirst, changeInsurabilityUrlFirst );
		}

		else if( $($selectSecure).val() == 'secure2' ) {
			tabsFn( changeURLSecond, changeCoverageUrlSecond, changeInsurabilityUrlSecond );
		}

		else if( $($selectSecure).val() == 'secure3' ) {
			tabsFn( changeURLThird, changeCoverageUrlThird, changeInsurabilityUrlThird );
		}

		else if( $($selectSecure).val() == 'secure4' ) {
			tabsFn( changeURLFourth, changeCoverageUrlFourth, changeInsurabilityUrlFourth );
		}

	});

	$tabFirst.add( $navTabFirst ).on( 'click', () => {
		$selectSecure.val( 'secure1' );
		$selectSecureDate.val( '14' );
		totalPrice( VAL_FIRST_TAB );

		$.each( $selectSecureDateOption, ( k, v ) => {
			if( $(v).data('select') == 'secure1' ) {
				$(v).show();
				tabsFn( changeURLFirst, changeCoverageUrlFirst, changeInsurabilityUrlFirst );
				tabsFirstFn();
			}
			else {
				$(v).hide();
			}
		})

		tabsFn( changeURLFirst, changeCoverageUrlFirst, changeInsurabilityUrlFirst );
		tabsFirstFn();

	})

	$tabSecond.add( $navTabSecond ).on( 'click', () => {
		$selectSecure.val( 'secure2' );
		$selectSecureDate.val('214');
		totalPrice( VAL_SECOND_TAB );

		$.each( $selectSecureDateOption, ( k, v ) => {
			if( $(v).data('select') == 'secure2' ) {
				$(v).show();
				tabsFn( changeURLSecond, changeCoverageUrlSecond, changeInsurabilityUrlSecond );
				tabsSecondFn();
			}
			else {
				$(v).hide();
			}
		})

		tabsFn( changeURLSecond, changeCoverageUrlSecond, changeInsurabilityUrlSecond );
		tabsSecondFn();

	})

	$tabThird.add( $navTabThird ).on( 'click', () => {
		$selectSecure.val( 'secure3' );
		$selectSecureDate.val('314');
		totalPrice( VAL_THIRD_TAB );

		$.each( $selectSecureDateOption, ( k, v ) => {
			if( $(v).data('select') == 'secure3' ) {
				$(v).show();
				tabsFn( changeURLThird, changeCoverageUrlThird, changeInsurabilityUrlThird );
				tabsThirdFn();
			}
			else {
				$(v).hide();
			}
		})

		tabsFn( changeURLThird, changeCoverageUrlThird, changeInsurabilityUrlThird );
		tabsThirdFn();

	})

	$tabFourth.add( $navTabFourth ).on( 'click', () => {
		$selectSecure.val( 'secure4' );
		$selectSecureDate.val('414');
		totalPrice( VAL_FOURTH_TAB );

		$.each( $selectSecureDateOption, ( k, v ) => {
			if( $(v).data('select') == 'secure4' ) {
				$(v).show();

			tabsFn( changeURLFourth, changeCoverageUrlFourth, changeInsurabilityUrlFourth );
			tabsFourthFn();
			}
			else {
				$(v).hide();
			}
		})

		tabsFn( changeURLFourth, changeCoverageUrlFourth, changeInsurabilityUrlFourth );
		tabsFourthFn();

	})


	if( hash == '#panel1' ) {
		tabsFn( changeURLFirst, changeCoverageUrlFirst, changeInsurabilityUrlFirst );
		tabsFirstFn();
	}
	else if( hash == '#panel2' ) {
		tabsFn( changeURLSecond, changeCoverageUrlSecond, changeInsurabilityUrlSecond );
		tabsSecondFn();
	}
	else if( hash == '#panel3' ) {
		tabsFn( changeURLThird, changeCoverageUrlThird, changeInsurabilityUrlThird );
		tabsThirdFn();
	}
	else if( hash == '#panel4' ) {
		tabsFn( changeURLFourth, changeCoverageUrlFourth, changeInsurabilityUrlFourth );
		tabsFourthFn();
	}


	function totalPrice( UF ) {
		if( ufValuePeso ) {
			let totalPeso = UF * ufValuePeso;

			$pricePeso.html( addInteger( totalPeso) );
			$priceUF.html( addDecimal( UF ) );
		}
	}

	function tabsFn( changeURL, changeCoverageUrlFirst, changeInsurabilityUrlFirst ) {
		$changeURL.attr( 'href', changeURL );
		$changeCoverageUrl.attr( 'href', changeCoverageUrlFirst );
		$changeInsurabilityUrl.attr( 'href', changeInsurabilityUrlFirst );
	}



	function tabsFirstFn() {
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

	function tabsSecondFn() {

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

	function tabsThirdFn() {
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

	function tabsFourthFn() {
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