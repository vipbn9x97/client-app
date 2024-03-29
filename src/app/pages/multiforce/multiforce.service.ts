import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from 'src/app/shared/abstract/abstract.service';
import { environment } from 'src/environments/environment';
import { IAbsent, IMultiOrderDetail, MultiFilter } from './multi';

@Injectable({
  providedIn: 'root'
})
export class MultiforceService extends AbstractService {
  private multi = {
    registerMulti: `${environment.apiURL}/multi/register`,
    uploadAbilityFile: `${environment.apiURL}/uploadexcel/read`,
    getMultiListByModel: `${environment.apiURL}/multi/ability/list`,
    getAutoArrangeMulti: `${environment.apiURL}/multi/autoarrangemulti/auto-arrange`,
    getAvailablebyStation: `${environment.apiURL}/multi/autoarrangemulti/listbystation`,
    getOrderMultiHistory: `${environment.apiURL}/multi/autoarrangemulti/historyorder`,
    getAbilityByMulti: `${environment.apiURL}/multi/autoarrangemulti/listbymulti`,
    getStationName: `${environment.apiURL}/multi/autoarrangemulti/stationname`,
    checkIsArrange: `${environment.apiURL}/multi/autoarrangemulti/isarrange`,
    getListOrderByDept: `${environment.apiURL}/multi/autoarrangemulti/list`
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

  getListOrderByDept(params) {
    return this.http.get<any>(this.multi.getListOrderByDept, { params: this.toHttpParams(params) });
  }

  getAutoArrangeMulti(params: MultiFilter) {
    return this.http.get<any>(this.multi.getAutoArrangeMulti, { params: this.toHttpParams(params) });
  }
  getListOrderMultiHistory(params) {
    return this.http.get<any>(this.multi.getOrderMultiHistory, { params: this.toHttpParams(params) });
  }
  getAvailableMulti(params) {
    return this.http.get<any>(this.multi.getAvailablebyStation, { params: this.toHttpParams(params) });
  }
  getAvailableStationByMulti(params) {
    return this.http.get<any>(this.multi.getAbilityByMulti, { params: this.toHttpParams(params) });
  }
  getStationName(params) {
    return this.http.get<any>(this.multi.getStationName, { params: this.toHttpParams(params) });
  }
  checkIsArrange(params: MultiFilter) {
    return this.http.get<any>(this.multi.checkIsArrange, { params: this.toHttpParams(params) });
  }
}
