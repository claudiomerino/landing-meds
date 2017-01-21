
	let $selectSecure = $('select.secure');
	let $selectSecureDate = $('select.secureDate');
	let $selectSecureDateOption = $('select.secureDate option');
	let $selectSecureDateCoverage = $('select.secureDateCoverage');
	let $selectSecureDateCoverageOption = $('select.secureDateCoverage option');
	let $selectSecureCan = $('select.secureCan');
	let $selectSecureCanOption = $('select.secureCan option');
	let $capital = $( '#capital' );
	let $deductible = $( '#deductible' );
	let $deductibleSick = $( '#deductibleSick' );
	let UF;
	let $pricePeso = $('.pricePeso');
	let $priceUF = $('.priceUF');
	let $priceSave = $('.priceSave');
	let $changeCoverage = $('.changeCoverage');
	let $changeCoverageMore = $('.changeCoverageMore');

	const API = 'http://mindicador.cl/api/uf';

	$.get( API )
		.done( (res) => {
			// let ufValuePeso = res.serie[0].valor;
			let ufValuePeso = 26340.34;

			if( $selectSecure.val() == 'secure1' ) {
				$selectSecureDate.val('14');
				secureMayorFn();
			}

			$selectSecureCan.add( $selectSecureDate ).add( $selectSecureDateCoverage ).on( 'change', () => {
				selectFn();
			})

			$selectSecure.on( 'change', () => {
				if( $selectSecure.val() == 'secure1' ) {
					$selectSecureDate.val('14');
				}
				else if ( $selectSecure.val() == 'secure2' ) {
					$selectSecureDate.val('214');
				}
				else if ( $selectSecure.val() == 'secure3' ) {
					$selectSecureDate.val('314');
				}
				else if ( $selectSecure.val() == 'secure4' ) {
					$selectSecureDate.val('414');
				}

				selectFn();
			});

			function selectFn() {
				secureMayorFn();
			}

			function secureMayorFn() {

				$.each( $selectSecureDate, ( k, v ) => {

					let $valueSecureDate = $( v ).val();
					let $valueDataUf;

					if( $selectSecure.val() == 'secure1' ) {
						$valueDataUf = $( $selectSecureCan ).find(':selected').data('uf' + $valueSecureDate);
						console.log($valueDataUf);
						$.each( $selectSecureDateOption, ( k, v ) => {
							if( $(v).data('select') == 'secure1' ) {
								$(v).show();
							}
							else {
								$(v).hide();
							}
						})
					}

					else if ( $selectSecure.val() == 'secure2' ) {
						$valueDataUf = $( $selectSecureCan ).find(':selected').data('uf' + $valueSecureDate);
						console.log($valueDataUf);

						$.each( $selectSecureDateOption, ( k, v ) => {
							if( $(v).data('select') == 'secure2' ) {
								$(v).show();
							}
							else {
								$(v).hide();
							}
						})
					}

					else if ( $selectSecure.val() == 'secure3' ) {
						$valueDataUf = $( $selectSecureCan ).find(':selected').data('uf' + $valueSecureDate);
						console.log($valueDataUf);

						$.each( $selectSecureDateOption, ( k, v ) => {
							if( $(v).data('select') == 'secure3' ) {
								$(v).show();
							}
							else {
								$(v).hide();
							}
						})
					}

					else if ( $selectSecure.val() == 'secure4' ) {
						$valueDataUf = $( $selectSecureCan ).find(':selected').data('uf' + $valueSecureDate);
						console.log($valueDataUf);
						$.each( $selectSecureDateOption, ( k, v ) => {
							if( $(v).data('select') == 'secure4' ) {
								$(v).show();
							}
							else {
								$(v).hide();
							}
						})
					}

					totalPrice( $valueDataUf );

				})

				$.each( $selectSecureDateCoverage, ( k, v ) => {

					let $valueSecureCvDate = $( v ).val();
					let $valueDataCvUf = $( $capital ).data('cvuf' + $valueSecureCvDate);
					let $valueDataDcUf = $( $deductible ).data('cvuf' + $valueSecureCvDate);
					let $valueDataDcSickUf = $( $deductibleSick ).data('cvuf' + $valueSecureCvDate);

					totalPriceCv( $valueDataCvUf );
					totalPriceDc( $valueDataDcUf );
					totalPriceDcSick( $valueDataDcSickUf );

				})

				let $priceMorePeso = $( $pricePeso ).html();
				let unFormat = numeral().set($priceMorePeso).value();

				$priceSave.html( parseFloat(unFormat * 3).toFixed(3) );

			}

			function totalPrice( UF ) {
				if( ufValuePeso ) {
					let totalPeso = UF * ufValuePeso;

					$pricePeso.html( addInteger( totalPeso) );
					$priceUF.html( addDecimal( UF ) );
				}
			}

			function totalPriceCv( CvUf ) {
				let totalPeso = CvUf;

				$capital.html( addInteger( totalPeso ) );

				if( totalPeso % 1 != 0 ) {
					$capital.html( parseFloat( totalPeso ).toFixed(2) );
				}

			}

			function totalPriceDc( CvUf ) {
				let totalPeso = CvUf;
				$deductible.html( addInteger( totalPeso ) );

				if( totalPeso % 1 != 0 ) {
					$deductible.html( totalPeso );
				}

			}

			function totalPriceDcSick( Message ) {
				$deductibleSick.html( Message );
			}


		})
		.fail( (err) => {
			console.error( err );
		})