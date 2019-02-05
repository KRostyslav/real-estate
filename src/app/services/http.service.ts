import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {AppSettings} from '../shared/configs/AppSettings';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient ) { }

  public getAllBuildingd(): Observable<Building[]> {
    // return this.http.get<Building[]>(AppSettings.MOCK_ENDPOINT + 'mock');
    return this.http.get<Building[]>(AppSettings.MOCK_ENDPOINT + 'offerings');
  }
  
}
