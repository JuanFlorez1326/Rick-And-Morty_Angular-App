import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent {
  
  @Input() character!: any;
} 