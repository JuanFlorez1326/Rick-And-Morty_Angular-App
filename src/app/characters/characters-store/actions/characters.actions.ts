import { Action } from '@ngrx/store';
import { CharactersResponse } from '../../interfaces/characters.interface';

export enum CharactersActionTypes {
    LOAD_ALL_CHARACTERS = '[CHARACTERS] Load All Characters',
    LOAD_ALL_CHARACTERS_SUCCESS = '[CHARACTERS] Load All Characters Success',
    LOAD_ALL_CHARACTERS_ERROR = '[CHARACTERS] Load All Characters Error'
}

export class LoadAllCharacters implements Action {
    readonly type = CharactersActionTypes.LOAD_ALL_CHARACTERS;
}

export class LoadAllCharactersSuccess implements Action {
    readonly type = CharactersActionTypes.LOAD_ALL_CHARACTERS_SUCCESS;
    constructor(public payload: CharactersResponse ) {}
}

export class LoadAllCharactersError implements Action {
    readonly type = CharactersActionTypes.LOAD_ALL_CHARACTERS_ERROR;
    constructor(public payload: { error: any }) {}
}


export type CHARACTERS_ACTIONS = 
    | LoadAllCharacters
    | LoadAllCharactersSuccess
    | LoadAllCharactersError;