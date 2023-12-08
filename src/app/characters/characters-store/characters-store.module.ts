import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharactersEffects } from './effects/characters.effects';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EffectsModule.forFeature([CharactersEffects])
  ]
})
export class CharactersStoreModule {}