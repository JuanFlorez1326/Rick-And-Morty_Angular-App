import { Injectable } from '@angular/core';
import { Character } from 'src/app/characters/interfaces/characters.interface';
import { Locations } from 'src/app/location/interfaces/location.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  public filteredCharacters: Character[] = [];
  public filteredLocations : Locations[] = [];
  public searchTerm!: string;

  public uniqueFilter(characters: Character[]) {
    this.searchTerm = '';
    setTimeout(() => this.filteredCharacters = characters);
  }

  public uniqueFilterLocations(locations: Locations[]) {
    setTimeout(() => this.filteredLocations = locations);
  }
}