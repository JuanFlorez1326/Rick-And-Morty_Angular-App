import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharactersStoreModule } from './characters-store/characters-store.module';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersPageComponent } from './containers/characters-page/characters-page.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CharactersPageComponent
  }
];

@NgModule({
  declarations: [
    CharactersListComponent,
    CharactersPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CharactersStoreModule,
    RouterModule.forChild(routes)
  ]
})
export class CharactersModule {}