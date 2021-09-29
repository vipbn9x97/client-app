import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

import { StoreService } from './services/storage.service';
import { AuthGuard } from './guards/auth.guard';
import { HttpCancellationService } from './services/utils/http-cancellation.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [StoreService, AuthGuard, HttpCancellationService, CookieService],
})
export class CoreModule { }
