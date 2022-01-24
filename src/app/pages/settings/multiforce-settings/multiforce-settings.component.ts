import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';
import { finalize } from 'rxjs/operators';
import { IModel } from '../settings';
import { SettingsService } from '../settings.service';
import { Project } from './project.model';
import { projectData } from './projectdata';

@Component({
  selector: 'app-multiforce-settings',
  templateUrl: './multiforce-settings.component.html',
  styleUrls: ['./multiforce-settings.component.scss']
})
export class MultiforceSettingsComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  projectData: Project[];
  listModel: IModel[];
  deptId: number;
  constructor(private cookieService: CookieService, private settingService: SettingsService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Settings' }, { label: 'Multiforce', active: true }];
    this.deptId = JSON.parse(this.cookieService.get('user')).DeptId;
    this.projectData = projectData;
    this.getListModels();
  }

  getListModels() {
    this.settingService.getModelByDept(this.deptId).subscribe(res => {
      this.listModel = res;
    }, () => {
    });
  }
  changeOrderMulti(event, model: IModel) {
    this.settingService.updateOrderMultiStatus({ name: model.name, status: event.target.checked })
      // .pipe(finalize(() => this.loading = false))
      .subscribe(() => this.snackBar.open('Update thành công', 'dismiss', {
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
        duration: 3000
      }));
  }
}
