import { Component, Input } from '@angular/core';
import { Locations } from '../../interfaces/location.interface';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent {

  @Input() locations!: Locations[] | null;
  @Input() isLoading!: boolean | null;
}