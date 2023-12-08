import { EntityState } from '@ngrx/entity';
import { Episodes } from '../../interfaces/episodes.interface';

export interface EpisodesState extends EntityState<Episodes> {
    isLoading: boolean;
    success: boolean;
    error: any;
}