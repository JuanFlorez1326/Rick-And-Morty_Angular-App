import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/shared/ngrx/app.state';
import { Locations } from '../../interfaces/location.interface';
import * as fromActions from '../../location-store/actions/locations.actions';
import * as fromReducers from '../../location-store/reducers/locations.reducers';

@Component({
  selector: 'app-location-detail-page',
  templateUrl: './location-detail-page.component.html',
  styleUrls: ['./location-detail-page.component.scss']
})
export class LocationDetailPageComponent {
  public currentLocation$!: Observable<Locations | undefined>;
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
    this.store.dispatch(new fromActions.LoadAllLocations());
    this.currentLocation$ = this.store.select(fromReducers.selectLocationById(id));
  }
}