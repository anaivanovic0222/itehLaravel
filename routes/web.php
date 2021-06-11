<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'PageController@pocetna');
Route::get('/maseri', 'PageController@maseri');
Route::get('/rezervisi', 'PageController@rezervisi');
Route::get('/admin', 'PageController@admin');


// Route::post('/maseri/dodaj', 'MaserController@dodajMasera');
Route::get('/maseri/get', 'MaserController@getMaseri');

Route::get('/musterije/get', 'MusterijaController@getMusterije');
Route::put('/musterije/izmeni/{id}', 'MusterijaController@izmenaMusterije');
Route::post('/musterije/dodaj', 'MusterijaController@kreirajMusteriju');

Route::get('/rezervacije/get', 'RezervacijaController@prikaziRezervacije');
Route::delete('/rezervacije/delete/{id}', 'RezervacijaController@izbrisiRezervaciju');
Route::post('/rezervacija/dodaj', 'RezervacijaController@rezervisiTermin');
