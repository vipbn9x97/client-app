import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './cell.component';
import { CellRoutingModule } from './cell-routing.module';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeComponent } from './employee/employee.component';
import { MultiComponent } from './multi/multi.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CellRoutingModule,
    SharedModule,
    NgbModalModule
  ],
  declarations: [CellComponent, EmployeeComponent, MultiComponent]
})
export class CellModule { }
