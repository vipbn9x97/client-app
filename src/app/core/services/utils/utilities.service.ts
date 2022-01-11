
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/shared/abstract/abstract.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UtilService extends AbstractService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  uploadAbilities(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    // tslint:disable-next-line:max-line-length
    return this.httpClient.post<any>(`${environment.apiURL}/upload/excel`, formData, { headers: new HttpHeaders({ Accept: 'application/json', 'No-Content-Type': 'yes' }) });
  }

  uploadSupporter(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    // tslint:disable-next-line:max-line-length
    return this.httpClient.post<any>(`${environment.apiURL}/upload/excel-supporter`, formData, { headers: new HttpHeaders({ Accept: 'application/json', 'No-Content-Type': 'yes' }) });
  }
}
