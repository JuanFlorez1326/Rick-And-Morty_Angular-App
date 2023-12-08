import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  exports: [
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class MaterialModule {}