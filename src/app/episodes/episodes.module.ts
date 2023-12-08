import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { EpisodesStoreModule } from './episodes-store/episodes-store.module';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';
import { EpisodesDetailComponent } from './components/episodes-detail/episodes-detail.component';
import { EpisodesListPageComponent } from './containers/episodes-list-page/episodes-list-page.component';
import { EpisodesDetailPageComponent } from './containers/episodes-detail-page/episodes-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: EpisodesListPageComponent
  },
  {
    path: 'detail/:id',
    component: EpisodesDetailPageComponent
  }
];

@NgModule({
  declarations: [
    EpisodesDetailPageComponent,
    EpisodesListPageComponent,
    EpisodesListComponent,
    EpisodesDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EpisodesStoreModule,
    RouterModule.forChild(routes)
  ]
})
export class EpisodesModule {}