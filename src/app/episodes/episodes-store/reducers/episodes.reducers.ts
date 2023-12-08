import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAdapters from '../adapters/episodes.adapters';
import * as fromActions from '../actions/episodes.actions';
import { EpisodesState } from "../states/episodes.state";

export const initialState: EpisodesState = fromAdapters.adapter.getInitialState({
    isLoading: false,
    success: false,
    error: null
});

export function reducer( state = initialState, action: fromActions.EPISODES_ACTIONS): EpisodesState {
    switch (action.type) {
        case fromActions.EpisodesActionTypes.LOAD_ALL_EPISODES: {
            return { ...state, isLoading: true, success: false, error: null };
        }
        case fromActions.EpisodesActionTypes.LOAD_ALL_EPISODES_SUCCESS: {
            return fromAdapters.adapter.setAll(action.payload.results, { ...state, isLoading: false, success: true, error: null });
        }
        case fromActions.EpisodesActionTypes.LOAD_ALL_EPISODES_ERROR: {
            return { ...state, isLoading: false, success: false, error: action.payload.error };
        }
        default: {
            return state;
        }
    }
}

export const getEpisodesState = createFeatureSelector<EpisodesState>('episodesState');
export const selectAllEpisodes = createSelector(getEpisodesState, fromAdapters.selectEpisodes);
export const selectEpisodeById = (id: number) => createSelector(getEpisodesState, (state: EpisodesState) => state.entities[id]);

export const getError = (state: EpisodesState) => state.error;
export const getSuccess = (state: EpisodesState) => state.success;
export const getIsLoading = (state: EpisodesState) => state.isLoading;

export const selectEpisodesError = createSelector(getEpisodesState, getError);
export const selectEpisodesSuccess = createSelector(getEpisodesState, getSuccess);
export const selectEpisodesIsLoading = createSelector(getEpisodesState, getIsLoading);