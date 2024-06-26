<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anggota extends Model
{
    use HasFactory;

    protected $table = 'anggota';

    // Specify the fillable attributes for mass assignment
    protected $fillable = [
        'nama_anggota',
        'status',
        'nama_jabatan',
        'image_link',
        'satuan_id',
    ];

    // Define the relationship with the Satuan model
    public function satuan()
    {
        return $this->belongsTo(Satuan::class);
    }
}
