<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function show()
    {
        $artikels = Artikel::latest()->take(4)->get();
        return Inertia::render('Home', ['artikels' => $artikels]);
    }
}
