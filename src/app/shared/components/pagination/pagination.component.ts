import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { AppState } from '../../ngrx/app.state';
import { FilterService } from '../../services/filter.service';
import { CharacterService } from 'src/app/characters/services/character.service';
import * as fromActions from '../../../characters/characters-store/actions/characters.actions';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

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
