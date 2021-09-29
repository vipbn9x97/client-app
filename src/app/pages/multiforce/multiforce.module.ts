import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiforceComponent } from './multiforce.component';
import { MultiforceRoutingModule } from './multiforce-routing.module';
import { PaginationComponent } from './list/pagination/pagination.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MultiforceService } from './multiforce.service';
import { ListComponent } from './list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AbilityComponent } from './ability/Ability.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MultiforceRoutingModule,
    SharedModule
  ],
  declarations: [
    MultiforceComponent,
    PaginationComponent,
    ListComponent,
    PaginationComponent,
    DashboardComponent,
    AbilityComponent],
  providers: [MultiforceService],
  exports: [PaginationComponent]
})
export class MultiforceModule { }
