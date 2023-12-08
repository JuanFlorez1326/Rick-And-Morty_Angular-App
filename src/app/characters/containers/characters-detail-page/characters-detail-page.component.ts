import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/shared/ngrx/app.state';
import { Character } from '../../interfaces/characters.interface';
import * as fromActions from '../../characters-store/actions/characters.actions';
import * as fromReducers from '../../characters-store/reducers/characters.reducers';

@Component({
  selector: 'app-characters-detail-page',
  templateUrl: './characters-detail-page.component.html'
})
export class CharactersDetailPageComponent {

  public currentCharacter$!: Observable<Character | undefined>;
  public characterId!: number;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.characterId = +params['id'];      
      this.getCharacter(this.characterId);
    });  
  }

  public getCharacter(id: number) {
    this.store.dispatch(new fromActions.LoadAllCharacters());
    this.currentCharacter$ = this.store.select(fromReducers.selectCharacterById(id));
  }
}
