import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { forkJoin, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { FilesService } from 'src/app/pages/pa/files/files.service';
import { MultiforceService } from '../../multiforce/multiforce.service';
import { AbsentRegisterComponent } from '../absent-register/absent-register.component';
import { IEmployee } from '../dashboard';
import { DashboardService } from '../dashboard.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  employeeList: IEmployee[];
  ldspList: IEmployee[] = [];
  workerList: IEmployee[] = [];
  message: string;
  progress: number;
  listImageAvailable = [];
  isProduct: boolean;
  isMulti: boolean;
  isNormal: boolean;
  countData = {
    total: 0,
    totalLD: 0,
    totalSP: 0,
    totalWorker: 0,
    absent: 0,
  };
  constructor(
    private dashboardService: DashboardService,
    private datepipe: DatePipe,
    private modalService: NgbModal,
    private cookieService: CookieService,
    private multiService: MultiforceService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.isMulti = JSON.parse(this.cookieService.get('user')).GroupChild.includes('Multi');
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.dashboardService.getEmployeeList({ cellId: JSON.parse(this.cookieService.get('user')).GroupId })
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        res => {
          this.countData.total = res.employeeList.length;
          this.divideList(res.employeeList);
          this.employeeList = res.employeeList;
          this.isProduct = res.isProduct;
          this.getImages();
          // this.getStopMulti(JSON.parse(this.cookieService.get('user')).GroupId);
        }
      );
  }

  divideList(data: IEmployee[]) {
    this.countData.totalLD = 0;
    this.countData.totalSP = 0;
    this.countData.absent = 0;
    this.countData.totalWorker = 0;
    this.ldspList = [];
    this.workerList = [];
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

  // getStopMulti(groupId: number) {
  //   this.dashboardService.getStopMulti(groupId).subscribe(res => console.log(res));
  // }

  startAgain(multi: IEmployee) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ms-2'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: `Bạn có muốn xác nhận sử dụng Multi ${multi.code} - ${multi.firstName} ${multi.lastName} không?`,
        icon: 'warning',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        showCancelButton: true
      })
      .then(result => {
        if (result.value) {
          this.dashboardService.registerStartMulti(parseInt(multi.code, 10)).subscribe(() => {
            this.getEmployeeList();
            swalWithBootstrapButtons.fire(
              'Successful!',
              'Code này đã được hoạt động trở lại!!!',
              'success'
            );
          }, err => {
            if (err === 'Invalid Code') {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Code này đã được hoạt động rồi!!!',
                'error'
              );
            }
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            '',
            'error'
          );
        }
      });
  }

  stopMulti(multi: IEmployee) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ms-2'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: `Bạn có muốn xác nhận dừng sử dụng Multi ${multi.code} - ${multi.firstName} ${multi.lastName} không?`,
        icon: 'warning',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        showCancelButton: true
      })
      .then(result => {
        if (result.value) {
          this.dashboardService.registerStopMulti(parseInt(multi.code, 10)).subscribe(() => {
            this.getEmployeeList();
            swalWithBootstrapButtons.fire(
              'Successful!',
              '',
              'success'
            );
          }, err => {
            if (err === 'Invalid Code') {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Code này đã được đăng ký dừng hoạt động!!!',
                'error'
              );
            }
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            '',
            'error'
          );
        }
      });
  }

  getImages() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.employeeList.length; i++) {
      this.employeeList[i].imagepath = 0;
      // this.fileService.getImages(this.employeeList[i].code)
      //   .subscribe(res => this.employeeList[i].imagepath = 1, err => this.employeeList[i].imagepath = 0);
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public createImgPath = (employee: IEmployee) => {
    return 'assets/images/users/no_image.png';
    // if (employee.imagepath === 0) {
    //   // return 'assets/images/users/no_image.png';
    // } else {
    //   return this.dashboardService.getImage(employee.code);
    //   // return `http://localhost:5000/resources/images/${employee.code}.PNG`;
    // }
  }

  update() {
  }

  openRegisterMultiModal(employee: IEmployee) {
    const modalRef = this.modalService.open(AbsentRegisterComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.employee = employee;
    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      this.multiService.registerMulti(receivedEntry).subscribe(() => {
        modalRef.close(),
          this.snackBar.open('Đăng ký thành công!!', '', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
          });
      }, err => modalRef.componentInstance.error = 'Leader đã order multi cho người này!');
    });
  }
  openEmployeeInfoModal(employee: IEmployee) { }
}
