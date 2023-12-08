import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as fromActions from '../actions/episodes.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, catchError, map, mergeMap, of } from 'rxjs';
import { EpisodesService } from '../../services/episodes.service';
import { EpisodesResponse } from '../../interfaces/episodes.interface';

@Injectable()
export class EpisodesEffects {
    
    constructor(
        private actions$: Actions,
        private episodesService: EpisodesService
    ) {}

    loadAllEpisodes$: Observable<Action> = createEffect(()  => {
        return this.actions$.pipe(
            ofType(fromActions.EpisodesActionTypes.LOAD_ALL_EPISODES),
            mergeMap((action: fromActions.LoadAllEpisodes) => {
                return this.episodesService.getAllEpisodes().pipe(
                    map((data: EpisodesResponse ) => {
                        return new fromActions.LoadAllEpisodesSuccess(data);
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
        return of(new fromActions.LoadAllEpisodesError({ error }));
    }
}