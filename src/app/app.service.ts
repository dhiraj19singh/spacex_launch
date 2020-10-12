import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getData(data: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('limit', data.limit);
    if (data.launch_success !== null) {
      params = params.append('launch_success', data.launch_success);
    }
    if (data.land_success !== null) {
      params = params.append('land_success', data.land_success);
    }
    if (data.launch_year !== null) {
      params = params.append('launch_year', data.launch_year);
    }
    return this.httpClient.get<any>('https://api.spaceXdata.com/v3/launches',
      { params: params });
  }
}
