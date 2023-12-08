import { Action } from '@ngrx/store';
import { EpisodesResponse } from '../../interfaces/episodes.interface';

export enum EpisodesActionTypes {
    LOAD_ALL_EPISODES = '[EPISODES] Load All Episodes',
    LOAD_ALL_EPISODES_SUCCESS = '[EPISODES] Load All Episodes Success',
    LOAD_ALL_EPISODES_ERROR = '[EPISODES] Load All Episodes Error'
}

export class LoadAllEpisodes implements Action {
    readonly type = EpisodesActionTypes.LOAD_ALL_EPISODES;
}

export class LoadAllEpisodesSuccess implements Action {
    readonly type = EpisodesActionTypes.LOAD_ALL_EPISODES_SUCCESS;
    constructor(public payload: EpisodesResponse ) {}
}

export class LoadAllEpisodesError implements Action {
    readonly type = EpisodesActionTypes.LOAD_ALL_EPISODES_ERROR;
    constructor(public payload: { error: any }) {}
}


export type EPISODES_ACTIONS = 
    | LoadAllEpisodes
    | LoadAllEpisodesSuccess
    | LoadAllEpisodesError;