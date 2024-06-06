<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgramKerja extends Model
{
    use HasFactory;

    // Nama tabel
    protected $table = 'program_kerja';

    // Kolom yang dapat diisi
    protected $fillable = [
        'id',
        'id_satuan',
        'nama_proker',
    ];

    // Relasi dengan model Satuan
    public function satuan()
    {
        return $this->belongsTo(Satuan::class, 'id_satuan');
    }
}
