<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Anggota extends Model
{
    use HasFactory;

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($anggota) {
            // Hapus file dari storage jika ada
            if ($anggota->image_link2) {
                Storage::disk('public')->delete($anggota->image_link2);
            }
        });

        static::updated(function ($anggota) {
            // Hapus file lama jika diupdate
            if ($anggota->isDirty('image_link2')) {
                $oldFile = $anggota->getOriginal('image_link2');
                if ($oldFile) {
                    Storage::disk('public')->delete($oldFile);
                }
            }
        });
    }

    protected $table = 'anggota';

    // Specify the fillable attributes for mass assignment
    protected $fillable = [
        'nama_anggota',
        'status',
        'nama_jabatan',
        'instagram',
        'image_link',
        'image_link2',
        'satuan_id',
    ];

    // Define the relationship with the Satuan model
    public function satuan()
    {
        return $this->belongsTo(Satuan::class);
    }
}
