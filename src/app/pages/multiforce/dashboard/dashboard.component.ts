import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IMultiOrderDetail } from '../multi';
import { MultiforceService } from '../multiforce.service';
import { ITottal } from './dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  assy1: ITottal = {
    resign: 0,
    absentOP: 0,
    newOP: 0,
    needSP: 0,
    longSick: 0,
    extraWork: 0,
    total: 0,
    replacedAbsentOP: 0,
    replacedExtraWork: 0,
    replacedLongSick: 0,
    replacedNeedSP: 0,
    replacedNewOP: 0,
    replacedResign: 0,
    replacedTotal: 0
  };
  assy2: ITottal = {
    resign: 0,
    absentOP: 0,
    newOP: 0,
    needSP: 0,
    longSick: 0,
    extraWork: 0,
    total: 0,
    replacedAbsentOP: 0,
    replacedExtraWork: 0,
    replacedLongSick: 0,
    replacedNeedSP: 0,
    replacedNewOP: 0,
    replacedResign: 0,
    replacedTotal: 0
  };
  assy3: ITottal = {
    resign: 0,
    absentOP: 0,
    newOP: 0,
    needSP: 0,
    longSick: 0,
    extraWork: 0,
    total: 0,
    replacedAbsentOP: 0,
    replacedExtraWork: 0,
    replacedLongSick: 0,
    replacedNeedSP: 0,
    replacedNewOP: 0,
    replacedResign: 0,
    replacedTotal: 0
  };
  assy4: ITottal = {
    resign: 0,
    absentOP: 0,
    newOP: 0,
    needSP: 0,
    longSick: 0,
    extraWork: 0,
    total: 0,
    replacedAbsentOP: 0,
    replacedExtraWork: 0,
    replacedLongSick: 0,
    replacedNeedSP: 0,
    replacedNewOP: 0,
    replacedResign: 0,
    replacedTotal: 0
  };
  listOrderAssy1: IMultiOrderDetail;
  listOrderAssy2: IMultiOrderDetail;
  listOrderAssy3: IMultiOrderDetail;
  listOrderAssy4: any;
  constructor(private multiService: MultiforceService, private datepipe: DatePipe) { }

  ngOnInit() {
    this.getListRequired();
    this.getListReplaced();
  }

  getListRequired() {
    const DateNow = this.datepipe.transform(
      new Date().toString(),
      'MM-dd-yyyy'
    );
    forkJoin({
      getListOrderAssy1: this.multiService.getListOrderByDept({ deptId: 1, date: DateNow, shift: 'Shift A' }),
      getListOrderAssy2: this.multiService.getListOrderByDept({ deptId: 2, date: DateNow, shift: 'Shift A' }),
      getListOrderAssy3: this.multiService.getListOrderByDept({ deptId: 7, date: DateNow, shift: 'Shift A' }),
      getListOrderAssy4: this.multiService.getListOrderByDept({ deptId: 14, date: DateNow, shift: 'Shift A' }),
    }).pipe(takeUntil(this.ngUnsubscribe)).subscribe(({ getListOrderAssy1, getListOrderAssy2, getListOrderAssy3, getListOrderAssy4 }) => {
      this.listOrderAssy1 = getListOrderAssy1;
      this.listOrderAssy2 = getListOrderAssy2;
      this.listOrderAssy3 = getListOrderAssy3;
      this.listOrderAssy4 = getListOrderAssy4;
      this.assy4.total = this.listOrderAssy4.length;
      for (const i of this.listOrderAssy4) {
        if (i.typeAbsent === 'Long sick') this.assy4.longSick += 1;
        if (i.typeAbsent === 'Resignation') this.assy4.resign += 1;
        if (i.typeAbsent === 'New OP') this.assy4.newOP += 1;
        if (i.typeAbsent === 'Absent OP') this.assy4.absentOP += 1;
        if (i.typeAbsent === 'Need SP') this.assy4.needSP += 1;
        if (i.typeAbsent === 'Extra work') this.assy4.extraWork += 1;
      }
    });
  }

  getListReplaced() {

  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
