import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from 'src/app/shared/abstract/abstract.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends AbstractService {
  private dashboard = {
    employeeList: `${environment.apiURL}/dashboard/attendanceboard`,
    getImage: `${environment.imageURL}/resources/images`,
    stopMulti: `${environment.apiURL}/multi/stop`,
    startMulti: `${environment.apiURL}/multi`
  };

  constructor(private http: HttpClient) {
    super();
  }

  getEmployeeList(params?: any) {
    return this.http.get<any>(this.dashboard.employeeList, {
      params: this.toHttpParams(params),
    });
  }
  getImage(code) {
    return this.getImage + `${code}.png`;
  }

  registerStopMulti(code: number) {
    return this.http.post<any>(this.dashboard.stopMulti, { code });
  }

  registerStartMulti(code: number) {
    return this.http.delete<any>(`${this.dashboard.startMulti}/${code}`);
  }

}
