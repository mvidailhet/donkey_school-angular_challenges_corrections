import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InscriptionRoutingModule } from './inscription-routing.module';
import { InscriptionComponent } from './inscription.component';

@NgModule({
  declarations: [InscriptionComponent],
  imports: [CommonModule, InscriptionRoutingModule, NgbModule],
  providers: [],
})
export class InscriptionModule {}
