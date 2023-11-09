import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Moment } from '../models/moment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/moments`

  
  

  constructor( private http: HttpClient) { }

  public createMoment(formData: FormData): Observable<FormData> {
    
    return this.http.post<FormData>(this.apiUrl, formData);

  }
}
