import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [
    {
        path: 'default',
        component: AttendanceComponent
    },
    {
        path: 'attendance',
        component: AttendanceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
