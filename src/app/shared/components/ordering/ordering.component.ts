import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.scss']
})
export class OrderingComponent {

  @Input() data!: any[] | null;

  public sortAsc() {
    this.data?.sort((a, b) => a.name.localeCompare(b.name));
  }

  public sortDesc() {
    this.data?.sort((a, b) => b.name.localeCompare(a.name));
  }
}