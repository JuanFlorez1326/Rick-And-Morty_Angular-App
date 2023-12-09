import { Injectable } from '@angular/core';
import { Character } from 'src/app/characters/interfaces/characters.interface';
import { Episodes } from 'src/app/episodes/interfaces/episodes.interface';
import { Locations } from 'src/app/location/interfaces/location.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  public filteredCharacters: Character[] = [];
  public filteredLocations : Locations[] = [];
  public filteredEpisodes  : Episodes [] = [];
  public searchTerm!: string;

  public uniqueFilter(characters: Character[]) {
    this.searchTerm = '';
    setTimeout(() => this.filteredCharacters = characters);
  }

  public uniqueFilterLocations(locations: Locations[]) {
    this.searchTerm = '';
    setTimeout(() => this.filteredLocations = locations);
  }

  public uniqueFilterEpisodes(episodes: Episodes[]) {
    this.searchTerm = '';
    setTimeout(() => this.filteredEpisodes = episodes);
  }
}