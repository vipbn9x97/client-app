import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaComponent } from './pa.component';
import { PaRoutingModule } from './pa-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PaRoutingModule
  ],
  declarations: [PaComponent]
})
export class PaModule { }
