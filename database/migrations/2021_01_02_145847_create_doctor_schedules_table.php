<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDoctorSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctor_schedules', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('doctor_id');
            $table->string('available_day')->comment('Saturday, Sunday, Monday, Tuesday, Wednesday, Thirsday, Friday');
            $table->time('start_time');
            $table->time('end_time');
            $table->integer('total_serial');
            $table->boolean('status')->default(true);
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('doctor_id')->references('id')->on('doctors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('doctor_schedules');
    }
}
