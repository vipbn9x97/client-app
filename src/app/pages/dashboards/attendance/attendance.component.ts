import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IEmployee } from '../dashboard';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  employeeList: IEmployee[];
  message: string;
  progress: number;
  imgtest;
  constructor(private dashboardService: DashboardService, private datepipe: DatePipe) { }

  ngOnInit() {
    this.employeeList = [{
      absent: null,
      birth_day: '1983-09-18T00:00:00',
      code: null,
      cost: null,
      first_name: 'Nguyễn Hồng',
      grade: 'G2',
      group_id: 1080,
      last_name: 'Vân',
      newNV: null,
      position: 'G2',
      session: 6495375,
      st_id: 96993,
      station: 'LD'
    }];
    // this.getEmployeeList();
    // this.download();
  }

  getEmployeeList() {
    const DateNow = this.datepipe.transform(
      new Date(new Date().getFullYear(), new Date().getMonth(), 1).toString(),
      'MM-dd-yyyy'
    );
    console.log(DateNow);
    // tslint:disable-next-line:max-line-length
    this.dashboardService.getEmployeeList({ Date: DateNow, CellId: 1080, isProduct: true })
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        res => this.employeeList = res.data,
        err => console.log(err)
      );
  }

  // download() {
  //   this.dashboardService.downloadImages().subscribe((response) => {
  //   });
  // }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public createImgPath = (serverPath: string) => {
    return `http://localhost:5000/resources/images/${serverPath}.PNG`;
  }

}
