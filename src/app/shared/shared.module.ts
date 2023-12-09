import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { OrderingComponent } from './components/ordering/ordering.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    OrderingComponent,
    FilterComponent,
    PaginationComponent,
    SearchComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    OrderingComponent,
    FilterComponent,
    PaginationComponent,
    SearchComponent
  ]
})
export class SharedModule {}