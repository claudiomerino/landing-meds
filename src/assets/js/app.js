
	const API = 'http://mindicador.cl/api/uf';
	let $tipUfValue = $( '.tip-uf-value' );
	let $ufValue = $( '.ufValue' );

	$.get( API )
		.done( (res) => {

			moment.locale('es');

			let date = moment(res.serie[0].fecha).format('LL');

			$tipUfValue.attr( 'title', 'Valor referencial en pesos calculados en base al valor de la UF ' + addDecimal(res.serie[0].valor) + ' del ' + date );
			$ufValue.html( addDecimal(res.serie[0].valor) + ' del ' + date );

			$(document).foundation();

		})
		.fail( (err) => {
			console.error( err );
		})

	$(document).foundation();