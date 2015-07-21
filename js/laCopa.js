var datos;
var datosImg;


$('#lacopa-btn').on('click', function(){

	$.getJSON("datos/copa.json", function(datosJson){
		datos = datosJson.texto
		datosImg = datosJson.imagen
		
		console.log(datos);
		console.log(datosImg);

		$.mobile.changePage("#lacopa")
	})

})

$("#lacopa").on("pagebeforeshow", function(){

	$("#lacopa img").attr('src', 'img/' + datosImg );
	$("#lacopa p").html( datos );

});


