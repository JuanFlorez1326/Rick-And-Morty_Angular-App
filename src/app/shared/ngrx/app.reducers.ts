import { AppState } from "./app.state";
import { ActionReducerMap } from '@ngrx/store';
import * as fromLocationsReducers from '../../location/location-store/reducers/locations.reducers';
import * as fromCharactersReducers from '../../characters/characters-store/reducers/characters.reducers';

export const reducers: ActionReducerMap<AppState, any> = {
    charactersState: fromCharactersReducers.reducer,
    locationsState: fromLocationsReducers.reducer
};