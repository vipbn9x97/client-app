import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StoreService } from './storage.service';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
  returnUrl: {
    url: string;
    queryParams: any;
  };

  constructor(
    private httpClient: HttpClient,
    private storeService: StoreService,
    private router: Router
  ) { }

  /**
   * Performs the auth
   * @param username username of user
   * @param password password of user
   */
  login(body: { username: string; password: string }) {
    return this.httpClient.post(`${environment.apiURL}/token`, body);
  }

  /**
   * Logout the user
   */
  logout() {
    // logout the user
    this.storeService.clear();
    this.router.navigate(['account/login']);
  }
}

