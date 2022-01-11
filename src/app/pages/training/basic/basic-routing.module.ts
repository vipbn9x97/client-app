import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AndonComponent } from './andon/andon.component';

const routes: Routes = [
    {
        path: 'andon',
        component: AndonComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MultiforceRoutingModule { }
