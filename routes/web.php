<?php

use App\Http\Controllers\ArtikelController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/tentang', function () {
    return Inertia::render('Tentang');
});
Route::get('/artikel',[ArtikelController::class,'index']);
Route::get('/artikel/{id}', [ArtikelController::class,'show']);
