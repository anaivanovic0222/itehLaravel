<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rezervacija extends Model
{
    protected $table = "rezervacija";
    protected $primaryKey = "id_rezervacija";
    public $timestamps = true;

    public function musterija()
    {
        return $this->belongsTo(Musterija::class, "id_musterija", "id_musterija");
    }
    public function maser()
    {
        return $this->belongsTo(Maser::class, "id_maser", "id_maser");
    }
}
