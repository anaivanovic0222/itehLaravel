<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMasersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('masers', function (Blueprint $table) {
            $table->bigIncrements('id_maser');
            $table->string('ime');
            $table->string('nivo_strucne_spreme');
            $table->string('godine_iskustva');
            $table->string('opis_masera')->default("");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('masers');
    }
}
