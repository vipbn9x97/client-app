import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from 'src/app/shared/abstract/abstract.service';
import { IChartSearch, IChartData } from 'src/app/shared/models/chart.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BasicService extends AbstractService {
  training = {
    totalDay: `${environment.apiURL}/andon/ChartAttendance/TotalQuantity`,
    attendance: `${environment.apiURL}/andon/ChartAttendance/Attendance`,
    resign: `${environment.apiURL}/andon/ChartResign/Attendance`,
  };

  constructor(
    private httpClient: HttpClient
  ) {
    super();
  }

  getChartTotalDay(params: IChartSearch) {
    return this.httpClient.get<IChartData[]>(this.training.totalDay, { params: this.toHttpParams(params) });
  }

  getChartAttendance(params: IChartSearch) {
    return this.httpClient.get<IChartData[]>(this.training.attendance, {params: this.toHttpParams(params)});
  }

  getChartResign(params: IChartSearch) {
    return this.httpClient.get<IChartData[]>(this.training.resign, { params: this.toHttpParams(params) });
  }

}
