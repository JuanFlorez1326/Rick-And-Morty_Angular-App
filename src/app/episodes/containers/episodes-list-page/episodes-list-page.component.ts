import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { AppState } from 'src/app/shared/ngrx/app.state';
import { Episodes } from '../../interfaces/episodes.interface';
import * as fromActions from '../../episodes-store/actions/episodes.actions';
import * as fromReducers from '../../episodes-store/reducers/episodes.reducers';

@Component({
  selector: 'app-episodes-list-page',
  templateUrl: './episodes-list-page.component.html'
})
export class EpisodesListPageComponent {
  
  public episodes$!: Observable<Episodes[] | null>;
  public isLoading$!: Observable<boolean | null>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new fromActions.LoadAllEpisodes());
    this.episodes$ = this.store.select(fromReducers.selectAllEpisodes);
    this.isLoading$ = this.store.select(fromReducers.selectEpisodesIsLoading);
  }
}