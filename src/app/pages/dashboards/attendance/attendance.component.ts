import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { forkJoin, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FilesService } from 'src/app/pages/pa/files/files.service';
import { AbsentRegisterComponent } from '../absent-register/absent-register.component';
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
  listImageAvailable = [];
  isProduct: boolean;
  constructor(
    private dashboardService: DashboardService,
    private datepipe: DatePipe,
    private modalService: NgbModal,
    private cookieService: CookieService,
    private fileService: FilesService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList() {
    const DateNow = this.datepipe.transform(
      new Date().toString(),
      'MM-dd-yyyy'
    );
    this.dashboardService.getEmployeeList({ Date: DateNow, CellId: JSON.parse(this.cookieService.get('user')).GroupId, isProduct: false })
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        res => { this.employeeList = res.data; this.isProduct = res.isProduct; this.getImages(); }
      );
  }

  getImages() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.employeeList.length; i++) {
      this.fileService.getImages(this.employeeList[i].code)
        .subscribe(res => this.employeeList[i].imagepath = 1, err => this.employeeList[i].imagepath = 0);
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }


  public createImgPath = (employee: IEmployee) => {
    if (employee.imagepath === 0) {
      return 'assets/images/users/no_image.png';
    } else {
      return `http://localhost:5000/resources/images/${employee.code}.PNG`;
    }

  }

  update() {
    console.log('ok');
  }

  openRegisterMultiModal(employee: IEmployee) {
    const modalRef = this.modalService.open(AbsentRegisterComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.employee = employee;
    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      modalRef.close();
      console.log(receivedEntry);
    });
  }
  openEmployeeInfoModal(employee: IEmployee) {}

}
