import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './cell.component';
import { CellRoutingModule } from './cell-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CellRoutingModule
  ],
  declarations: [CellComponent]
})
export class CellModule { }
