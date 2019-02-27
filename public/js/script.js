$(document).ready(function(){
	$.ajaxSetup({
 	 headers: {
 	   'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	  }
	});

	$('#precios').click(function(){
		var tabla = $("#tabla");
		var tablaDatos = $("#datos");
		var ruta = "http://localhost:8000/verduleria/admin";
		$.get(ruta, function(data){
			data.sort(function(a, b){
  				var aName = a.product;
 				var bName = b.product; 
  				return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
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
    				")' data-toggle='modal' data-target='#editPrice'>Eliminar</button></tr>");
    		});
		});
	}
});

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
		$("#actualizar").click(function(){
			var valor = prec.val();
			var id = $("#id");
			var ruta = "http://localhost:8000/verduleria/" + id + "";
			$.ajax({
				url: ruta,
				data: {price:valor, id:id},
				dataType: "json",
				type: "PUT",
				success: function(){
					console.log("Logrado");
				}
			});
		})
	});
}
function borrar(btn){
	console.log(btn);
}