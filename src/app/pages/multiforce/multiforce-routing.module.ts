import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbilityComponent } from './ability/Ability.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';

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

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MultiforceRoutingModule { }
