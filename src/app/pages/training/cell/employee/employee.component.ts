import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { throwError } from 'rxjs';
import { DeptSearchComponent } from 'src/app/shared/components/dept-search/dept-search.component';
import { ModelSearchComponent } from 'src/app/shared/components/model-search/model-search.component';
import { StationSearchComponent } from 'src/app/shared/components/station-search/station-search.component';
import { IReturnData } from 'src/app/shared/models/returndata.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  model: NgbDateStruct;
  searchMultiForm: FormGroup;
  listModel: any;
  @ViewChild('deptSearch') deptSearch: DeptSearchComponent;
  @ViewChild('modelSearch') modelSearch: ModelSearchComponent;
  @ViewChild('stationSearch') stationSearch: StationSearchComponent;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private sharedService: SharedService
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
