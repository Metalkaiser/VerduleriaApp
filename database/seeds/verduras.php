<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class verduras extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('precios')->insert([
        	'product'=>'tomate',
        	'price'=>'0',
        ]);
        DB::table('precios')->insert([
        	'product'=>'cebolla',
        	'price'=>'0',
        ]);
        DB::table('precios')->insert([
        	'product'=>'papa',
        	'price'=>'0',
        ]);
        DB::table('precios')->insert([
        	'product'=>'lechuga',
        	'price'=>'0',
        ]);
        DB::table('precios')->insert([
        	'product'=>'pimenton',
        	'price'=>'0',
        ]);
        DB::table('precios')->insert([
        	'product'=>'apio',
        	'price'=>'0',
        ]);
        DB::table('precios')->insert([
        	'product'=>'yuca',
        	'price'=>'0',
        ]);
        DB::table('precios')->insert([
        	'product'=>'ocumo',
        	'price'=>'0',
        ]);
        DB::table('precios')->insert([
        	'product'=>'ajo',
        	'price'=>'0',
        ]);
    }
}
