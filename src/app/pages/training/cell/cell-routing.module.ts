import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CellComponent } from './cell.component';
import { EmployeeComponent } from './employee/employee.component';
import { MultiComponent } from './multi/multi.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: CellComponent
    },
    {
        path: 'employee',
        component: EmployeeComponent
    },
    {
        path: 'multi',
        component: MultiComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CellRoutingModule { }
