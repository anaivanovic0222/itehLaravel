<?php

namespace App\Http\Controllers;

use App\Maser;
use Illuminate\Http\Request;

class MaserController extends Controller
{
    public function getMaseri()
    {
        $maseri = Maser::all();
        return response()->json(['maseri' => $maseri], 200);
    }

    public function getJedanMaser($id_maser)
    {
        $maser = Maser::find($id_maser);
        return response()->json(['maser' => $maser], 200);
    }

    public function dodajMasera(Request $request)
    {
        $maser = Maser::insertGetId([
            'ime' => $request->ime,
            'nivo_strucne_spreme' => $request->nivo_strucne_spreme,
            'godine_iskustva' => $request->godine_iskustva,
            'opis_masera' => $request->opis_masera,
        ]);
        if ($maser)
            return response()->json(['id_maser' => $maser, 'poruka' => 'Uspesno dodat novi maser.'], 200);
        return response()->json(['poruka' => 'Doslo je do greske prilikom dodavanja masera.'], 200);
    }
}
