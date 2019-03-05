<?php

namespace App\Http\Controllers;

use App\precio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PrecioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        precio::create([
            'product' => $request['product'],
            'price' => $request['price']
        ]);
        return response()->json("Creado");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\precio  $precio
     * @return \Illuminate\Http\Response
     */
    public function show($precio)
    {
        $edit = precio::find($precio);
        return response()->json(
            $edit->toArray()
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\precio  $precio
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\precio  $precio
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, precio $precio)
    {
        if ($request->ajax()) {
            $id = $request["id"];
            $price = $request["price"];
            $producto = precio::find($id);
            $producto->price = $price;
            $producto->save();
            return response()->json($producto);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\precio  $precio
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $producto = precio::find($id);
        $producto->delete();
        return response()->json('Borrado');
    }

    public function administrador(Request $request){
        if ($request->ajax()) {
            $pr = precio::all();
            return response()->json(
                $pr->toArray()
            );
        }
        if (Auth::check()){
            return view('rutas.admin');
        }
        else{
            return view('auth.login');
        }
    }
}
