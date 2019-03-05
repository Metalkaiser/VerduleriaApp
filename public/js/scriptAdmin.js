$(document).ready(function(){
	//Token CSRF
	$.ajaxSetup({
 	 headers: {
 	   'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	  }
	});
////////////Carga de datos en la tabla de productos-precios////////////
	$('#precios').click(function(){
		var tabla = $("#tabla");
		var tablaDatos = $("#datos");
		var ruta = "http://localhost:8000/verduleria/admin";
		$.get(ruta, function(data){
			data.sort(function(a, b){
  				var aName = a.product;
 				var bName = b.product; 
  				return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));	//Orden alfabético de productos
			});
			tabla.toggle();
			tablaDatos.empty();
    		$(data).each(function(){
    			tablaDatos.append("<tr><td>" + this.product.charAt(0).toUpperCase() + 
    				this.product.slice(1) + "</td><td>" + 
    				this.price + "</td><td><button value=" + this.id + 
    				" class='btn btn-primary' onclick='editar(" + this.id + 
    				")' data-toggle='modal' data-target='#editform'>Editar</button>" +
    				"<button value=" + this.id + 
    				" class='btn btn-danger' onclick='borrar(" + this.id + 
    				")' data-toggle='modal' data-target='#deleteform'>Eliminar</button></tr>");
    		});
		});
	});
////////////Eventos con funciones separadas para mantener orden estructural////////////
	$("#agregar").click(function(){
		agregar();
	});
});
////////////Declaración de funciones////////////
function editar(btn){
	var titulo = $("#modaltituloedit");
	var ruta = "http://localhost:8000/verduleria/" + btn + "";
	var id = $("#id");
	var prec = $("#precioedita");
	id.val(btn);
	$.get(ruta, function(res){
		titulo.text("Editar el precio de " + 
			res.product.charAt(0).toUpperCase() + res.product.slice(1));
		prec.val(res.price);
		$("#actualizar").click(function(e){
			e.preventDefault();
		    e.stopImmediatePropagation();
			var valor = $("#precioedita").val();
			var id = $("#id").val();
			var ruta = "http://localhost:8000/verduleria/" + id + "";
			$.ajax({
				url: ruta,
				type: 'PUT',
				dataType: 'json',
				data: {price:valor,id:id},
				success: function(){
					$("#editform").modal('toggle');
					carga();
				}
			});
		})
	});
}
function borrar(btn){
	var titulo = $("#modaltitulodel");
	var ruta = "http://localhost:8000/verduleria/" + btn + "";
	var id = $("#id");
	id.val(btn);
	$.get(ruta,function(res){
		titulo.text("¿Desea borrar a " + 
			res.product.charAt(0).toUpperCase() + res.product.slice(1) + " del inventario?");
		$("#borrar").click(function(e){
			e.preventDefault();
		    e.stopImmediatePropagation();
			$.ajax({
				url: ruta,
				type: 'DELETE',
				dataType: 'json',
				data: id,
				success: function(){
					$("#deleteform").modal('toggle');
					carga();
				}
			});
		});
	});
}
function agregar(){
	var ruta = "http://localhost:8000/verduleria/create";
	$("#producto").val(null);				//Vacio el campo Producto
	$("#preciocrea").val(null);				//Vacio el campo Precio
	$("#crear").click(function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		var producto = $("#producto").val();
		var valor = $("#preciocrea").val();
		$.ajax({
			url:ruta,
			type: 'GET',
			dataType: 'json',
			data:{product:producto,price:valor},
			success: function(){
				$("#creaform").modal('toggle');
				carga();
			}
		});
	});
}
function carga(){
	var tabla = $("#tabla");
	var tablaDatos = $("#datos");
	var ruta = "http://localhost:8000/verduleria/admin";
	$.get(ruta, function(data){
		data.sort(function(a, b){
			var aName = a.product;
			var bName = b.product; 
			return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
		});
		tablaDatos.empty();
   		$(data).each(function(){
   			tablaDatos.append("<tr><td>" + this.product.charAt(0).toUpperCase() + 
   				this.product.slice(1) + "</td><td>" + 
   				this.price + "</td><td><button value=" + this.id + 
   				" class='btn btn-primary' onclick='editar(" + this.id + 
   				")' data-toggle='modal' data-target='#editform'>Editar</button>" +
   				"<button value=" + this.id + 
   				" class='btn btn-danger' onclick='borrar(" + this.id + 
   				")' data-toggle='modal' data-target='#deleteform'>Eliminar</button></tr>");
   		});
	});
}