{{ Form::hidden('id', null, array_merge(['id' => 'id'])) }}
<div>
{!!Form::label('Precio: ')!!}
{{ Form::text('price', null, array_merge(['class' => 'form-control', 'id' => 'precio'])) }}
    <div class="modal-footer">
        {{ Form::button('Actualizar', ['type' => 'submit', 'class' => 'btn btn-primary', 'id' => 'actualizar'] )  }}
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
    </div>
</div>