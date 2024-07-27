<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArtikelController extends Controller
{
    public function index()
    {
        $artikels = Artikel::all();
        return Inertia::render('Artikel', ['artikels' => $artikels]);
    }
    public function show($id)
    {
        $artikel = Artikel::findOrFail($id);
        return Inertia::render('ArtikelDetail', ['artikel' => $artikel]);
    }
}
