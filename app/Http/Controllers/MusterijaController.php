<?php

namespace App\Http\Controllers;

use App\Musterija;
use Illuminate\Http\Request;

class MusterijaController extends Controller
{
    public function getMusterije()
    {
        $musterije = Musterija::all();
        return response()->json(['musterije' => $musterije], 200);
    }

    public function kreirajMusteriju(Request $request)
    {
        $musterija = Musterija::where('telefon', $request->telefon)->where('email',$request->email)->first();
        if($musterija)
            return response()->json(['poruka'=>'Dobrodosli nazad!','id_musterija'=>$musterija->id_musterija], 200);
        $musterija = Musterija::insertGetId([
            'ime' => $request->ime,
            'prezime' => $request->prezime,
            'telefon' => $request->telefon,
            'email' => $request->email,
        ]);
        if ($musterija)
            return response()->json(['id_musterija' => $musterija, 'poruka' => 'Uspesno ste se ulogovali.'], 200);
        return response()->json(['poruka' => 'Greska prilikom logina.'], 200);
    }
    public function izmenaMusterije($id_musterija, Request $request)
    {

        if (Musterija::where('id_musterija', $id_musterija)->update([
            'ime' => $request->ime,
            'prezime' => $request->prezime,
            'telefon' => $request->telefon,
            'email' => $request->email,
        ]));
        return response()->json(['poruka' => 'Uspesno ste izmenili Vas profil.'], 200);

        return response()->json(['poruka' => 'Greska prilikom izmene.'], 200);
    }
}
