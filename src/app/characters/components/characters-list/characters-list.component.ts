import { Component, Input, SimpleChanges } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) this.getAllStatus();
    if ( changes['characters'] && this.characters ) {
      this.leakedCharacters = changes['characters'].currentValue;
    }
  }

  public filter( value: string ) {
    if ( value === 'all' ) return this.leakedCharacters = this.characters;
    this.leakedCharacters = this.characters.filter( (character: Character) => {
      return character.status.toLowerCase().includes( value.toLowerCase() );
    });
  }

  public getAllStatus() {
    const status: string[] = [];
    this.characters.forEach( (character: Character) => {
      if ( !status.includes( character.status ) ) status.push( character.status );
    });
    this.allStatus = status.sort();
  }
}