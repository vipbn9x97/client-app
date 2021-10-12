import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  private file = {
    images: `${environment.apiURL}/upload/images`
  };
  constructor(private http: HttpClient) { }

  uploadImages(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', this.file.images, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getImages(imagepath: string) {
    return this.http.get(`http://localhost:5000/resources/images/${imagepath}.PNG`);
  }

  downloadImages() {
    return this.http.get(this.file.images);
  }
}
