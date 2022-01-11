import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

import { ChartsComponent } from './chart.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [CommonModule, NgApexchartsModule, SharedModule],
  declarations: [ChartsComponent],
  exports: [ChartsComponent],
})
export class ChartModule {}
