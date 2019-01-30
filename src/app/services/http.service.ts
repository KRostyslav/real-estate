import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private API_URL: string = 'http://private-1b3550-phpbackend.apiary-mock.com/offerings';

  constructor( private http: HttpClient ) { }

  public getAllBuildingd(): Observable<Building[]> {
    return this.http.get<Building[]>(this.API_URL);
  }
}
