<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('anggota', function (Blueprint $table) {
            $table->id();
            $table->string('nama_anggota');
            $table->enum('status', ['BPH', 'BPI', 'STAF']);
            $table->string('nama_jabatan');
            $table->string('instagram');
            $table->string('image_link')->nullable();
            $table->unsignedBigInteger('satuan_id')->nullable();
            $table->foreign('satuan_id')->references('id')->on('satuan')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('anggota');
    }
};
