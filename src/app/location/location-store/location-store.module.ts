import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { LocationsEffects } from './effects/locations.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([LocationsEffects])
  ]
})
export class LocationStoreModule {}