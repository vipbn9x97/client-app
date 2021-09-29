import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StoreService } from '../core/services/storage.service';
import { AbstractService } from './abstract/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService extends AbstractService {
  private shared = {
    listModel: `${environment.apiURL}/model`,
  };
  constructor(
    private httpClient: HttpClient,
    storeService: StoreService
  ) {
    super();
  }

  getModelByDeptId(deptId: number) {
    return this.httpClient.get<any>(this.shared.listModel + `/${deptId}`);
  }

}
