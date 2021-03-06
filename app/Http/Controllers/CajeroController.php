<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ConsultRequest;
use App\precio;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class CajeroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $q = $request['product'];
        if ($q !== "") {
            $a = precio::all();
            return response()->json(
                $a->toArray()
            );
        }
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function cajero(Request $request){
        $lista = precio::all();
        if($request->ajax()){
            $consulta = $request['product'];
            $respuesta = precio::where('product', '=', $consulta)->get();
            return response()->json(
                $respuesta->toArray()
            );
        }
        return view('rutas.cajero',compact('lista'));
    }
}
