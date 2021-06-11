<?php

use App\Rezervacija;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class RezervacijaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 30; $i++) {
            Rezervacija::insert([
                'id_musterija' => rand(1, 40),
                'id_maser' => rand(1, 10),
                'soba' => rand(1,13),
                'ugovoreno_vreme' => Carbon::today()->addDays(rand(16,320))->addHours(rand(8,20)),
                'created_at' => Carbon::now(),
            ]);
        }
    }
}
