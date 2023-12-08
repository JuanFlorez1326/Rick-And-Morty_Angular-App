import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from 'src/app/shared/shared.module';
import { EpisodesEffects } from './effects/episodes.effects';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EffectsModule.forFeature([EpisodesEffects])
  ]
})
export class EpisodesStoreModule {}