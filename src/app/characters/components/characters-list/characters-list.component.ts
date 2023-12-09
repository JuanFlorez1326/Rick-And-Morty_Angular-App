import { Component, Input } from '@angular/core';
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
    public filterService: FilterService
  ) {}
}