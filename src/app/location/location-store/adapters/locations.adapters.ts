import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Locations } from '../../interfaces/location.interface';

export const adapter: EntityAdapter<Locations> = createEntityAdapter<Locations>({
    selectId: x => x.id
});

export const {
    selectAll: selectLocations
} = adapter.getSelectors();