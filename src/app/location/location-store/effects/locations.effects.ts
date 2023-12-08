import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as fromActions from '../actions/locations.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, catchError, map, mergeMap, of } from 'rxjs';
import { LocationsService } from '../../services/locations.service';
import { LocationResponse } from '../../interfaces/location.interface';


@Injectable()
export class LocationsEffects {
    
    constructor(
        private actions$: Actions,
        private locationsService: LocationsService
    ) {}

    loadAllCharacters$: Observable<Action> = createEffect(()  => {
        return this.actions$.pipe(
            ofType(fromActions.CharactersActionTypes.LOAD_ALL_LOCATIONS),
            mergeMap((action: fromActions.LoadAllLocations) => {
                return this.locationsService.getAllLocations().pipe(
                    map((data: LocationResponse ) => {
                        return new fromActions.LoadAllLocationsSuccess(data);
                    }),
                    catchError(error => {
                        return this.onError(error);
                    })
                );
            })
        );
    });

    private onError(error: any): Observable<Action> {
        console.log('ERROR: ', error);
        return of(new fromActions.LoadAllLocationsError({ error }));
    }
}