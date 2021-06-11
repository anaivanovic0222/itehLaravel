<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Musterija extends Model
{
    protected $table = "musterija";
    protected $primaryKey = "id_musterija";
    public $timestamps = false;

    public function rezervacije()
    {
        return $this->hasMany(Rezervacija::class, "id_musterija", "id_musterija");
    }
}
