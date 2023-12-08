import { CharactersState } from 'src/app/characters/characters-store/states/characters.state';
import { LocationsState } from '../../location/location-store/states/locations.state';

export interface AppState {
    charactersState: CharactersState;
    locationsState: LocationsState;
}