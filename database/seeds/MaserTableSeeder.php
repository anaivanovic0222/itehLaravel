<?php

use App\Maser;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class MaserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 10; $i++) { 
            Maser::insert([
            'ime' => Str::random(rand(4,7)),
            'nivo_strucne_spreme' => rand(5,8),
            'godine_iskustva' => rand(3,15),
            'opis_masera' => Str::random(rand(4,7)) ." ". Str::random(rand(4,7)) . " ". Str::random(rand(4,7)),
            ]);
        }
    }
}
