import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundModule } from './pages/not-found/not-found.module';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/homepage'
  },

  {
    path: '**',
    component: NotFoundModule
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
