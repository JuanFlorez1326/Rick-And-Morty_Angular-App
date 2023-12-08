import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as fromActions from '../actions/characters.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, catchError, map, mergeMap, of } from 'rxjs';
import { CharacterService } from '../../services/character.service';
import { CharactersResponse } from '../../interfaces/characters.interface';

@Injectable()
export class CharactersEffects {
    
    constructor(
        private actions$: Actions,
        private characterService: CharacterService
    ) {}

    loadAllCharacters$: Observable<Action> = createEffect(()  => {
        return this.actions$.pipe(
            ofType(fromActions.CharactersActionTypes.LOAD_ALL_CHARACTERS),
            mergeMap((action: fromActions.LoadAllCharacters) => {
                return this.characterService.getAllCharacters().pipe(
                    map((data: CharactersResponse ) => {
                        return new fromActions.LoadAllCharactersSuccess(data);
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
        return of(new fromActions.LoadAllCharactersError({ error }));
    }
}