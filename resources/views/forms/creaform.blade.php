<div>
	{!!Form::label('Producto: ')!!}
	{!!Form::text('product', null, array_merge(['class' => 'form-control', 'id' => 'producto']))!!}
	{!!Form::label('Precio: ')!!}
	{{ Form::number('price', null, array_merge(['class' => 'form-control', 'id' => 'preciocrea'])) }}
    <div class="modal-footer">
        {{ Form::button('Agregar', ['type' => 'submit', 'class' => 'btn btn-primary', 'id' => 'crear'] )  }}
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
    </div>
</div>