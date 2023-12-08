import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-episodes-detail',
  templateUrl: './episodes-detail.component.html',
  styleUrls: ['./episodes-detail.component.scss']
})
export class EpisodesDetailComponent {
  @Input() currentEpisode!: any;
}
