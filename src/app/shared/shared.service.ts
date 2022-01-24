import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AbstractService } from './abstract/abstract.service';
import { IResponseData, IReturnData } from './models/returndata.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService extends AbstractService {
  private dept = new BehaviorSubject('');
  private model = new BehaviorSubject('');

  currentDeptValue = this.dept.asObservable();
  currentModelValue = this.model.asObservable();

  private shared = {
    listModel: `${environment.apiURL}/model`,
    listCell: `${environment.apiURL}/cell`,
    listStation: `${environment.apiURL}/station`,
    userInfo: `${environment.apiURL}/user`
  };
  constructor(
    private httpClient: HttpClient,
  ) {
    super();
  }

  changeDept(value: string) {
    this.dept.next(value);
  }

  changeModel(value: string) {
    this.model.next(value);
  }

  getModelByDeptId(deptId: number) {
    return this.httpClient.get<any>(this.shared.listModel + `/${deptId}`);
  }
  getCellByModelId(modelId: number) {
    return this.httpClient.get<IReturnData>(this.shared.listCell + `/${modelId}`);
  }
  getCellByCellId(cellId: number) {
    return this.httpClient.get<IReturnData>(this.shared.listStation + `/${cellId}`);
  }
  getUserInfo(code: number) {
    return this.httpClient.get<IResponseData>(this.shared.userInfo + `/${code}`);
  }

}
