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
    path: 'quienes-somos',
    loadChildren: () =>
      import('./pages/quienes-somos/quienes-somos.module').then(
        m => m.QuienesSomosModule
      )
  },
  {
    path: 'tasa-del-dia',
    loadChildren: () =>
      import('./pages/day-tax/day-tax.module').then(
        m => m.DayTaxModule
      )
  },
  {
    path: 'ayuda',
    loadChildren: () =>
      import('./pages/help/help.module').then(
        m => m.HelpModule
      )
  },
  {
    path: 'crear-cuenta',
    loadChildren: () =>
      import('./pages/signup/signup.module').then(
        m => m.SignupModule
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
    path: 'realizar-transferencia',
    loadChildren: () =>
      import('./pages/transfer/transfer.module').then(
        m => m.TransferModule
      )
  },
  {
    path: 'mi-perfil',
    loadChildren: () =>
      import('./pages/profile/profile.module').then(
        m => m.ProfileModule
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

