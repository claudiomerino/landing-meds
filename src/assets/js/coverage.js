
	let $activeCoverage = $( '.activeCoverage' );
	let $activeCapital = $( '.activeCapital' );
	let $activeDeductible = $( '.activeDeductible' );

	selectCoverageFn();

	$activeCoverage.on( 'change', () => {
		selectCoverageFn();
	});

	function selectCoverageFn() {
		$.each( $activeCoverage, ( k, v ) => {

			let $valCoverage = $( v ).val();
			let $valCapital = $( $activeCapital ).data('c' + $valCoverage);
			let $valDeductible = $( $activeDeductible ).data('c' + $valCoverage);

			$activeCapital.html( $valCapital );
			$activeDeductible.html( $valDeductible );

		})
	}