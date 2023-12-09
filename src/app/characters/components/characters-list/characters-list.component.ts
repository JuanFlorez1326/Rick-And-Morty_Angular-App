import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { CharacterService } from '../../services/character.service';
import { FilterService } from 'src/app/shared/services/filter.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent {

  @Input() characters!: any;
  @Input() isLoading!: boolean | null;

  constructor(
    public characterService: CharacterService,
    public filterService: FilterService,
  ) {}

  public search(event: any) {
    this.filterService.searchTerm = event.target.value;
    this.filterService.filteredCharacters = this.characters.filter( (character: Character) => {
      return character.name.toLowerCase().includes( this.filterService.searchTerm.toLowerCase() );
    });
  }
}