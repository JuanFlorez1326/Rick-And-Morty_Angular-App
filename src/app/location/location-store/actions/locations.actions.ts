import { Action } from '@ngrx/store';
import { LocationResponse } from '../../interfaces/location.interface';

export enum LocationsActionTypes {
    LOAD_ALL_LOCATIONS = '[LOCATIONS] Load All Locations',
    LOAD_ALL_LOAD_ALL_LOCATIONS_SUCCESS = '[LOCATIONS] Load All Locations Success',
    LOAD_ALL_LOAD_ALL_LOCATIONS_ERROR = '[LOCATIONS] Load All Locations Error'
}

export class LoadAllLocations implements Action {
    readonly type = LocationsActionTypes.LOAD_ALL_LOCATIONS;
}

export class LoadAllLocationsSuccess implements Action {
    readonly type = LocationsActionTypes.LOAD_ALL_LOAD_ALL_LOCATIONS_SUCCESS;
    constructor(public payload: LocationResponse ) {}
}

export class LoadAllLocationsError implements Action {
    readonly type = LocationsActionTypes.LOAD_ALL_LOAD_ALL_LOCATIONS_ERROR;
    constructor(public payload: { error: any }) {}
}

export type LOCATIONS_ACTIONS = 
    | LoadAllLocations
    | LoadAllLocationsSuccess
    | LoadAllLocationsError;