import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { CharacterService } from '../../services/character.service';
import { AppState } from 'src/app/shared/ngrx/app.state';
import { Store } from '@ngrx/store';
import * as fromActions from '../../characters-store/actions/characters.actions';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent {

  @Input() characters!: any;
  @Input() isLoading!: boolean | null;
  
  public leakedCharacters: any[] = [];
  public allStatus: string[] = [];
  public allGenders: string[] = [];
  public allSpecies: string[] = [];

  public counterSum: number = 1;
  public storagePage: string = 'currentPage';

  constructor(
    public characterService: CharacterService,
    private store: Store<AppState>
  ) { 
    if ( localStorage.getItem(this.storagePage) ) {
      this.counterSum = parseInt( localStorage.getItem(this.storagePage)! );
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.getAllStatus();
      this.getAllGenders();
      this.getAllSpecies();
    }
    if ( changes['characters'] && this.characters ) {
      this.leakedCharacters = changes['characters'].currentValue;
    }
  }

  public nextPage() {
    this.counterSum++;
    this.characterService.currentPage = this.counterSum;
    this.store.dispatch( new fromActions.LoadAllCharacters() );
    localStorage.setItem( this.storagePage, this.counterSum.toString() );
  }

  public previousPage() {
    this.counterSum--;
    this.characterService.currentPage = this.counterSum;
    this.store.dispatch( new fromActions.LoadAllCharacters() );
    localStorage.setItem( this.storagePage, this.counterSum.toString() );
  }

  public filterStatus( value: string ) {
    if ( value === 'all' ) return this.leakedCharacters = this.characters;
    this.leakedCharacters = this.characters.filter( (character: Character) => {
      return character.status.toLowerCase().includes( value.toLowerCase() );
    });
  }

  public filterGender( value: string ) {
    if ( value === 'all' ) return this.leakedCharacters = this.characters;
    this.leakedCharacters = this.characters.filter( (character: Character) => {
      return character.gender.toLowerCase().includes( value.toLowerCase() );
    });
  }

  public filterSpecies( value: string ) {
    if ( value === 'all' ) return this.leakedCharacters = this.characters;
    this.leakedCharacters = this.characters.filter( (character: Character) => {
      return character.species.toLowerCase().includes( value.toLowerCase() );
    });
  }

  public getAllStatus() {
    const status: string[] = [];
    this.characters.forEach( (character: Character) => {
      if ( !status.includes( character.status ) ) status.push( character.status );
    });
    this.allStatus = status.sort();
  }

  public getAllGenders() {
    const gender: string[] = [];
    this.characters.forEach( (character: Character) => {
      if ( !gender.includes( character.gender ) ) gender.push( character.gender );
    });
    this.allGenders = gender.sort();
  }

  public getAllSpecies() {
    const species: string[] = [];
    this.characters.forEach( (character: Character) => {
      if ( !species.includes( character.species ) ) species.push( character.species );
    });
    this.allSpecies = species.sort();
  }
}