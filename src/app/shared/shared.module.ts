import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    CommonModule
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}