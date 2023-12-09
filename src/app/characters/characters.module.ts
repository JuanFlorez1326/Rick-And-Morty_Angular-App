import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CharactersStoreModule } from './characters-store/characters-store.module';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersPageComponent } from './containers/characters-page/characters-page.component';
import { CharactersDetailComponent } from './components/characters-detail/characters-detail.component';
import { CharactersDetailPageComponent } from './containers/characters-detail-page/characters-detail-page.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CharactersPageComponent
  },
  {
    path: 'detail/:id',
    component: CharactersDetailPageComponent
  }
];

@NgModule({
  declarations: [
    CharactersListComponent,
    CharactersPageComponent,
    CharactersDetailComponent,
    CharactersDetailPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CharactersStoreModule,
    RouterModule.forChild(routes)
  ]
})
export class CharactersModule {}