import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { CharactersResponse } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl: string = environment.baseUrl;
  private urlCharacters: string = '/character/';
  
  public currentPage: string = '1';

  constructor(
    private http: HttpClient
  ) { }

  public getAllCharacters(): Observable<CharactersResponse> {
    const completedUrl: string = this.baseUrl + this.urlCharacters;
    const params: { page: string } = { page: this.currentPage };
    return this.http.get<CharactersResponse>(completedUrl, { params });
  }
}
