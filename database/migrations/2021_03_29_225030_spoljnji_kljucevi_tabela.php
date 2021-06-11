<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SpoljnjiKljuceviTabela extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('rezervacija', function (Blueprint $table) {
            $table->unsignedBigInteger('id_maser')->nullable();
            $table->foreign('id_maser')->references('id_maser')->on('maser')->onDelete('cascade');

            $table->unsignedBigInteger('id_musterija')->nullable();
            $table->foreign('id_musterija')->references('id_musterija')->on('musterija')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('rezervacija', function (Blueprint $table) {
            $table->dropForeign('rezervacija_id_maser_foreign');
            $table->dropForeign('rezervacija_id_musterija_foreign');
        });
    }
}
