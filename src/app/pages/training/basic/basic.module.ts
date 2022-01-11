import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AndonComponent } from './andon/andon.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [BasicComponent, AndonComponent]
})
export class BasicModule { }
