<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RenameTabela extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::rename('rezervacijas', 'rezervacija');
        Schema::rename('masers', 'maser');
        Schema::rename('musterijas', 'musterija');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        
        Schema::rename('rezervacija', 'rezervacijas');
        Schema::rename('maser', 'masers');
        Schema::rename('musterija', 'musterijas');
    }
}
