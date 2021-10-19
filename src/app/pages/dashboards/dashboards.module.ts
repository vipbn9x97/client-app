import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdownModule, NgbTooltipModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';

import { DefaultComponent } from './default/default.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AbsentRegisterComponent } from './absent-register/absent-register.component';
import { FilesModule } from '../pa/files/files.module';
import { UploadMasterComponent } from './upload-master/upload-master.component';

@NgModule({
  declarations: [DefaultComponent, AttendanceComponent, AbsentRegisterComponent, UploadMasterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardsRoutingModule,
    UIModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    WidgetModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    SharedModule,
    FilesModule
  ]
})
export class DashboardsModule { }
