import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LocationStoreModule } from './location-store/location-store.module';
import { LocationListComponent } from './components/location-list/location-list.component';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';
import { LocationListPageComponent } from './containers/location-list-page/location-list-page.component';
import { LocationDetailPageComponent } from './containers/location-detail-page/location-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: LocationListPageComponent
  },
  {
    path: 'detail/:id',
    component: LocationDetailPageComponent
  }
];


@NgModule({
  declarations: [
    LocationDetailPageComponent,
    LocationListPageComponent,
    LocationDetailComponent,
    LocationListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LocationStoreModule,
    RouterModule.forChild(routes)
  ]
})
export class LocationModule {}