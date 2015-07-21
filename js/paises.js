var datosLista;
var indiceNumero;
var infoSeleccionada;

$('#equipos-btn').on('click', function(){

	$.getJSON("datos/datos.json", function(datosDelJson){
		datosLista = datosDelJson.paises

		$.mobile.changePage("#lista")
	})

})

$("#lista").on("pagebeforeshow", function(){
	var resultado = "";

	$.each( datosLista , function( indice, valor){
		resultado += '<li data-valor="' + indice + '"><img src="img/' + valor.imagen + '"><p>' + valor.nombre + '</p></li>';
	});

	//Despliega lista
	$("#listaPaises").html(resultado);
	$("#listaPaises").listview("refresh");


	// Recoge attributo de data-valor de cada LI de la lista
	$('li').on('click', function(){
		//Edita variables globales segun el click
		indiceNumero = $(this).attr("data-valor");
		infoSeleccionada = datosLista[indiceNumero];
		$.mobile.changePage("#pais");
	})


	// Recoge informacion de variables globales
	$("#pais").on("pagebeforeshow", function(){
		$("#pais h1").html( infoSeleccionada.nombre );
		$("#pais img").attr( 'src', 'img/' + infoSeleccionada.imagen );
		$("#pais p").html( infoSeleccionada.acercaDe );
	});

});


