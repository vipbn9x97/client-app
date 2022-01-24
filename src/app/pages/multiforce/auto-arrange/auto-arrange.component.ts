import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { MultiforceService } from '../multiforce.service';
import { CookieService } from 'ngx-cookie-service';
import { DashboardService } from '../../dashboards/dashboard.service';
import { IEmployee } from '../../dashboards/dashboard';
import { ITottal } from '../dashboard/dashboard';
import * as moment from 'moment';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { clone } from 'lodash';
import { IMultiAbility, IMultiOrderDetail } from '../multi';
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
  date = new Date();
  private ngUnsubscribe = new Subject();
  formatDate: string;
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
  listOrderMulti: IMultiOrderDetail[];
  listAvailableMulti: IMultiAbility[];
  orderMultiHistory: any;
  finalResult = [];
  finalResultfinal = [];
  list = [1, 2, 3, 4, 5, 6, 7, 8, 5, 4, 3];
  isProduct: boolean;
  isMulti: boolean;
  isNormal: boolean;
  deptId: number;
  cellName: string;
  shift: string;
  dataList: any;

  constructor(
    private multiService: MultiforceService,
    private datepipe: DatePipe,
    private cookieService: CookieService,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.deptId = JSON.parse(this.cookieService.get('user')).DeptId;
    this.cellName = JSON.parse(this.cookieService.get('user')).GroupChild.split('-')[0];
    this.shift = this.cellName.includes('A') ? 'Shift A' : 'Shift B';
    this.formatDate = moment(this.date).format('MM-DD-YYYY');
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
          this.countData.total = res.employeeList.length;
          this.divideList(res.employeeList);
          // this.getStopMulti(JSON.parse(this.cookieService.get('user')).GroupId);
        }
      );
  }

  divideList(data: IEmployee[]) {
    for (const iterator of data) {
      if (iterator.stationName.includes('SP') || iterator.stationName.includes('LD')) {
        this.ldspList.push(iterator);
        if (iterator.stationName.includes('SP')) this.countData.totalSP += 1;
        if (iterator.stationName.includes('LD')) this.countData.totalLD += 1;
      } else {
        this.countData.totalWorker += 1;
        this.workerList.push(iterator);
      }
      if (iterator.session === null) {
        this.countData.absent += 1;
      }
    }
  }

  changeShift(value: string) {
    this.shift = value;
  }

  onDateSelect(event: NgbDate) {
    this.formatDate = event.month + '-' + event.day + '-' + event.year;
  }

  getAllData() {
    if (this.shift === 'Select') {
      this.shift = this.cellName.includes('A') ? 'Shift A' : 'Shift B';
    }
    this.multiService.getAutoArrangeMulti({ deptId: this.deptId, shift: this.shift, date: this.formatDate }).subscribe(res => {
      this.listAvailableMulti = res.listAvailableMulti;
      this.listOrderMulti = res.listOrderMulti;
      this.orderMultiHistory = res.listMultiOrderHistory;
      this.assy.total = this.listOrderMulti.length;
      const orderArray = [];
      const modelArray = [];
      const newData = {};
      const newListOrderMulti: IMultiOrderDetail[] = clone(this.listOrderMulti);
      for (const data of newListOrderMulti) {
        if (data.typeAbsent === 'Long sick') {
          this.assy.longSick += 1;
        }
        if (data.typeAbsent === 'Resignation') {
          this.assy.resign += 1;
        }
        if (data.typeAbsent === 'New OP') {
          this.assy.newOP += 1;
        }
        if (data.typeAbsent === 'Absent OP') {
          this.assy.absentOP += 1;
        }
        if (data.typeAbsent === 'Need SP') {
          this.assy.needSP += 1;
        }
        if (data.typeAbsent === 'Extra work') {
          this.assy.extraWork += 1;
        }
        if (!modelArray.includes(data.model)) modelArray.push(data.model);
        orderArray.push(data.stationId.toString().trim());
        if (data.cell.includes('Sub')) {
          data.model = 'Sub ' + data.model;
        } else {
          data.model = 'Main ' + data.model;
        }
        if (!newData.hasOwnProperty(data.model)) {
          Object.assign(newData, {
            [data.model]: {
              [data.cell]: {
                [data.stationName]: {
                  code_multi: data.codeMulti,
                  typeAbsent: data.typeAbsent,
                  stationId: data.stationId,
                  lastName: data.lastName
                }
              }
            }
          });
        } else {
          const j = this.keyify(newData);
          if (!this.checkExist(j, { model: data.model, cell: data.cell, station: null })) {
            newData[data.model][data.cell] = {
              [data.stationName]: {
                code_multi: data.codeMulti,
                typeAbsent: data.typeAbsent,
                stationId: data.stationId,
                lastName: data.lastName
              }
            };
          } else if (!this.checkExist(j, { model: data.model, cell: data.cell, station: data.stationName })) {
            newData[data.model][data.cell][data.stationName] = {
              code_multi: data.codeMulti,
              typeAbsent: data.typeAbsent,
              stationId: data.stationId,
              lastName: data.lastName
            };
          }
        }
      }
      this.dataList = newData;
      this.multiService.checkIsArrange({ deptId: this.deptId, shift: this.shift, date: this.formatDate })
        .subscribe((rs) => {
          if (rs === null) {
            this.arrangeMulti();
          }
        });
    });
  }

  checkExist(arr: any, { model, cell, station }) {
    let count = 0;
    for (const i of arr) {
      if (station === null) {
        if (i.includes(model) && i.includes(cell)) count = 1;
      } else {
        if (i.includes(model) && i.includes(cell) && i.includes(station)) count = 1;
      }

    }
    if (count === 0) return false;
    else return true;
  }

  keyify = (obj, prefix = '') =>
    Object.keys(obj).reduce((res, el) => {
      if (typeof obj[el] === 'object' && obj[el] !== null) {
        return [...res, ...this.keyify(obj[el], prefix + el + '.')];
      }
      return [...res, prefix + el];
    }, [])

  arrangeMulti() {
    if (this.listAvailableMulti.length > 0) {
      const filteredResult = [];
      for (const i of this.listAvailableMulti) {
        if (i.ability !== null) filteredResult.push(i);
        else this.finalResult.push(i);
      }
      filteredResult.sort((a, b) => (a.ability.length > b.ability.length) ? 1 : -1);
      console.log(filteredResult);
      // const result = [];
      // if (filteredResult.length === 0) {
      //   this.finalResult.push({ [this.listAvailableMulti[0].stationId]: this.listAvailableMulti[0].ability.split((/;| - /))[0] });
      //   this.listAvailableMulti.splice(0, 1);
      //   if (this.listAvailableMulti.length > 0) this.arrangeMulti();
      // } else {
      //   if (this.listAvailableMulti.length > 0) {
      //     let multiAvailable = this.listAvailableMulti[0].ability.split((/;| - /));
      //     let i = 0;
      //     while (i < multiAvailable.length) {
      //       if (multiAvailable[i] === '100' || multiAvailable[i] === '75' || multiAvailable[i] === '50') {
      //         multiAvailable.splice(i, 1);
      //       } else {
      //         ++i;
      //       }
      //     }
      //     for (const data of this.finalResult) {
      //       result.push(Object.values(data)[0].toString().split('-')[0]);
      //     }
      //     multiAvailable = multiAvailable.filter((item: any) => !result.includes(item.toString().trim()));
      //     if (multiAvailable.length > 0) {
      //       this.finalResult.push({ [this.listAvailableMulti[0].stationId]: multiAvailable[0].toString().trim() });
      //     }
      //     this.listAvailableMulti.splice(0, 1);
      //     this.arrangeMulti();
      //   }
      // }
    }
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}

  // forkJoin({
  //   getListOrderMulti: this.multiService.getListOrderByDept({ deptId: this.deptId}),
  //   getAvailableMulti: this.multiService.getAvailableMulti({ deptId: this.deptId, shift: 'Shift A' }),
  //   getOrderMultiHistory: this.multiService.getListOrderMultiHistory({ deptId: 14, shift: 'Shift A' })
  // }).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
  //   ({ getListOrderMulti, getAvailableMulti, getOrderMultiHistory }) => {
  //     this.listOrderMulti = getListOrderMulti;
  //     this.availableMulti = getAvailableMulti;
  //     this.orderMultiHistory = getOrderMultiHistory;
  //     this.assy.total = this.listOrderMulti.length;
  //     const orderArray = [];
  //     const modelArray = [];
  //     for (const data of this.listOrderMulti) {
  //       if (!modelArray.includes(data.model)) modelArray.push(data.model);
  //       orderArray.push(data.stationId.toString().trim());
  //       if (data.typeAbsent === 'Long sick') this.assy.longSick += 1;
  //       if (data.typeAbsent === 'Resignation') this.assy.resign += 1;
  //       if (data.typeAbsent === 'New OP') this.assy.newOP += 1;
  //       if (data.typeAbsent === 'Absent OP') this.assy.absentOP += 1;
  //       if (data.typeAbsent === 'Need SP') this.assy.needSP += 1;
  //       if (data.typeAbsent === 'Extra work') this.assy.extraWork += 1;
  //     }
  //     this.divWidth = 100 / modelArray.length;
  //     this.modelList = modelArray;
  //     console.log(this.modelList);
  //     // tim ra nhung multi co the dap ung cong doan duoc order
  //     const listAvailableMulti = this.availableMulti.filter((item: any) => orderArray.includes(item.stationId.toString().trim()));
  //     // sap xep multi theo thu tu station nao it multi  thi xep truoc
  //     const this.listAvailableMulti = orderBy(listAvailableMulti, [(o: any) => o.ability.length], ['asc']);
  //     this.arrangeMulti(this.listAvailableMulti);
  //   }
  // );

  // bat dau loop tung station de sap xel
  // this.arrangeData(, );
  // while (this.listAvailableMulti.length > 0) {
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

