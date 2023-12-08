import { EntityState } from '@ngrx/entity';
import { Locations } from '../../interfaces/location.interface';

export interface LocationsState extends EntityState<Locations> {
    isLoading: boolean;
    success: boolean;
    error: any;
}