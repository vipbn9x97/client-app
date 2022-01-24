import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { ModelData } from 'src/app/shared/models/returndata.model';
import { SharedService } from 'src/app/shared/shared.service';
import { UtilService } from 'src/app/core/services/utils/utilities.service';
import { MultiforceService } from '../multiforce.service';
import { finalize } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss']
})
export class AbilityComponent implements OnInit {
  listModel: ModelData[];
  currentDept: number;
  currentModel;
  deptId: number;
  isValid: boolean;
  listMulti = [];
  abilityFilter = {
    code: '',
    model: [],
  };
  isVisible: string;
  loading: boolean;
  transactions: Array<[]>;
  statData: Array<[]>;
  isActive: string;

  constructor(
    private shareService: SharedService,
    private utilService: UtilService,
    private multiService: MultiforceService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.deptId = JSON.parse(this.cookieService.get('user')).DeptId;
    this.getDept(this.deptId);
  }

  updateCode(code: string) {
    this.abilityFilter.code = code;
  }

  getDept(deptId: number) {
    this.currentDept = deptId;
    this.shareService.getModelByDeptId(deptId).subscribe(res => this.listModel = res);
  }

  onChangeModel(model: any) {
    console.log(model);
  }
  updateModel(model) {
    if (model.length > 0) {
      this.abilityFilter.model = [];
      for (const iterator of model) {
        this.abilityFilter.model.push(iterator.modelId);
      }
    } else {
      this.abilityFilter.model = [];
    }
  }
  searchData() {
    if (this.abilityFilter.model.length > 0) {
      const newFilter = {
        code: '',
        model: this.abilityFilter.model.toString()
      };
      this.multiService.getMultiListByModel(newFilter).subscribe(res => console.log(res));
    }
    else if (this.abilityFilter.model.length === 0 && this.abilityFilter.code !== '') {
      const newFilter = {
        code: this.abilityFilter.code,
        model: ''
      };
      this.multiService.getMultiListByModel(newFilter).subscribe(res => console.log(res));
    }
    else return;
  }
  uploadFile(files: FileList) {
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
        text: `Bạn có muốn upload file ${files[0].name}?`,
        icon: 'warning',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        showCancelButton: true
      })
      .then(result => {
        if (result.value && files.length > 0) {
          this.loading = true;
          this.utilService.uploadAbilities(files.item(0)).pipe(finalize(() => this.loading = false))
            .subscribe(() => swalWithBootstrapButtons.fire(
              'Successful!',
              `Upload thành công file ${files[0].name}.`,
              'success'
            ));
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
}
