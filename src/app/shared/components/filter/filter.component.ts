import { FilterService } from '../../services/filter.service';
import { Component, Input, SimpleChanges } from '@angular/core';
import { Character } from 'src/app/characters/interfaces/characters.interface';
import { Locations } from 'src/app/location/interfaces/location.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Input() characters: Character[] = [];
  @Input() locations : Locations[] = [];

  public leakedCharacters: Character[] = [];
  public leakedLocations: Locations[] = [];

  public allStatus : string[] = [];
  public allGenders: string[] = [];
  public allSpecies: string[] = [];
  public allTypeLocations: string[] = [];

  constructor(
    private filterService: FilterService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.getAllStatus();
      this.getAllGenders();
      this.getAllSpecies();
      this.getAllTypeLocations();
      this.allCharacters();
      this.allLocations();
    }
  }

  public allCharacters() {
    this.leakedCharacters = this.characters;
    this.filterService.uniqueFilter(this.leakedCharacters);
  }

  public allLocations() {
    this.leakedLocations = this.locations;
    this.filterService.uniqueFilterLocations(this.leakedLocations);
  }

  public filterByStatus( status: string ) {    
    this.leakedCharacters = this.characters.filter((character: Character) => character.status === status);
    this.filterService.uniqueFilter(this.leakedCharacters);
  }

  public filterByGenders( gender: string ) {    
    this.leakedCharacters = this.characters.filter((character: Character) => character.gender === gender);
    this.filterService.uniqueFilter(this.leakedCharacters);
  }

  public filterBySpecies( specie: string ) {   
    this.leakedCharacters = this.characters.filter((character: Character) => character.species === specie);
    this.filterService.uniqueFilter(this.leakedCharacters);
  }

  public filterByLocation( location: string ) {   
    this.leakedLocations = this.locations.filter((locations: Locations) => locations.type === location);
    this.filterService.uniqueFilterLocations(this.leakedLocations);
  }

  public getAllTypeLocations() {
    this.allTypeLocations = [];
    this.locations.forEach((locations: Locations) => {
      if (!this.allTypeLocations.includes(locations.type)) {
        this.allTypeLocations.push(locations.type);
      }
    });
  }

  public getAllStatus() {
    this.allStatus = [];
    this.characters.forEach((character: Character) => {
      if (!this.allStatus.includes(character.status)) {
        this.allStatus.push(character.status);
      }
    });
  }

  public getAllGenders() {
    this.allGenders = [];
    this.characters.forEach((character: Character) => {
      if (!this.allGenders.includes(character.gender)) {
        this.allGenders.push(character.gender);
      }
    });
  }

  public getAllSpecies() {
    this.allSpecies = [];
    this.characters.forEach((character: Character) => {
      if (!this.allSpecies.includes(character.species)) {
        this.allSpecies.push(character.species);
      }
    });
  }
}