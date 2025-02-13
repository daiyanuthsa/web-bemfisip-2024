<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AnggotaResource\Pages;
use App\Filament\Resources\AnggotaResource\RelationManagers;
use App\Models\Anggota;
use App\Models\Satuan;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AnggotaResource extends Resource
{
    protected static ?string $model = Anggota::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-group';

    public static function form(Form $form): Form
    {

        return $form
            ->schema([
                Forms\Components\TextInput::make('nama_anggota')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Select::make('status')
                    ->required()
                    ->options([
                        'BPI' => 'BPI',
                        'BPH' => 'BPH',
                        'STAF' => 'STAF',
                    ])->reactive()
                    ->afterStateUpdated(fn($state, callable $set) => $state === 'STAF' ? $set('nama_jabatan', 'Staf Ahli') : $set('nama_jabatan', ''))
                ,
                Forms\Components\TextInput::make('nama_jabatan')
                    ->required()
                    ->maxLength(255)
                    ->reactive(), // Make this field reactive as well
                // ->default(fn(callable $get) => $get('status') === 'STAF' ? 'Staf Ahli' : null), // Set default based on status,
                Forms\Components\TextInput::make('instagram')
                    ->maxLength(255),
                Forms\Components\Select::make('satuan_id')
                    ->label('Satuan')
                    ->options(Satuan::all()->pluck('nama_satuan', 'id'))
                    ->default(Anggota::latest('updated_at')->first()->satuan_id),
                Forms\Components\FileUpload::make('image_link')
                    ->label('Sisi Pertama')
                    ->required()
                    ->image()
                    ->acceptedFileTypes(['image/png', 'image/jpeg', 'image/jpg', 'image/webp'])
                    ->disk('public')
                    ->directory(function (callable $get) {
                        $satuanId = $get('satuan_id');
                        return $satuanId ? "Anggota/{$satuanId}" : 'Anggota/';
                    })
                    ->visibility('public')
                    ->columnSpanFull()
                    ->imagePreviewHeight('250')
                    ->loadingIndicatorPosition('left')
                    ->panelLayout('compact')
                    ->removeUploadedFileButtonPosition('right') // Tombol hapus file
                    ->preserveFilenames(),
                Forms\Components\FileUpload::make('image_link2')
                    ->label('Sisi Kedua')
                    ->image()
                    ->acceptedFileTypes(['image/png', 'image/jpeg', 'image/jpg', 'image/webp'])
                    ->disk('public')
                    ->directory(function (callable $get) {
                        $satuanId = $get('satuan_id');
                        return $satuanId ? "Anggota/{$satuanId}/secondSide" : 'Anggota/';
                    })
                    ->visibility('public')
                    ->columnSpanFull()
                    ->imagePreviewHeight('250')
                    ->loadingIndicatorPosition('left')
                    ->panelLayout('compact')
                    ->removeUploadedFileButtonPosition('right') // Tombol hapus file
                    ->preserveFilenames(),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table

            ->columns([
                Tables\Columns\TextColumn::make('nama_anggota')
                    ->searchable()->sortable(),
                Tables\Columns\TextColumn::make('status')->sortable(),
                Tables\Columns\TextColumn::make('nama_jabatan')
                    ->searchable(),
                Tables\Columns\TextColumn::make('satuan.satuan') // Mengakses kolom satuan dari relasi satuan
                    ->label('Satuan')
                    ->sortable()
                    ->searchable()->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('satuan.nama_satuan') // Mengakses kolom nama_satuan dari relasi satuan
                    ->label('Satuan')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('instagram')
                    ->searchable()->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAnggotas::route('/'),
            'create' => Pages\CreateAnggota::route('/create'),
            'edit' => Pages\EditAnggota::route('/{record}/edit'),
        ];
    }
}
