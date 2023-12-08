import { Action } from '@ngrx/store';
import { LocationResponse } from '../../interfaces/location.interface';

export enum CharactersActionTypes {
    LOAD_ALL_LOCATIONS = '[CHARACTERS] Load All Characters',
    LOAD_ALL_LOAD_ALL_LOCATIONS_SUCCESS = '[CHARACTERS] Load All Characters Success',
    LOAD_ALL_LOAD_ALL_LOCATIONS_ERROR = '[CHARACTERS] Load All Characters Error'
}

export class LoadAllLocations implements Action {
    readonly type = CharactersActionTypes.LOAD_ALL_LOCATIONS;
}

export class LoadAllLocationsSuccess implements Action {
    readonly type = CharactersActionTypes.LOAD_ALL_LOAD_ALL_LOCATIONS_SUCCESS;
    constructor(public payload: LocationResponse ) {}
}

export class LoadAllLocationsError implements Action {
    readonly type = CharactersActionTypes.LOAD_ALL_LOAD_ALL_LOCATIONS_ERROR;
    constructor(public payload: { error: any }) {}
}


export type CHARACTERS_ACTIONS = 
    | LoadAllLocations
    | LoadAllLocationsSuccess
    | LoadAllLocationsError;