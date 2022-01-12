import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDonkeyComponent } from './pages/create-donkey/create-donkey.component';

const routes: Routes = [
  {
    path: '',
    component: CreateDonkeyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
