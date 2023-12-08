import { CharactersState } from 'src/app/characters/characters-store/states/characters.state';
import { LocationsState } from '../../location/location-store/states/locations.state';
import { EpisodesState } from '../../episodes/episodes-store/states/episodes.state';

export interface AppState {
    charactersState: CharactersState;
    locationsState: LocationsState;
    episodesState: EpisodesState;
}