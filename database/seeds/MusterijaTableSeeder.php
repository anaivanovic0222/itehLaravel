<?php

use App\Musterija;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
class MusterijaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 40; $i++) {
            Musterija::insert([
                'ime' => Str::random(rand(4, 7)),
                'prezime' => Str::random(rand(4, 7)),
                'telefon' => rand(0, 9) . "" . rand(0, 9) . "" . rand(0, 9) . " " . rand(0, 9) . "" . rand(0, 9) . "" . rand(0, 9) . "" . rand(0, 9) . "" . rand(0, 9),
                'email' => Str::random(rand(5, 7)) . "_" . Str::random(rand(4, 7)),
            ]);
        }
    }
}
