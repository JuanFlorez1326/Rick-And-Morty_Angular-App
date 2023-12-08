import { Component, Input, SimpleChanges } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent {

  @Input() characters!: Character[] | null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && this.characters) {
      console.log(changes);
      console.log(this.characters);
    }
  }
}