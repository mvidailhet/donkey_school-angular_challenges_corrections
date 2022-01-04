import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import localeFr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateDonkeyComponent } from './pages/create-donkey/create-donkey.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { DonkeysListComponent } from './components/donkeys-list/donkeys-list.component';
import { DonkeyComponent } from './components/donkey/donkey.component';
import { UserDonkeysListComponent } from './components/user-donkeys-list/user-donkeys-list.component';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    CreateDonkeyComponent,
    HomeComponent,
    DonkeysListComponent,
    DonkeyComponent,
    UserDonkeysListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
