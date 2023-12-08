import { AppState } from "./app.state";
import { ActionReducerMap } from '@ngrx/store';
import * as fromEpisodesReducers from '../../episodes/episodes-store/reducers/episodes.reducers';
import * as fromLocationsReducers from '../../location/location-store/reducers/locations.reducers';
import * as fromCharactersReducers from '../../characters/characters-store/reducers/characters.reducers';

export const reducers: ActionReducerMap<AppState, any> = {
    charactersState: fromCharactersReducers.reducer,
    locationsState: fromLocationsReducers.reducer,
    episodesState: fromEpisodesReducers.reducer
};