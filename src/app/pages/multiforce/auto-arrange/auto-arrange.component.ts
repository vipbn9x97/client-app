import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MultiforceService } from '../multiforce.service';
import { orderBy, cloneDeep } from 'lodash';
import { CookieService } from 'ngx-cookie-service';
import { DashboardService } from '../../dashboards/dashboard.service';
import { IEmployee } from '../../dashboards/dashboard';
import { ITottal } from '../dashboard/dashboard';
@Component({
  selector: 'app-auto-arrange',
  templateUrl: './auto-arrange.component.html',
  styleUrls: ['./auto-arrange.component.scss']
})
export class AutoArrangeComponent implements OnInit, OnDestroy {
  assy: ITottal = {
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
  private ngUnsubscribe = new Subject();
  employeeList: IEmployee[];
  countData = {
    total: 0,
    totalLD: 0,
    totalSP: 0,
    totalWorker: 0,
    absent: 0,
  };
  ldspList: IEmployee[] = [];
  workerList: IEmployee[] = [];
  listOrderMulti: any;
  availableMulti: any;
  orderMultiHistory: any;
  finalResult = [];
  finalResultfinal = [];
  list = [1, 2, 3, 4, 5, 6, 7, 8, 5, 4, 3];
  isProduct: boolean;
  isMulti: boolean;
  isNormal: boolean;
  deptId: number;
  shift: string;
  constructor(
    private multiService: MultiforceService,
    private datepipe: DatePipe,
    private cookieService: CookieService,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.deptId = JSON.parse(this.cookieService.get('user')).DeptId;
    this.shift = JSON.parse(this.cookieService.get('user')).GroupChild.split('-')[0];
    this.getAllData();
    this.getEmployeeList();
  }

  getEmployeeList() {
    const DateNow = this.datepipe.transform(
      new Date().toString(),
      'MM-dd-yyyy'
    );
    this.dashboardService.getEmployeeList({ Date: DateNow, CellId: JSON.parse(this.cookieService.get('user')).GroupId })
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        res => {
          this.countData.total = res.data.length;
          this.divideList(res.data);
          // this.getStopMulti(JSON.parse(this.cookieService.get('user')).GroupId);
        }
      );
  }
  divideList(data: IEmployee[]) {
    for (const iterator of data) {
      if (iterator.station.includes('SP') || iterator.station.includes('LD')) {
        this.ldspList.push(iterator);
        if (iterator.station.includes('SP')) this.countData.totalSP += 1;
        if (iterator.station.includes('LD')) this.countData.totalLD += 1;
      } else {
        this.countData.totalWorker += 1;
        this.workerList.push(iterator);
      }
      if (iterator.session === null) {
        this.countData.absent += 1;
      }
    }
  }

