import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CellComponent } from './cell.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: CellComponent
    },
    {
        path: 'employee',
        component: EmployeeComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CellRoutingModule { }
