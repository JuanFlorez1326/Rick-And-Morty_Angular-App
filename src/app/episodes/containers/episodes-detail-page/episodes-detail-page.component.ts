import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/shared/ngrx/app.state';
import { Episodes } from '../../interfaces/episodes.interface';
import * as fromActions from '../../episodes-store/actions/episodes.actions';
import * as fromReducers from '../../episodes-store/reducers/episodes.reducers';

@Component({
  selector: 'app-episodes-detail-page',
  templateUrl: './episodes-detail-page.component.html'
})
export class EpisodesDetailPageComponent {

  public currentEpisode$!: Observable<Episodes | undefined>;
  public locationId!: number;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.locationId = +params['id'];      
      this.getCharacter(this.locationId);
    });  
  }

  public getCharacter(id: number) {
    this.store.dispatch(new fromActions.LoadAllEpisodes());
    this.currentEpisode$ = this.store.select(fromReducers.selectEpisodeById(id));
  }
}