import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { OrderingComponent } from './components/ordering/ordering.component';

@NgModule({
  declarations: [
    HeaderComponent,
    OrderingComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    OrderingComponent
  ]
})
export class SharedModule {}