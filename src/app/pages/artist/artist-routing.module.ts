import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../homepage/pages/index/index.component';
import { CreateComponent } from '../album/pages/create/create.component';
import { ReadComponent } from './pages/read/read.component';
import { UpdateComponent } from './pages/update/update.component';
import { DeleteComponent } from './pages/delete/delete.component';

const routes: Routes = [

  {
    path: 'homepage',
    component: IndexComponent
  },

  {
    path: 'artist', 

    children: [

      {
        path: '',
        component: CreateComponent
      },

      {
        path: ':id',
        children: [
          
          {
            path: 'read',
            component: ReadComponent
          },

          { 
            path: 'edit',
            component: UpdateComponent
          },

          {
            path: 'delete',
            component: DeleteComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
