<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProgramKerjaResource\Pages;
use App\Filament\Resources\ProgramKerjaResource\RelationManagers;
use App\Models\ProgramKerja;
use App\Models\Satuan;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProgramKerjaResource extends Resource
{
    protected static ?string $model = ProgramKerja::class;

    protected static ?string $navigationIcon = 'heroicon-o-briefcase';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('id_satuan')
                    ->label('Satuan')
                    ->options(Satuan::all()->pluck('nama_satuan', 'id'))
                    ->required(),
                Forms\Components\TextInput::make('nama_proker')
                    ->required()
                    ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id_satuan')
                    ->numeric()
                    ->sortable()->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('satuan')
                    ->label('Satuan')
                    ->getStateUsing(function ($record) {
                        return $record->satuan->satuan . ' - ' . $record->satuan->nama_satuan;
                    })
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('nama_proker')
                    ->searchable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
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
            'index' => Pages\ListProgramKerjas::route('/'),
            'create' => Pages\CreateProgramKerja::route('/create'),
            'edit' => Pages\EditProgramKerja::route('/{record}/edit'),
        ];
    }
}
