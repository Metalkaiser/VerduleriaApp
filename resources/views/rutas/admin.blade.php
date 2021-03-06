﻿@extends('layouts.admin')

@section('script')
{!!Html::script('js/scriptAdmin.js')!!}
@endsection
@section('content')
@include('layouts.modal.crearModal')
@include('layouts.modal.editarModal')
@include('layouts.modal.deleteModal')
	<div>
		<h3>Opciones de mercancía</h3>
		<button id="precios" class="btn btn-primary">Editar precios</button>
		<button id="agregar" data-toggle="modal" data-target="#creaform" class="btn btn-primary">Agregar productos</button>
	</div>
	<br>
	@include('utilidades.tablaEdicion')
@endsection