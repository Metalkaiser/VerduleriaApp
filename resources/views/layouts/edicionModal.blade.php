<!--div class="modal fade" id="editPrice" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div id="formulario" style="display: none">
          {!!Form::label('Producto: ')!!}
          {!!Form::text('product', null, array_merge(['class' => 'form-control', 'id' => 'producto']))!!}
        </div>
            @include('forms.form')
      </div>
    </div>
  </div>
</div>