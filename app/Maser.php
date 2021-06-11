<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Maser extends Model
{
    protected $table = "maser";
    protected $primaryKey = "id_maser";
    public $timestamps = false;


    public function rezervacije()
    {
        return $this->hasMany(Rezervacija::class, "id_maser", "id_maser");
    }
}
