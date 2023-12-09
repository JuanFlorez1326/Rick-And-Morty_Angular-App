import { Store } from '@ngrx/store';
import { Component, Input } from '@angular/core';
import { AppState } from 'src/app/shared/ngrx/app.state';
import { Character } from '../../interfaces/characters.interface';
import { CharacterService } from '../../services/character.service';
import { FilterService } from 'src/app/shared/services/filter.service';
import * as fromActions from '../../characters-store/actions/characters.actions';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent {

  @Input() characters!: any;
  @Input() isLoading!: boolean | null;
  
  public counterSum: number = 1;
  public firstPage : number = 1;
  public lastPage  : number = 42;
  public storagePage: string = 'currentPage';

  constructor(
    public characterService: CharacterService,
    public filterService: FilterService,
    private store: Store<AppState>
  ) { 
    if ( localStorage.getItem(this.storagePage) ) {
      this.counterSum = parseInt( localStorage.getItem(this.storagePage)!);
    }
  }

  public search(event: any) {
    this.filterService.searchTerm = event.target.value;
    this.filterService.filteredCharacters = this.characters.filter( (character: Character) => {
      return character.name.toLowerCase().includes( this.filterService.searchTerm.toLowerCase() );
    });
  }

  public nextPage() {
    this.counterSum++;
    this.filterService.searchTerm = '';
    this.characterService.currentPage = this.counterSum;
    this.store.dispatch( new fromActions.LoadAllCharacters() );
    localStorage.setItem( this.storagePage, this.counterSum.toString() );
  }

  public previousPage() {
    this.counterSum--;
    this.filterService.searchTerm = '';
    this.characterService.currentPage = this.counterSum;
    this.store.dispatch( new fromActions.LoadAllCharacters() );
    localStorage.setItem( this.storagePage, this.counterSum.toString() );
  }
}