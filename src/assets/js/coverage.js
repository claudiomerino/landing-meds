
	// Tab 2

	let $activeCoverageLesiones = $( '.activeCoverageLesiones' );
	let $activeCapitalLesiones = $( '.activeCapitalLesiones' );
	let $activeDeductibleLesiones = $( '.activeDeductibleLesiones' );

	selectCoverageLesionesFn();

	$activeCoverageLesiones.on( 'change', () => {
		selectCoverageLesionesFn();
	});

	function selectCoverageLesionesFn() {
		$.each( $activeCoverageLesiones, ( k, v ) => {

			let $valCoverageLesiones = $( v ).val();
			let $valCapitalLesiones = $( $activeCapitalLesiones ).data('c' + $valCoverageLesiones);
			let $valDeductibleLesiones = $( $activeDeductibleLesiones ).data('c' + $valCoverageLesiones);

			$activeCapitalLesiones.html( $valCapitalLesiones );
			$activeDeductibleLesiones.html( $valDeductibleLesiones );

		})
	}

	// Tab 3

	let $activeCoverageComp = $( '.activeCoverageComp' );
	let $activeCapitalComp = $( '.activeCapitalComp' );
	let $activeDeductibleComp = $( '.activeDeductibleComp' );

	selectCoverageCompFn();

	$activeCoverageComp.on( 'change', () => {
		selectCoverageCompFn();
	});

	function selectCoverageCompFn() {
		$.each( $activeCoverageComp, ( k, v ) => {

			let $valCoverageComp = $( v ).val();
			let $valCapitalComp = $( $activeCapitalComp ).data('c' + $valCoverageComp);
			let $valDeductibleComp = $( $activeDeductibleComp ).data('c' + $valCoverageComp);

			$activeCapitalComp.html( $valCapitalComp );
			$activeDeductibleComp.html( $valDeductibleComp );

		})
	}

	// Tab 4

	let $activeCoverageLast = $( '.activeCoverageLast' );
	let $activeCapitalLast = $( '.activeCapitalLast' );
	let $activeDeductibleLast = $( '.activeDeductibleLast' );

	selectCoverageLastFn();

	$activeCoverageLast.on( 'change', () => {
		selectCoverageLastFn();
	});

	function selectCoverageLastFn() {
		$.each( $activeCoverageLast, ( k, v ) => {

			let $valCoverageLast = $( v ).val();
			let $valCapital = $( $activeCapitalLast ).data('c' + $valCoverageLast);
			let $valDeductible = $( $activeDeductibleLast ).data('c' + $valCoverageLast);

			$activeCapitalLast.html( $valCapital );
			$activeDeductibleLast.html( $valDeductible );

		})
	}