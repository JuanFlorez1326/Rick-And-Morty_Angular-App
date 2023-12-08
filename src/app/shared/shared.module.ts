import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    MaterialModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ]
})
export class SharedModule {}