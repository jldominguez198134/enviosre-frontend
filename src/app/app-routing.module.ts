import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(
        m => m.HomeModule
      )
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(
        m => m.LoginModule
      )
  },

  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/not-found-page/not-found-page.module').then(
        m => m.NotFoundPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