  getAllData() {
    const DateNow = this.datepipe.transform(
      new Date().toString(),
      'MM-dd-yyyy'
    );
    forkJoin({
      getListOrderMulti: this.multiService.getListOrderByDept({ deptId: this.deptId, date: DateNow, shift: 'Shift A' }),
      getAvailableMulti: this.multiService.getAvailableMulti({ deptId: this.deptId, date: DateNow, shift: 'Shift A' }),
      getOrderMultiHistory: this.multiService.getListOrderMultiHistory({ deptId: 14, date: DateNow, shift: 'Shift A' })
    }).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      ({ getListOrderMulti, getAvailableMulti, getOrderMultiHistory }) => {
        this.listOrderMulti = getListOrderMulti;
        this.availableMulti = getAvailableMulti.data;
        this.orderMultiHistory = getOrderMultiHistory.data;
        this.assy.total = this.listOrderMulti.length;
        const orderArray = [];
        for (const data of this.listOrderMulti) {
          orderArray.push(data.stationId.toString().trim());
          if (data.typeAbsent === 'Long sick') this.assy.longSick += 1;
          if (data.typeAbsent === 'Resignation') this.assy.resign += 1;
          if (data.typeAbsent === 'New OP') this.assy.newOP += 1;
          if (data.typeAbsent === 'Absent OP') this.assy.absentOP += 1;
          if (data.typeAbsent === 'Need SP') this.assy.needSP += 1;
          if (data.typeAbsent === 'Extra work') this.assy.extraWork += 1;
        }
        // tim ra nhung multi co the dap ung cong doan duoc order
        const listAvailableMulti = this.availableMulti.filter((item: any) => orderArray.includes(item.stationId.toString().trim()));
        // sap xep multi theo thu tu station nao it multi  thi xep truoc
        const listOrderAvailableMulti = orderBy(listAvailableMulti, [(o: any) => o.ability.length], ['asc']);
        this.arrangeMulti(listOrderAvailableMulti);
      }
    );
  }

  arrangeMulti(listOrderAvailableMulti) {
    if (listOrderAvailableMulti.length > 0) {
      const result = [];
      if (this.finalResult.length === 0) {
        this.finalResult.push({ [listOrderAvailableMulti[0].stationId]: listOrderAvailableMulti[0].ability.split((/;| - /))[0] });
        listOrderAvailableMulti.splice(0, 1);
        if (listOrderAvailableMulti.length > 0) this.arrangeMulti(listOrderAvailableMulti);
      } else {
        if (listOrderAvailableMulti.length > 0) {
          let multiAvailable = listOrderAvailableMulti[0].ability.split((/;| - /));
          let i = 0;
          while (i < multiAvailable.length) {
            if (multiAvailable[i] === '100' || multiAvailable[i] === '75' || multiAvailable[i] === '50') {
              multiAvailable.splice(i, 1);
            } else {
              ++i;
            }
          }
          for (const data of this.finalResult) {
            result.push(Object.values(data)[0].toString().split('-')[0]);
          }
          multiAvailable = multiAvailable.filter((item: any) => !result.includes(item.toString().trim()));
          if (multiAvailable.length > 0) {
            this.finalResult.push({ [listOrderAvailableMulti[0].stationId]: multiAvailable[0].toString().trim() });
          }
          listOrderAvailableMulti.splice(0, 1);
          this.arrangeMulti(listOrderAvailableMulti);
        }
      }
    } else {
      console.log(this.finalResult);
      for (const data of this.finalResult) {
        this.multiService.getStationName({ stationID: Object.keys(data).toString() })
          .subscribe(res => {
            this.finalResultfinal.push({ [res[0].stName]: Object.values(data).toString() });
          });
      }
    }
  }

  // bat dau loop tung station de sap xel
  // this.arrangeData(, );
  // while (listOrderAvailableMulti.length > 0) {
  //
  // }

  // lay danh sach nhung nguoi co the lam duoc station i
  // for (let j = 0; j < listMulti.length; j += 2) {
  //   const result = [];
  //   const result2 = [];
  //   // neu da sap xep xong 1 luot roi thi xoa nhung nguoi da duoc sap xep o nhung station khac
  //   if (finalResult.length > 0) {
  //     for (const data of finalResult) {
  //       result.push(Object.values(data)[0].toString().split('-')[0]);
  //     }
  //     if (result.includes(listMulti[j].toString().trim())) {
  //       listMulti.splice(j, 1);
  //       listMulti.splice(j, 1);
  //     } else {
  //       // result2 = cloneDeep(finalResult);
  //       for (const jdata of finalResult) {
  //         // if (Object.values(jdata).toString().trim() !== i.stationId.toString().trim()) {
  //         //   // finalResult.push();
  //         //   result2.push({ [i.stationId]: listMulti[0].toString().trim() });
  //         // }
  //         // break;
  //         // if (Object.values(jdata).toString().trim() !== i.stationId.toString().trim()) {
  //         // }
  //       }
  //       // for (const idata of result2) {
  //       //   finalResult.push(idata);
  //       // }
  //       // console.log(!Object.values(finalResult).includes(i.stationId.toString().trim()));
  //       // if (!finalResult.includes(i.stationId.toString().trim())) {
  //       //   finalResult.push({ [i.stationId]: listMulti[0].toString().trim() });
  //       // }
  //     }
  //   }
  //   // neu chua sap xep duoc ai thi bat dau
  //   else {
  //     // dau tien la da co danh sach nhung nguoi lam duoc station i tai day
  //     // kiem tra xem nguoi nao lam duoc it cd nhat trong danh sach multi
  //     // muon kiem tra thi dem so luong CD co the dung
  //     // this.multiService.getAvailableStationByMulti({ code: listMulti[j].toString().trim() })
  //     //   .subscribe(res => {
  //     //     stationCount.push(res);
  //     //   });
  //     finalResult.push({ [i.stationId]: listMulti[0].toString().trim() });
  //   }
  // }

  // console.log(finalResult);
  // for (const a of this.listOrderMulti) {
  //   const stationId = a.stationId;
  //   for (const b of this.availableMulti) {
  //     if (stationId.toString() === b.stationId) {
  //       const ability = b.ability.split(/;|-/);
  //       if (result.length === 0) {
  //         rs.push(ability[0].trim());
  //         result.push({ [stationId]: ability[0].trim() + ' - ' + ability[1].trim() });
  //         break;
  //       } else {
  //         // console.log('start');
  //         for (let i = 0; i < ability.length; i += 2) {
  //           // for (const c of  ) {
  //           //   // console.log &&
  //           //   // tslint:disable-next-line:max-line-length
  //           // tslint:disable-next-line:max-line-length
  //           //   if (ability[i].trim() !== Object.values(c)[0].toString().split(' - ')[0]
  // && stationId.toString() !== Object.keys(c).toString()) {
  //           //     // console.log('please dont go');
  //           //     console.log(stationId.toString());
  //           //     console.log(Object.keys(c).toString());
  //           //     console.log(stationId.toString() === Object.keys(c).toString().trim());
  //           //     // console.log(Object.keys(c).toString());
  //           //     result.push({ [stationId]: ability[i].trim() + ' - ' + ability[i + 1].trim() });
  //           //     // console.log(Object.keys(c).toString());
  //           //     // console.log(Object.values(c)[0].toString().split(' - '));
  //           //     // console.log(ability[i].trim());
  //           //     // result.push({ [stationId]: ability[i].trim() + ' - ' + ability[i + 1].trim() });
  //           //   }
  //           //   // if (ability[i].trim() !== c) {
  //           //   //   console.log(rs);
  //           //   //   rs.push(ability[i].trim());
  //           //   //   result.push({ [stationId]: ability[i].trim() + ' - ' + ability[i + 1].trim() });
  //           //   //   break;
  //           //   // }
  //           // }
  //         }
  //       }
  //     }
  //   }
  //   // console.log(result);
  //   // const entry = this.availableMulti.find((data) => {
  //   //   if (stationId.toString() === data.stationId) {
  //   //     const stringArr = data.ability.split(/;|-/);
  //   //     // for(const b of data.)
  //   //     // console.log(data.ability.split(/;|-/));
  //   //     for (let i = 0; i < stringArr.length; i += 2) {
  //   //       // if()
  //   //       if (rs.length === 0) {
  //   //         // console.log(stationId.toString() === data.stationId);
  //   //         return stationId.toString() === data.stationId;
  //   //       } else {
  //   //         for (const b of rs) {
  //   //           // console.log(stringArr[i].toString().trim() !== b.toString().trim());
  //   //           if (stringArr[i].toString().trim() !== b.toString().trim()) {
  //   //             // console.log(stringArr[i]);
  //   //             return stationId.toString() === data.stationId;
  //   //           }
  //   //         }
  //   //       }
  //   //     }
  //   //   }
  //   // });

  //   // rs.push(entry.ability.split(/;|-/)[0].trim());
  //   // result.push({ [stationId]: entry.ability.split(/;|-/)[0].trim() + ' - ' + entry.ability.split(/;|-/)[1].trim() });
  // }

  // sap xep order theo thu tu: cong doan dac biet -> cong doan trong -> cong doan can ho tro

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
