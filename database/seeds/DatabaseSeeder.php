<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(MaserTableSeeder::class);
        $this->call(MusterijaTableSeeder::class);
        $this->call(RezervacijaTableSeeder::class);
    }
}
