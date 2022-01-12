import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDonkeyComponent } from './pages/create-donkey/create-donkey.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create',
    component: CreateDonkeyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
