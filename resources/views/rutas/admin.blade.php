@extends('layouts.admin')

@section('script')
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
{!!Html::script('js/script.js')!!}
@endsection

@section('content')
@include('layouts.modal.crearModal')
@include('layouts.modal.editarModal')
@include('layouts.modal.deleteModal')
	<div>
		<h3>Opciones de usuario</h3>
		<button id="ver" class="btn btn-primary">Ver cuenta</button>
		<button id="editar" class="btn btn-primary">Editar perfil</button>
	</div>
	<div>
		<h3>Opciones de mercancía</h3>
		<button id="precios" class="btn btn-primary">Editar precios</button>
		<button id="agregar" data-toggle="modal" data-target="#creaform" class="btn btn-primary">Agregar productos</button>
	</div>
	<br>
	@include('utilidades.tablaEdicion')
@endsection