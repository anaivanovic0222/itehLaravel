<?php

namespace App\Http\Controllers;

use App\Rezervacija;
use Carbon\Carbon;
use Illuminate\Http\Request;

class RezervacijaController extends Controller
{
    public function prikaziRezervacije()
    {
        $rezervacije = Rezervacija::with('musterija', 'maser')->get();
        return response()->json(['rezervacije' => $rezervacije], 200);
    }

    public function rezervisiTermin(Request $request)
    {

        // https://www.itsolutionstuff.com/post/how-to-compare-two-dates-in-laravel-carbonexample.html
        if (Carbon::create($request->ugovoreno_vreme)->gt(Carbon::now())) {
            $rezervacija = Rezervacija::insertGetId([
                'id_maser' => $request->id_maser,
                'id_musterija' => $request->id_musterija,
                'ugovoreno_vreme' => $request->ugovoreno_vreme,
                'soba' => $request->soba,
                'created_at' => Carbon::now(),
            ]);
            if ($rezervacija)
                return response()->json(['id_rezervacija' => $rezervacija, 'poruka' => 'Uspesno zakazivanje termina.'], 200);
            return response()->json(['poruka' => 'Greska prilikom zakazivanja.'], 200);
        };
        return response()->json(['poruka' => 'Ne mozete zakazati taj datum.'], 200);
    }
    
    public function izbrisiRezervaciju($id)
    {
        Rezervacija::find($id)->delete();
    }
}
