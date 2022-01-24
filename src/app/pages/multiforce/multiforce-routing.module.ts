import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbilityComponent } from './ability/Ability.component';
import { AutoArrangeComponent } from './auto-arrange/auto-arrange.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { UploadMasterComponent } from './upload-master/upload-master.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'ability',
        component: AbilityComponent
    },
    {
        path: 'auto-arrange',
        component: AutoArrangeComponent
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
export class MultiforceRoutingModule { }
