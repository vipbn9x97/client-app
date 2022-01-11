import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, forkJoin } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as _ from 'lodash';

import { IChartData, IChartSearch } from 'src/app/shared/models/chart.model';
import { BasicService } from '../basic.service';

@Component({
  selector: 'app-andon',
  templateUrl: './andon.component.html',
  styleUrls: ['./andon.component.scss']
})
export class AndonComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  attBasic: IChartData[];
  totalBasic: IChartData[];
  attAssy: IChartData[];
  totalAssy: IChartData[];
  chartResult = [];
  paramSearch: IChartSearch = { FromDate: null, ToDate: null, Area: null, Dept: null };
  chartLabel: string;

  constructor(private service: BasicService, private datepipe: DatePipe) { }

  ngOnInit() {
    this.paramSearch.FromDate = this.datepipe.transform(
      new Date(new Date().getFullYear(), new Date().getMonth(), 1).toString(),
      'MM-dd-yyyy'
    );
    this.paramSearch.ToDate = this.datepipe.transform(new Date().toString(), 'MM-dd-yyyy');
    this.paramSearch.Area = 'basic';
    this.chartLabel = 'Training Basic Attendance';
    this.getAttendance();
  }

  updateData(params: IChartSearch) {
    params.Dept === null ? (this.paramSearch = null) : (this.paramSearch.Dept = params.Dept);
    if (params.FromDate) { this.paramSearch.FromDate = params.FromDate; }
    if (params.ToDate) { this.paramSearch.ToDate = params.ToDate; }
    if (params.Area) {
      this.chartLabel = 'Training Cell Attendance';
      params.Area === 'Training Basic' ? this.paramSearch.Area = 'basic' : this.paramSearch.Area = 'assy';
    }
    console.log(params.Area);
  }

  getAttendance() {
    console.log(this.paramSearch);
    forkJoin({
      getAttendanceBasic: this.service.getChartAttendance(this.paramSearch),
      getTotalDayInBasic: this.service.getChartTotalDay(this.paramSearch),
    })
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        ({ getAttendanceBasic, getTotalDayInBasic }) => {
          this.attBasic = getAttendanceBasic;
          this.totalBasic = getTotalDayInBasic;
          this.mergeChartData(this.attBasic, this.totalBasic);
        },
        (error) => console.log(error)
      );
  }

  isUndefine(value: any) {
    return value.totalAttendance !== undefined;
  }

  private mergeChartData(paramsA: IChartData[], paramsB: IChartData[]) {
    const newA = paramsA.map((obj) => {
      // tslint:disable-next-line:no-string-literal
      obj['totalAttendance'] = obj.total;
      // tslint:disable-next-line:no-string-literal
      obj['newDate'] = obj.date === 0 ? obj.month + '-' + obj.year : obj.date + '-' + obj.month + '-' + obj.year;
      delete obj.total;
      delete obj.date;
      delete obj.month;
      delete obj.year;
      return obj;
    });
    const newB = paramsB.map((obj) => {
      // tslint:disable-next-line:no-string-literal
      obj['newDate'] = obj.date === 0 ? obj.month + '-' + obj.year : obj.date + '-' + obj.month + '-' + obj.year;
      delete obj.date;
      delete obj.month;
      delete obj.year;
      return obj;
    });
    this.chartResult = _(newA)
      .concat(newB) // concat the 2nd array
      .groupBy('newDate') // group by the identical key
      .map(_.spread(_.curry(_.merge))) // left currey merge to to create a new empty object, and spread the group as parameters
      .value()
      .filter(this.isUndefine);
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
