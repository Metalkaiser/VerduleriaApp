@extends('layouts.admin')

@section('script')
{!!Html::script('js/scriptCajero.js')!!}
@endsection

@section('content')
	<div>
		<h3>Consulta de precios</h3>
		<select class="productoc">
			@foreach ($lista as $value)
				<option value="{{$value['product']}}">{{$value['product']}}</option>
			@endforeach
		</select>
		<button class="btn btn-primary" id="botonconsulta">Consultar</button>
		<h4 id="consultaprecio">Consulte el precio de cualquier producto</h4>		
	</div>
	<br>
	<div class="controlcliente">
		<h3>Control cliente</h3>
		<div>
			<div>
				<label>Cantidad (gramos): </label>
				<input type="text" id="cant">
				<label> X Producto: </label>
				<select class="productoc">
					@foreach ($lista as $value)
						<option value="{{$value['product']}}">{{$value['product']}}</option>
					@endforeach
				</select>
				<button id="addprod" class="btn btn-primary">Agregar</button>
			</div>
			<div>
				<table class="table table-bordered table-light">
					<thead>
						<th>Producto</th>
						<th>Cantidad</th>
						<th>Subtotal</th>
					</thead>
					<tbody id="compra"></tbody>
				</table>
			</div>
		</div>
		<div>
			<strong>Total: <span id="total">0</span></strong>
			<button class="btn btn-primary" id="limpiar" disabled="disabled">Limpiar pantalla</button>
		</div>
	</div>
@endsection