import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './files.component';
import { ImagesComponent } from './images/images.component';
import { FilesRoutingModule } from './files-routing.module';
import { FilesService } from './files.service';

@NgModule({
  imports: [
    CommonModule,
    FilesRoutingModule
  ],
  declarations: [FilesComponent, ImagesComponent],
  providers: [FilesService]
})
export class FilesModule { }
