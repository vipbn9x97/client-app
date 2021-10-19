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
    uploadAbilityFile: `${environment.apiURL}/uploadexcel/read`,
    getMultiListByModel: `${environment.apiURL}/multi/ability/list`
  };
  constructor(private http: HttpClient) {
    super();
  }

  registerMulti(body: IAbsent) {
    return this.http.post<any>(this.multi.registerMulti, body);
  }

  uploadMultiAbilityExcelFile(formData) {
    return this.http.request<any>(this.multi.uploadAbilityFile, formData);
  }

  getMultiListByModel(filter) {
    return this.http.get<any>(this.multi.getMultiListByModel, { params: this.toHttpParams(filter) });
  }

}
