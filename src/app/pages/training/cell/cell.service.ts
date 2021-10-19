import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from 'src/app/shared/abstract/abstract.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CellService extends AbstractService {
  private multi = {
    getImage: `${environment.imageURL}/resources/images`,
    uploadAbilityFile: `${environment.apiURL}/uploadexcel/read`,
    registerNewTrainingMulti: `${environment.apiURL}/training/cell/multi`,
    getMultiTraining: `${environment.apiURL}/training/cell/multi`,
    updateFinishTimeMultiTraining: `${environment.apiURL}/training/cell/multi`,
    getHistoryMultiTraining: `${environment.apiURL}/training/cell/multi/history`
  };
  constructor(private http: HttpClient) {
    super();
  }
  searchImage(code: number) {
    return this.http.get<any>(this.multi.getImage + `/${code}.PNG`);
  }
  registerNewTrainingMulti(body) {
    return this.http.post<any>(this.multi.registerNewTrainingMulti, this.toHttpBody(body));
  }
  getCurrentMultiTraining(code?: number) {
    if (code === undefined) {
      return this.http.get<any>(this.multi.getMultiTraining);
    } else {
      return this.http.get<any>(this.multi.getMultiTraining, {
        params: { code: code !== undefined ? code : 0 },
      });
    }

  }
  updateFinishTime(id: number) {
    return this.http.put<any>(this.multi.updateFinishTimeMultiTraining, { id });
  }
  getHistoryMultiTraining(code?: number) {
    if (code === undefined) {
      return this.http.get<any>(this.multi.getHistoryMultiTraining);
    } else {
      return this.http.get<any>(this.multi.getHistoryMultiTraining, {
        params: { code },
      });
    }

  }
}
