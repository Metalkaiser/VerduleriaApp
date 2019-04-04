$(document).ready(function(){
////////////Token CSRF////////////
	$.ajaxSetup({
 	 headers: {
 	   'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	  }
	});
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
});
////////////Funciones utilizadas////////////
var sumatoria = 0;
////////////Consulta de precios////////////
function consultar(){
	var escrito = $(".productoc").eq(0).val();
	var precio = $("#consultaprecio");
	var ruta = "/verduleria/cajero";
	$.ajax({
		url: ruta,
		type: 'GET',
		dataType: 'json',
		data: {product:escrito},
		success: function(res){
			precio.text(res[0].product.charAt(0).toUpperCase() + 
   			res[0].product.slice(1) + ": " + res[0].price);
////////////Resetear los campos de ingreso de datos////////////
			$(".productoc").val(null);
		},
		error: function(xhr){
		}
	});
}
////////////Agregar producto////////////
function cajero(){
	var escrito = $(".productoc").eq(1).val();
	var compr = $("#compra");
	var ruta = "/verduleria/cajero";
	var cantidad = $("#cant").val();
	var total = $("#total");
	$.ajax({
		url: ruta,
		type: 'GET',
		dataType: 'json',
		data: {product:escrito},
		success: function(res){
			var prec = res[0].price;
			var subtotal = prec * cantidad/1000;
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
		},
		error: function(xhr){
		}
	});
}