import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {AppSettings} from '../shared/configs/AppSettings';
import {Building} from '../shared/models/building.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient ) { }

  public getAllBuildingd(): Observable<Building[]> {
    return this.http.get<Building[]>(AppSettings.API_ENDPOINT + 'offerings');
  }

}
