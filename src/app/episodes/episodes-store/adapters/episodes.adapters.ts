import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Episodes } from '../../interfaces/episodes.interface';

export const adapter: EntityAdapter<Episodes> = createEntityAdapter<Episodes>({
    selectId: x => x.id
});

export const {
    selectAll: selectEpisodes
} = adapter.getSelectors();