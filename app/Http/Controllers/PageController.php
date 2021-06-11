<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function pocetna()
    {
        return view('pocetna');
    }
    public function admin(Request $request)
    {   
        if ($request->query('sifra') == "admin321")
            return view('admin');
        return redirect()->back();
    }

    public function maseri()
    {
        return view('maseri');
    }
    public function rezervisi()
    {
        return view('rezervisi');
    }
}
