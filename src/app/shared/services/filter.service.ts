import { Injectable } from '@angular/core';
import { Character } from 'src/app/characters/interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  public filteredCharacters: Character[] = [];
  public searchTerm!: string;

  public uniqueFilter(characters: Character[]) {
    setTimeout(() => this.filteredCharacters = characters);
  }
}