import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Character, CharactersResponse } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl: string = environment.baseUrl;
  private urlCharacters: string = '/character';

  constructor(
    private http: HttpClient
  ) { }

  public getAllCharacters(): Observable<CharactersResponse> {
    const completedUrl: string = this.baseUrl + this.urlCharacters;
    return this.http.get<CharactersResponse>(completedUrl);
  }
}
