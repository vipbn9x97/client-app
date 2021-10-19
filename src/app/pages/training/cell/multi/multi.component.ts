import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { SharedService } from 'src/app/shared/shared.service';
import { IMulti } from '../../training';
import { CellService } from '../cell.service';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html'
})
export class MultiComponent implements OnInit {
  listModel;
  listCell;
  listStation;
  errorResponse;
  code = 0;
  error: boolean;
  image;
  fromDate;
  activeTab: number;
  userInfo: any;
  registerForm: FormGroup;
  currentMulti: IMulti[];
  dataLength: number;
  currentpage: number;
  historyLength: number;
  historyMulti: IMulti[];
  title: string;
  deptList = [
    { name: 'ASSY1', id: 1 },
    { name: 'ASSY2', id: 2 },
    { name: 'ASSY3', id: 7 },
    { name: 'ASSY4', id: 14 }
  ];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private cellService: CellService,
    private sharedService: SharedService,
    private datepipe: DatePipe,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      code: ['', [Validators.required]],
      dept: ['', [Validators.required]],
      model: ['', [Validators.required]],
      cell: ['', [Validators.required]],
      station: ['', [Validators.required]],
      fromDate: ['', [Validators.required]]
    });
    this.userInfo = null;
    this.fromDate = Date.now();
    this.getHistoryMultiTraining();
  }

  changeTab(event) {
    if (event.nextId === 2) {
      this.getCurrentMultiTraining();
      this.activeTab = 2;
    } else {
      this.activeTab = 1;
    }
  }

  getCurrentMultiTraining(code?: number) {
    if (this.currentMulti === undefined) this.cellService.getCurrentMultiTraining(code)
      .subscribe(res => {
        this.currentMulti = res.data;
        this.dataLength = res.data.length;
      });
  }

  getHistoryMultiTraining(code?: number) {
    if (this.historyMulti === undefined) this.cellService.getHistoryMultiTraining(code)
      .subscribe(res => {
        this.historyMulti = res.data;
        this.historyLength = res.data.length;
      });
  }

  updateEndTime(id: number, code: string) {
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
        text: `Bạn có muốn xác nhận hoàn thành khóa học cho code ${code} không?`,
        icon: 'warning',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        showCancelButton: true
      })
      .then(result => {
        if (result.value) {
          this.cellService.updateFinishTime(id).subscribe(() => {
            this.historyMulti = undefined;
            this.currentMulti = undefined;
            this.getCurrentMultiTraining();
            this.getHistoryMultiTraining();
            swalWithBootstrapButtons.fire(
              'Successful!',
              '',
              'success'
            );
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

  get f() { return this.registerForm.controls; }

  searchCode(code: number) {
    if (this.activeTab === 2) {
      this.currentMulti = undefined;
      this.getCurrentMultiTraining(code);
    } else {
      this.historyMulti = undefined;
      this.getHistoryMultiTraining(code);
    }
  }

  insertNewTrainee(modal) {
    this.title = 'Đăng ký học CĐ mới';
    this.modalService.open(modal, { size: 'xl', centered: true });
  }

  register() {
    if (this.registerForm.value.code === ''
      || this.registerForm.value.dept === ''
      || this.registerForm.value.model === ''
      || this.registerForm.value.cell === ''
      || this.registerForm.value.station === ''
      || this.registerForm.value.fromDate === '') {
      let errorData = '';
      if (this.f.code.value === '') { errorData += 'code'; }
      if (this.f.dept.value === '') { errorData += ', dept'; }
      if (this.f.model.value === '') { errorData += ', model'; }
      if (this.f.cell.value === '') { errorData += ', cell'; }
      if (this.f.station.value === '') { errorData += ', station'; }
      if (this.f.fromDate.value === '') { errorData += ', từ ngày'; }
      this.errorResponse = 'Vui lòng nhập đầy đủ thông tin: ' + errorData;
    } else {
      this.registerForm.value.fromDate = this.datepipe.transform(this.registerForm.value.fromDate, 'MM-dd-yyyy');
      if (this.title === 'Đăng ký học CĐ mới') {
        this.cellService.registerNewTrainingMulti(this.registerForm.value).subscribe(() => {
          this.modalService.dismissAll();
          this.currentMulti = undefined;
          this.getCurrentMultiTraining();
          this.snackBar.open('Đăng ký thành công!!', '', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        });
      } else {

      }
    }
  }
  editTrainingInfo(data, modal) {
    this.title = 'Sửa thông tin cho ' + data.code;
    this.modalService.open(modal, { size: 'xl', centered: true });
    this.registerForm.patchValue(data);
  }
  searchByDept(event) {
    for (const iterator of this.deptList) {
      if (iterator.name === event) {
        this.sharedService.getModelByDeptId(iterator.id).subscribe(res => this.listModel = res.data);
      }
    }
  }

  searchByModel(modelId) {
    this.sharedService.getCellByModelId(modelId).subscribe(res => this.listCell = res.data);
  }

  searchByCell(cellId) {
    this.sharedService.getCellByCellId(cellId).subscribe(res => this.listStation = res.data);
  }

  createImgPath() {
    if (this.code < 1000 || this.code === 0 || this.error) {
      return 'assets/images/users/no_image.png';
    } else {
      return `http://localhost:5001/resources/images/${this.code}.PNG`;
    }
  }

  getInfo(code: number) {
    this.code = code;
    this.sharedService.getUserInfo(code).subscribe(res => {
      this.userInfo = res.data;
      if (!this.userInfo.groupChild.includes('Multi')) {
        this.errorResponse = 'Code này không phải Multi!';
        // tslint:disable-next-line:no-string-literal
        this.registerForm.controls['dept'].disable();
      } else {
        this.errorResponse = '';
        // tslint:disable-next-line:no-string-literal
        this.registerForm.controls['dept'].enable();
      }
    }, err => {
      if (err === 'Invalid Code') {
        this.errorResponse = 'Code này không tồn tại';
        // tslint:disable-next-line:no-string-literal
        this.registerForm.controls['dept'].disable();
      }
    });
    this.cellService.searchImage(code).subscribe(res => console.log(res), err => this.error = true);
  }

}
