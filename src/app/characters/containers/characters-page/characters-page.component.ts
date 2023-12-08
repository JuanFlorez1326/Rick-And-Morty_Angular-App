import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/shared/ngrx/app.state';
import { Character } from '../../interfaces/characters.interface';
import * as fromActions from '../../characters-store/actions/characters.actions';
import * as fromReducers from '../../characters-store/reducers/characters.reducers';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html'
})
export class CharactersPageComponent implements OnInit {

  public characters$!: Observable<Character[]>;
  public isLoading$!: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new fromActions.LoadAllCharacters());
    this.characters$ = this.store.select(fromReducers.selectAllCharacters);
    this.isLoading$ = this.store.select(fromReducers.selectCharactersIsLoading);
  }
}