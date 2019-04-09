{{ Form::hidden('id', null, array_merge(['id' => 'id'])) }}
<div id="del1">
{!!Form::label('Precio: ')!!}
{{ Form::number('price', null, array_merge(['class' => 'form-control', 'id' => 'precio'])) }}
    <div class="modal-footer">
        {{ Form::button('Actualizar', ['type' => 'submit', 'class' => 'btn btn-primary', 'id' => 'boton'] )  }}
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
    </div>
</div>
<div class="modal-footer" id="del2" style="display: none;">
    {{ Form::button('Eliminar', ['type' => 'submit', 'class' => 'btn btn-danger', 'id' => 'borrar'] )  }}
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
</div>