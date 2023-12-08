import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAdapters from '../adapters/locations.adapters';
import { LocationsState } from "../states/locations.state";
import * as fromActions from '../actions/locations.actions';

export const initialState: LocationsState = fromAdapters.adapter.getInitialState({
    isLoading: false,
    success: false,
    error: null
});

export function reducer( state = initialState, action: fromActions.CHARACTERS_ACTIONS): LocationsState {
    switch (action.type) {
        case fromActions.CharactersActionTypes.LOAD_ALL_LOCATIONS: {
            return { ...state, isLoading: true, success: false, error: null };
        }
        case fromActions.CharactersActionTypes.LOAD_ALL_LOAD_ALL_LOCATIONS_SUCCESS: {
            return fromAdapters.adapter.setAll(action.payload.results, { ...state, isLoading: false, success: true, error: null });
        }
        case fromActions.CharactersActionTypes.LOAD_ALL_LOAD_ALL_LOCATIONS_ERROR: {
            return { ...state, isLoading: false, success: false, error: action.payload.error };
        }
        default: {
            return state;
        }
    }
}

export const getLocationsState = createFeatureSelector<LocationsState>('locationsState');
export const selectAllLocations = createSelector(getLocationsState, fromAdapters.selectLocations);
export const selectLocationById = (id: number) => createSelector(getLocationsState, (state: LocationsState) => state.entities[id]);

export const getError = (state: LocationsState) => state.error;
export const getSuccess = (state: LocationsState) => state.success;
export const getIsLoading = (state: LocationsState) => state.isLoading;

export const selectLocationsError = createSelector(getLocationsState, getError);
export const selectLocationsSuccess = createSelector(getLocationsState, getSuccess);
export const selectLocationsIsLoading = createSelector(getLocationsState, getIsLoading);