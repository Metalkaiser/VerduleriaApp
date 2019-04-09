<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('verduleria/admin', 'PrecioController@administrador');
Route::get('verduleria/cajero', 'CajeroController@cajero');
Route::get('/verduleria', 'PrecioController@index');
Route::resource('administrador', 'PrecioController');
Route::resource('cajero', 'CajeroController');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
