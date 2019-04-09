$(document).ready(function(){
////////////Token CSRF////////////
	$.ajaxSetup({
 	 headers: {
 	   'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	  }
	});
////////////Enfoca el campo Cantidad al cargar la página////////////
	$("#cant").focus();
////////////Consulta de precios////////////
	$("#botonconsulta").click(function(){
		consultar();
	});
	$(".productoc").eq(0).keydown(function(event){
		if(event.which == 13){
    		consultar();
    	}
	});
////////////Control de ventas////////////
////////////Agregar producto////////////
	$("#addprod").click(function(){
		cajero();
	});
	$(".productoc").eq(1).keydown(function(event){
		if(event.which == 13){
    		cajero();
    	}
	});
////////////Pasa al siguiente campo////////////
	$("#cant").keydown(function(event){
		var chequeo = $("#cant").val();
		if(event.which == 13 && chequeo != ""){
			$(".productoc").eq(1).focus();
    	}
	});
////////////Limpia toda la tabla////////////
	$("#limpiar").click(function(){
		var compr = $("#compra");
		compr.html("");
		sumatoria = 0;
		var total = $("#total");
		total.html(sumatoria);
////////////Deshabilita el botón para limpiar la pantalla////////////
		$("#limpiar").prop("disabled", true);
	});

	/*$(".productoc").eq(1).keyup(function(){
		pista();
	});*/
});



////////////Funciones utilizadas////////////
var sumatoria = 0;
////////////Consulta de precios////////////
function consultar(){
	var escrito = $(".productoc").eq(0).val();
	escrito = escrito.toLowerCase();
	var precio = $("#consultaprecio");
	var ruta = "/verduleria/cajero";
	$.ajax({
		url: ruta,
		type: 'GET',
		dataType: 'json',
		data: {product:escrito},
		success: function(res){
			if (res.length > 0) {	//Comprueba si el producto existe
				precio.text(res[0].product.charAt(0).toUpperCase() + 
   				res[0].product.slice(1) + ": " + res[0].price);
////////////Resetear los campos de ingreso de datos////////////
				$(".productoc").val(null);
			}else{
				precio.text(escrito + " no existe en el inventario");	//Muestra un mensaje cuando el producto no existe
			}
		},
		error: function(xhr){
			console.log(xhr);
		}
	});
}

function pista(){
	var escrito = $(".productoc").eq(1).val();
	var longitud = escrito.length;
	var ruta = "/cajero/create";
	$.ajax({
		url: ruta,
		type: 'GET',
		dataType: 'json',
		data: {product:escrito},
		success: function(res){
			$(res).each(function(){
				var parte = this.substring(0, longitud);
				console.log(parte);
			})
		},
		error: function(xhr){
		}
	});
}

////////////Agregar producto////////////
function cajero(){
	var escrito = $(".productoc").eq(1).val();
	escrito = escrito.toLowerCase();
	var compr = $("#compra");
	var ruta = "/verduleria/cajero";
	var total = $("#total");
	var cantidad = $("#cant").val();
	$.ajax({
		url: ruta,
		type: 'GET',
		dataType: 'json',
		data: {product:escrito},
		success: function(res){
			if(res.length !=0){
				var prec = res[0].price;
				var subtotal = prec * cantidad/1000;
				if (isNaN(cantidad/1000)) {
					console.log("Error en la cuenta");
				}else {
					sumatoria = sumatoria + subtotal;
					total.html(sumatoria);
					compr.append("<tr><td>" + res[0].product.charAt(0).toUpperCase() + 
	    			res[0].product.slice(1) +
	    			"</td><td>" + cantidad/1000 + "</td><td>" +
					subtotal + "</td></tr>");
					////////////Resetear los campos de ingreso de datos////////////
					$(".productoc").val(null);
					$("#cant").val(null);
					////////////Vuelve al campo de cantidad////////////
					$("#cant").focus();
					////////////Habilita el botón para limpiar la pantalla////////////
					$("#limpiar").removeAttr("disabled");
				}
			}else{
				console.log("producto inexistente");
			}
		},
		error: function(xhr){
		}
	});
}