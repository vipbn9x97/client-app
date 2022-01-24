import { DatePipe } from '@angular/common';
import { Component, DoCheck, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { throwError } from 'rxjs';
import { DeptSearchComponent } from 'src/app/shared/components/dept-search/dept-search.component';
import { ModelSearchComponent } from 'src/app/shared/components/model-search/model-search.component';
import { StationSearchComponent } from 'src/app/shared/components/station-search/station-search.component';
import { IReturnData } from 'src/app/shared/models/returndata.model';
import { SharedService } from 'src/app/shared/shared.service';
import { MultiforceService } from '../multiforce.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit, OnChanges {
  breadCrumbItems: Array<{}>;
  model: NgbDateStruct;
  searchMultiForm: FormGroup;
  listModel: any;
  requestFilter = { deptId: 0, from_date: '', to_date: '', shift: '' };
  orderList;
  @ViewChild('deptSearch') deptSearch: DeptSearchComponent;
  @ViewChild('modelSearch') modelSearch: ModelSearchComponent;
  @ViewChild('stationSearch') stationSearch: StationSearchComponent;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private sharedService: SharedService,
    private multiService: MultiforceService,
    private cookieService: CookieService,
    private datepipe: DatePipe
  ) {
    this.searchMultiForm = this.fb.group({
      dept: [''],
      model: [''],
      station: [''],
      date: [''],
      shift: ['']
    });
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Multiforce' }, { label: 'List Request', active: true }];
    this.requestFilter.from_date = this.datepipe.transform(
      new Date(new Date().getFullYear(), 0, 1).toString(),
      'MM-dd-yyyy'
    );
    this.requestFilter.to_date = this.datepipe.transform(
      new Date().toString(),
      'MM-dd-yyyy'
    );
    this.requestFilter.deptId = JSON.parse(this.cookieService.get('user')).DeptId;
    this.getListOrderMulti();
  }

  getListOrderMulti() {
    this.multiService.getListOrderByDept(this.requestFilter).subscribe(res => this.orderList = res);
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  search(event: string) { }

  changeShift(event: string) {
  }

  getStationId(event: string) {
  }

  onChangeDept(event: number) {
    // console.log(!!this.deptSearch);
    this.searchMultiForm.setControl('model', this.fb.control(''));
    this.searchMultiForm.setControl('station', this.fb.control(''));
    if (!!this.modelSearch) {
      this.modelSearch.clear();
      this.modelSearch.modelControl.markAsUntouched({ onlySelf: true });
    }
    if (!!this.stationSearch) {
      this.stationSearch.clear();
      this.stationSearch.stationControl.markAsUntouched({ onlySelf: true });
    }
    this.sharedService.getModelByDeptId(event).subscribe((res: any) => {
      this.listModel = res;
    }, err => throwError(err));
  }
  onChangeModel(event) {
    this.searchMultiForm.setControl('station', this.fb.control(''));
    if (!!this.modelSearch) {
      this.stationSearch.clear();
      this.stationSearch.stationControl.markAsUntouched({ onlySelf: true });
    }
  }
}
