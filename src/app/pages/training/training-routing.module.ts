import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'basic', loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule) },
    { path: 'cell', loadChildren: () => import('./cell/cell.module').then(m => m.CellModule) },
    { path: 'course', loadChildren: () => import('./course/course.module').then(m => m.CourseModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrainingRoutingModule { }
