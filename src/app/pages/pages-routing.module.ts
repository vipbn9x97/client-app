import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './dashboards/default/default.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DefaultComponent },
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'multiforce', loadChildren: () => import('./multiforce/multiforce.module').then(m => m.MultiforceModule) },
  { path: 'training', loadChildren: () => import('./training/training.module').then(m => m.TrainingModule) },
  { path: 'pa', loadChildren: () => import('./pa/pa.module').then(m => m.PaModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
