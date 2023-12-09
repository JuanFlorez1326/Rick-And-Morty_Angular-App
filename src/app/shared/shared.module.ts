import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { OrderingComponent } from './components/ordering/ordering.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    HeaderComponent,
    OrderingComponent,
    FilterComponent,
    PaginationComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    OrderingComponent,
    FilterComponent,
    PaginationComponent
  ]
})
export class SharedModule {}