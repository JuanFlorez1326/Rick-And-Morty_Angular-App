import { Component, Input, SimpleChanges } from '@angular/core';
import { Locations } from '../../interfaces/location.interface';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent {

  @Input() locations!: any;
  @Input() isLoading!: boolean | null;

  public leakedLocations: any[] = [];
  public types: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) this.getAllTypes();
    if ( changes['locations'] && this.locations ) {
      this.leakedLocations = changes['locations'].currentValue;
    }
  }

  public filter( value: string ) {
    if ( value === 'all' ) return this.leakedLocations = this.locations;
    this.leakedLocations = this.locations.filter( (character: Locations) => {
      return character.type.toLowerCase().includes( value.toLowerCase() );
    });
  }

  public getAllTypes() {
    const types: string[] = [];
    this.locations.forEach( (character: Locations) => {
      if ( !types.includes( character.type ) ) types.push( character.type );
    });
    this.types = types.sort();
  }
}