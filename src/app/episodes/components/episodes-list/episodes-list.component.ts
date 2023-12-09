import { Component, Input } from '@angular/core';
import { FilterService } from '../../../shared/services/filter.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent {
  @Input() episodes!: any;
  @Input() isLoading!: boolean | null;

  constructor(
    public filterService: FilterService
  ) {}
}