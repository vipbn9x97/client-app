import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { UploadMasterComponent } from './upload-master/upload-master.component';

const routes: Routes = [
    {
        path: 'default',
        component: DefaultComponent
    },
    {
        path: 'attendance',
        component: AttendanceComponent
    },
    {
        path: 'upload',
        component: UploadMasterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
