import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Component } from '@angular/core';
import { AppState } from 'src/app/shared/ngrx/app.state';
import { Locations } from '../../interfaces/location.interface';
import * as fromActions from '../../location-store/actions/locations.actions';
import * as fromReducers from '../../location-store/reducers/locations.reducers';

@Component({
  selector: 'app-location-list-page',
  templateUrl: './location-list-page.component.html'
})
export class LocationListPageComponent {

  public locations$!: Observable<Locations[]>;
  public isLoading$!: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new fromActions.LoadAllLocations());
    this.locations$ = this.store.select(fromReducers.selectAllLocations);
    this.isLoading$ = this.store.select(fromReducers.selectLocationsIsLoading);
  }
}
