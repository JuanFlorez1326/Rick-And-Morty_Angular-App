import { Component, Input } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { CharacterService } from 'src/app/characters/services/character.service';
import { Character } from 'src/app/characters/interfaces/characters.interface';
import { Locations } from 'src/app/location/interfaces/location.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input() data!: any;
  @Input() isLoading!: boolean | null;
  @Input() title!: string;
  @Input() example!: string;
  @Input() filterType!: 'characters' | 'locations' | 'episodes';

  constructor(
    public characterService: CharacterService,
    public filterService: FilterService
  ) {}

  public search(event: any, filterType: string): void {
    this.filterService.searchTerm = event.target.value;
  
    if (filterType === 'characters') {
      this.filterService.filteredCharacters = this.data.filter((character: Character) => {
        return character.name.toLowerCase().includes(this.filterService.searchTerm.toLowerCase());
      });
    } else if (filterType === 'locations') {
      this.filterService.filteredLocations = this.data.filter((location: Locations) => {
        return location.name.toLowerCase().includes(this.filterService.searchTerm.toLowerCase());
      });
    }
  }
}