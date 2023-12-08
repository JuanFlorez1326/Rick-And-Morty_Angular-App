import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Character } from '../../interfaces/characters.interface';

export const adapter: EntityAdapter<Character> = createEntityAdapter<Character>({
    selectId: x => x.id
});

export const {
    selectAll: selectCharacters
} = adapter.getSelectors();