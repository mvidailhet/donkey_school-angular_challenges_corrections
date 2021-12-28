import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateDonkeyComponent } from './pages/create-donkey/create-donkey.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { DonkeysListComponent } from './components/donkeys-list/donkeys-list.component';
import { DonkeyComponent } from './components/donkey/donkey.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDonkeyComponent,
    HomeComponent,
    DonkeysListComponent,
    DonkeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
