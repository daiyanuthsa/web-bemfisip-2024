<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\SatuanController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/tentang', function () {
    return Inertia::render('Tentang');
});
Route::get('/organigram', function () {
    return Inertia::render('Organigram');
});
Route::get('/Kementerian/{satuan}', [SatuanController::class, 'show']);
Route::get('/biro/{satuan}', [SatuanController::class, 'show']);
Route::get('/mitra', function () {
    return Inertia::render('Mitra');
});
Route::get('/artikel', [ArtikelController::class, 'index']);
Route::get('/artikel/{id}', [ArtikelController::class, 'show']);
