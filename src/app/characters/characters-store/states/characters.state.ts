import { EntityState } from '@ngrx/entity';
import { Character } from '../../interfaces/characters.interface';

export interface CharactersState extends EntityState<Character> {
    isLoading: boolean;
    success: boolean;
    error: any;
}