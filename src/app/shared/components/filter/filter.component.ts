import { FilterService } from '../../services/filter.service';
import { Component, Input, SimpleChanges } from '@angular/core';
import { Character } from 'src/app/characters/interfaces/characters.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Input() characters: Character[] = [];

  public leakedCharacters: Character[] = [];
  public allStatus : string[] = [];
  public allGenders: string[] = [];
  public allSpecies: string[] = [];

  constructor(
    private filterService: FilterService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.getAllStatus();
      this.getAllGenders();
      this.getAllSpecies();
      this.allCharacters();
    }
  }

  public allCharacters() {
    this.leakedCharacters = this.characters;
    this.filterService.uniqueFilter(this.leakedCharacters);
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

  public getAllStatus() {
    this.characters.forEach((character: Character) => {
      if (!this.allStatus.includes(character.status)) {
        this.allStatus.push(character.status);
      }
    });
  }

  public getAllGenders() {
    this.characters.forEach((character: Character) => {
      if (!this.allGenders.includes(character.gender)) {
        this.allGenders.push(character.gender);
      }
    });
  }

  public getAllSpecies() {
    this.characters.forEach((character: Character) => {
      if (!this.allSpecies.includes(character.species)) {
        this.allSpecies.push(character.species);
      }
    });
  }
}