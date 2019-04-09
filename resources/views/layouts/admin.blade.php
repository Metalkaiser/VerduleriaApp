<!DOCTYPE html>
<html>
<head>
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>Control de ventas</title>
	{!!Html::script('js/jquery.min.js')!!}
	{!!Html::script('css\bootstrap-4.0.0\dist\js\bootstrap.min.js')!!}
	{!!Html::script('css\bootstrap-4.0.0\assets\js\vendor\popper.min.js')!!}
	{!!Html::style('css\bootstrap-4.0.0\dist\css\bootstrap.min.css')!!}
	@yield('script')
	<script type="text/javascript">
		$(".close").click(function(){
			$(".alert").hide();
		});
	</script>
</head>
<body>
		@if (session()->has('success'))
    		<div class="alert alert-success alert-dismissible fade show" role="alert">
    			{{ session('success') }}
    			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    				<span aria-hidden="true">&times;</span>
  				</button>
    		</div>
		@endif
		@if (session()->has('alert'))
    		<div class="alert alert-danger alert-dismissible fade show" role="alert">
    			{{ session('alert') }}
    			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    				<span aria-hidden="true">&times;</span>
  				</button>
    		</div>
		@endif
	@include('layouts.navbar')
	@yield('content')
</body>
</html>