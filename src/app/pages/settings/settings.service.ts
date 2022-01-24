import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from 'src/app/shared/abstract/abstract.service';
import { environment } from 'src/environments/environment';
import { IModel } from './settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService extends AbstractService {
  private settings = {
    models: `${environment.apiURL}/settings/multiforce/models`,
    status: `${environment.apiURL}/settings/multiforce/status`
  };
  constructor(private http: HttpClient) {
    super();
  }

  getModelByDept(deptId: number) {
    return this.http.get<IModel[]>(this.settings.models, {
      params: { deptId },
    });
  }

  updateOrderMultiStatus(model) {
    return this.http.post<any>(this.settings.status, this.toHttpBody(model));
  }

}
