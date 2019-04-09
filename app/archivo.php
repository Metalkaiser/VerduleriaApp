<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class archivo extends Model
{
    protected $fillable = [
    	'name','path','user','comment',
    ];
}
