import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationResponse } from '../interfaces/location.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private baseUrl: string = environment.baseUrl;
  private urlLocation: string = '/location';
  
  public currentPage: string = '1';

  constructor(
    private http: HttpClient
  ) { }

  public getAllLocations(): Observable<LocationResponse> {
    const completedUrl: string = this.baseUrl + this.urlLocation;
    const params: { page: string } = { page: this.currentPage };
    return this.http.get<LocationResponse>(completedUrl, { params });
  }
}