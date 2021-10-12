import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from 'src/app/shared/abstract/abstract.service';
import { environment } from 'src/environments/environment';
import { IAbsent } from './multi';

@Injectable({
  providedIn: 'root'
})
export class MultiforceService extends AbstractService {
  private multi = {
    registerMulti: `${environment.apiURL}/multi/register`,
  };
  constructor(private http: HttpClient) {
    super();
  }

  registerMulti(body: IAbsent) {
    return this.http.post<any>(this.multi.registerMulti, body);
  }

}
