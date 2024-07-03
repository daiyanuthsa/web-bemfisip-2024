<?php

namespace App\Http\Controllers;

use App\Models\Satuan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SatuanController extends Controller
{
    //
    public function show($kabinet)
    {
        $satuan = Satuan::whereRaw('LOWER(slug) = ?', [strtolower($kabinet)])->first();

        if ($satuan) {
            $proker = $satuan->programKerja; // Ambil semua program kerja yang berelasi dengan satuan
            $bph = $satuan->anggotas()->where('status', 'BPH')->orderBy('created_at', 'DESC')->get(); // Ambil anggota dengan status BPH
            $staf = $satuan->anggotas()->where('status', 'STAF')->get(); // Ambil anggota dengan status STAF

            // Atur $bph menjadi null jika tidak ada anggota dengan status BPH
            if ($bph->isNotEmpty()) {
                if ($bph->count() == 3) {
                    $bph = $bph->slice(0, 3); // Ensure we are only working with the first 3 items
                    $bph = collect([$bph[0], $bph[2], $bph[1]])->merge($bph->slice(3));
                }
            } else {
                $bph = null;
            }
        } else {
            $proker = collect(); // Jika tidak ada satuan yang ditemukan, buat koleksi kosong
            $bph = collect();
            $staf = collect();
        }

        return Inertia::render('Kabinet', [
            'satuan' => $satuan,
            'proker' => $proker,
            'bph' => $bph,
            'staf' => $staf,
        ]);
    }
}
