import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiforceSettingsComponent } from './multiforce-settings/multiforce-settings.component';

const routes: Routes = [
    {
        path: 'multiforce',
        component: MultiforceSettingsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
