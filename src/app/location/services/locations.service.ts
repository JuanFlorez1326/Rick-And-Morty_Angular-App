import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { LocationResponse } from '../interfaces/location.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private baseUrl: string = environment.baseUrl;
  private urlCharacters: string = '/location';
  
  public currentPage: string = '1';

  constructor(
    private http: HttpClient
  ) { }

  public getAllLocations(): Observable<LocationResponse> {
    const completedUrl: string = this.baseUrl + this.urlCharacters;
    const params: { page: string } = { page: this.currentPage };
    return this.http.get<LocationResponse>(completedUrl, { params });
  }
}
