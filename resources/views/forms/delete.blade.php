{{ Form::hidden('id', null, array_merge(['id' => 'id'])) }}
<div>
    <div class="modal-footer">
        {{ Form::button('Eliminar', ['type' => 'submit', 'class' => 'btn btn-primary', 'id' => 'borrar'] )  }}
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
    </div>
</div>