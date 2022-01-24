import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { IAbsent } from '../../multiforce/multi';
import { MultiforceService } from '../../multiforce/multiforce.service';
import { IEmployee } from '../dashboard';

@Component({
  selector: 'app-absent-register',
  templateUrl: './absent-register.component.html',
  styleUrls: ['./absent-register.component.scss']
})
export class AbsentRegisterComponent implements OnInit {
  @Input() employee: IEmployee;
  @Input() error: string;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  dateNow: any;
  registerForm: FormGroup;
  errorResponse: string;
  userData: any;
  constructor(
    public activeModal: NgbActiveModal,
    public fb: FormBuilder,
    private cookie: CookieService,
    private datepipe: DatePipe
  ) { }

  ngOnInit() {
    this.userData = JSON.parse(this.cookie.get('user'));
    this.dateNow = new Date().toISOString();
    this.registerForm = this.fb.group({
      typeAbsent: ['', [Validators.required]],
      shift: ['', [Validators.required]],
      fromDate: ['', [Validators.required]],
      toDate: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });
  }

  get f() { return this.registerForm.controls; }

  register() {
    if (this.registerForm.value.type === ''
      || this.registerForm.value.shift === ''
      || this.registerForm.value.fromDate === ''
      || this.registerForm.value.toDate === ''
      || this.registerForm.value.typeAbsent === '') {
      this.errorResponse = 'Vui lòng nhập đầy đủ thông tin!';
    } else {
      let absentType = '';
      if (this.registerForm.value.type === 'Nghỉ cả ngày') {
        absentType = 'all';
      } else if (this.registerForm.value.type === 'Nghỉ buổi sáng') {
        absentType = 'morning';
      } else {
        absentType = 'afternoon';
      }
      const absentInfo: IAbsent = {
        type: absentType,
        // tslint:disable-next-line:object-literal-shorthand
        typeAbsent: this.registerForm.value.typeAbsent,
        shift: this.registerForm.value.shift,
        fromDate: this.datepipe.transform(this.registerForm.value.fromDate, 'MM-dd-yyyy'),
        toDate: this.datepipe.transform(this.registerForm.value.toDate, 'MM-dd-yyyy'),
        stationId: this.employee.stationId
      };
      this.passEntry.emit(absentInfo);
    }
  }

  createImgPath(employee: IEmployee) {
    if (employee.imagepath === 0) {
      return 'assets/images/users/no_image.png';
    } else {
      // return `http://localhost:5000/resources/images/${employee.code}.PNG`;
    }
  }
}
