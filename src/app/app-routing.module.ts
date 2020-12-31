import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './page/grid/grid.component';
import { PhotoComponent } from './page/photo/photo.component';

const routes: Routes = [
  {
    path: 'photos',
    component: GridComponent
  },
  {
    path: 'photo/:id',
    component: PhotoComponent
  },
  {
    path: '**',
    redirectTo: 'photos',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
