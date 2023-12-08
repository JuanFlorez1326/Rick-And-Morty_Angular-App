import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EpisodesResponse } from '../interfaces/episodes.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  private baseUrl: string = environment.baseUrl;
  private urlCharacters: string = '/episode';
  
  public currentPage: string = '1';

  constructor(
    private http: HttpClient
  ) { }

  public getAllEpisodes(): Observable<EpisodesResponse> {
    const completedUrl: string = this.baseUrl + this.urlCharacters;
    const params: { page: string } = { page: this.currentPage };
    return this.http.get<EpisodesResponse>(completedUrl, { params });
  }
}