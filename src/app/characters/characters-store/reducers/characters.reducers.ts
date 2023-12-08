import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAdapters from '../adapters/characters.adapters';
import { CharactersState } from "../states/characters.state";
import * as fromActions from '../actions/characters.actions';

export const initialState: CharactersState = fromAdapters.adapter.getInitialState({
    isLoading: false,
    success: false,
    error: null
});

export function reducer( state = initialState, action: fromActions.CHARACTERS_ACTIONS): CharactersState {
    switch (action.type) {
        case fromActions.CharactersActionTypes.LOAD_ALL_CHARACTERS: {
            return { ...state, isLoading: true, success: false, error: null };
        }
        case fromActions.CharactersActionTypes.LOAD_ALL_CHARACTERS_SUCCESS: {
            return fromAdapters.adapter.setAll(action.payload.results, { ...state, isLoading: false, success: true, error: null });
        }
        case fromActions.CharactersActionTypes.LOAD_ALL_CHARACTERS_ERROR: {
            return { ...state, isLoading: false, success: false, error: action.payload.error };
        }
        default: {
            return state;
        }
    }
}

export const getCharactersState = createFeatureSelector<CharactersState>('charactersState');
export const selectAllCharacters = createSelector(getCharactersState, fromAdapters.selectCharacters);

export const getError = (state: CharactersState) => state.error;
export const getSuccess = (state: CharactersState) => state.success;
export const getIsLoading = (state: CharactersState) => state.isLoading;

export const selectCharactersError = createSelector(getCharactersState, getError);
export const selectCharactersSuccess = createSelector(getCharactersState, getSuccess);
export const selectCharactersIsLoading = createSelector(getCharactersState, getIsLoading);