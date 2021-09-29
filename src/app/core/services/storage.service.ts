import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import jwt_decode from "jwt-decode";
import { CookieService } from "ngx-cookie-service";

export interface ILocalStorageData {
  authorization: string;
  language: string;
  userData: any;
}

@Injectable()
export class StoreService {
  private userSubject = new Subject<any>();
  constructor(
    private cookie: CookieService
  ) {}

  get getToken() {
    return this.cookie.get("token");
  }

  /**
   * Returns the current user
   */
  public currentUser() {
    return sessionStorage.getItem("token");
  }

  setUserData(data: string) {
    this.cookie.set("token", data);
    sessionStorage.setItem("token", data);
    const decoded = jwt_decode(data);
    sessionStorage.setItem("user", JSON.stringify(decoded));
    this.userSubject.next(decoded);
  }

  remove(key: string) {
    sessionStorage.removeItem(key);
  }

  clear() {
    sessionStorage.clear();
    this.userSubject.next();
  }

  getUserSubject(): Observable<any> {
    return this.userSubject.asObservable();
  }

  get(key: string) {
    const value = sessionStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch (error) {
      return error;
    }
  }

  set(key: string, value: any) {
    return sessionStorage.setItem(key, JSON.stringify(value));
  }
}
