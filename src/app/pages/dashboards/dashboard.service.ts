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
  };
  private file = {
    images: `${environment.apiURL}/upload/images`,
  };

  constructor(private http: HttpClient) {
    super();
  }

  getEmployeeList(params?: any) {
    return this.http.get<any>(this.dashboard.employeeList, {
      params: this.toHttpParams(params),
    });
  }
  downloadImages() {
    return this.http.get(this.file.images, {});
  }

}