<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Satuan extends Model
{
    use HasFactory;

    // Specify the table name if it does not follow Laravel's naming convention
    protected $table = 'satuan';

    // Specify the primary key if it is not 'id'
    protected $primaryKey = 'id';

    // Specify if the primary key is not an incrementing integer
    public $incrementing = false;

    // Specify the data type of the primary key
    protected $keyType = 'int';

    // Specify the fillable attributes for mass assignment
    protected $fillable = [
        'slug',
        'satuan',
        'nama_satuan',
        'updated_at',
        'created_at',
    ];

    // Optionally, specify the attributes that should be cast to native types
    protected $casts = [
        'satuan' => 'string',
    ];
    
    // Define the relationship with the Anggota model
    public function anggotas()
    {
        return $this->hasMany(Anggota::class);
    }
}
