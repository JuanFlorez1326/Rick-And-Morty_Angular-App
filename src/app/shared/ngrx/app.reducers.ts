import { AppState } from "./app.state";
import { ActionReducerMap } from '@ngrx/store';
import * as fromCharactersReducers from '../../characters/characters-store/reducers/characters.reducers';

export const reducers: ActionReducerMap<AppState, any> = {
    charactersState: fromCharactersReducers.reducer
};