import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';

const routes: Routes = [
  {
    path: '',
    component: ConnexionComponent
  },
  {
    path: 'inscription',
    loadChildren: () => import('./pages/inscription/inscription.module').then((m) => m.InscriptionModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
