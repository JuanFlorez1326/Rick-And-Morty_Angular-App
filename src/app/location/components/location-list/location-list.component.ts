import { Component, Input } from '@angular/core';
import { FilterService } from '../../../shared/services/filter.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent {

  @Input() locations!: any;
  @Input() isLoading!: boolean | null;

  constructor(
    public filterService: FilterService
  ) {}
}